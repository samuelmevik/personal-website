import { RefObject, useCallback, useEffect, useRef, useState } from "react";

/**
 * Calculates the object position percentage based on the image's position in the viewport.
 */
function getImageObjectPosition(image: HTMLImageElement) {
  const { width, x } = image.getBoundingClientRect();
  return Math.max(
    Math.min(((x + width) / (window.innerWidth + width)) * 100, 100),
    0
  );
}

/**
 * Animates the object's position of a single image.
 */
function updateImageObjectPosition(image: HTMLImageElement) {
  image.animate(
    {
      objectPosition: `${getImageObjectPosition(image)}% center`, // Move from right (100%) to left (0%)
    },
    { duration: 1200, fill: "forwards" }
  );
}

/**
 * Animates the track's translation along the X-axis.
 */
function animateTrack(track: HTMLDivElement, nextPercentage: number) {
  track.animate(
    {
      transform: `translateX(${nextPercentage}%)`,
    },
    { duration: 1200, fill: "forwards" }
  );
}

/**
 * Animates the positions of all visible images.
 */
function animateImages(images: HTMLImageElement[]) {
  for (const image of images) {
    const { right, left } = image.getBoundingClientRect();
    /*
    if (right < 0 || left > window.innerWidth) {
      continue; // Skip images not in viewport
    }*/

    if (right < -image.width || left > window.innerWidth + image.width) {
      continue; // Skip images not in viewport
    }

    updateImageObjectPosition(image);
  }
}

function useSlideshow(trackRef: RefObject<HTMLDivElement | null>) {
  const mouseDownAt = useRef(0);
  const prevSlide = useRef(0);
  const slide = useRef(0);
  const rAFId = useRef<number | null>(null);
  const latestClientX = useRef<number>(0);
  const images = useRef<HTMLImageElement[]>([]);
  const [isDragging, setIsDragging] = useState(false)
  const [direction, setDirection] = useState(-1);
  const cycleDurationMs = 100000; // time to go from 50 -> -50 in ms
  const speedPercentPerMs = 100 / cycleDurationMs; // percent per ms

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      images.current = [...track.querySelectorAll("img")];
    }
  }, [trackRef]);

  /**
   * Handles window resize events to animate images accordingly.
   */
  useEffect(() => {
    let resizeRAFId: number | null = null;
    const handleResize = () => {
      if (resizeRAFId !== null) {
        cancelAnimationFrame(resizeRAFId);
      }
      resizeRAFId = requestAnimationFrame(() => {
        animateImages(images.current);
        resizeRAFId = null;
      });
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      if (resizeRAFId !== null) {
        cancelAnimationFrame(resizeRAFId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [trackRef, slide]);

  /**
   * Calculates the next percentage of the slide based on the mouse position.
   */
  function getNextPercentage(curr: HTMLDivElement) {
    const delta = mouseDownAt.current - latestClientX.current;
    const maxDelta = curr.clientWidth / 2;
    const percentage = (delta / maxDelta) * -100;
    return Math.max(Math.min(prevSlide.current + percentage, 50), -50);
  }

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
    mouseDownAt.current = 0;
    prevSlide.current = slide.current;
  }, []);

  /**
   * Updates the slideshow based on the current mouse position.
   */
  const updateSlideshow = useCallback(() => {
    const curr = trackRef.current;
    if (mouseDownAt.current === 0 || !curr) {
      rAFId.current = null;
      return;
    }

    const nextPercentage = getNextPercentage(curr);

    // Animate the track's transform
    animateTrack(curr, nextPercentage);

    // Update image object positions and animates them
    animateImages(images.current);

    slide.current = nextPercentage;
    rAFId.current = null;
  }, [trackRef]);

  const handlePointerMove = useCallback(
    (clientX: number) => {
      latestClientX.current = clientX;
      rAFId.current ??= requestAnimationFrame(updateSlideshow);
    },
    [updateSlideshow]
  );

  const onMouseDown = useCallback((clientX: number) => {
    setIsDragging(true)
    mouseDownAt.current = clientX;
  }, []);

  const onTouchStart = useCallback((clientX: number) => {
    setIsDragging(true)
    mouseDownAt.current = clientX;
  }, []);

  const onMove = useCallback(
    (clientX: number) => {
      handlePointerMove(clientX);
    },
    [handlePointerMove]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let lastFrameTime: number | null = null;
    let rAFId: number | null = null;

    function frame(ts: number) {
      if (!track) { return }
      if (isDragging) {
        lastFrameTime = null;
        rAFId = requestAnimationFrame(frame);
        return;
      }

      if (lastFrameTime === null) {
        lastFrameTime = ts;
        rAFId = requestAnimationFrame(frame);
        return;
      }

      const delta = ts - lastFrameTime;
      lastFrameTime = ts;

      let next = slide.current + direction * speedPercentPerMs * delta;

      // Reverse direction at the ends
      if (next <= -50) {
        next = -50;
        setDirection(1)
      } else if (next >= 50) {
        next = 50;
        setDirection(-1)
      }

      slide.current = next;
      prevSlide.current = next;

      animateTrack(track, next);
      animateImages(images.current);

      rAFId = requestAnimationFrame(frame);
    }

    rAFId = requestAnimationFrame(frame);

    return () => {
      if (rAFId) cancelAnimationFrame(rAFId);
      lastFrameTime = null;
    };
  }, [trackRef, isDragging, direction, speedPercentPerMs]);

  return {
    onMouseUp,
    onTouchEnd: onMouseUp,
    onMouseDown,
    onTouchStart,
    onMouseMove: onMove,
    onTouchMove: onMove,
  };
}

export default useSlideshow;
