import { RefObject, useCallback, useEffect, useRef } from "react";

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
      if (rAFId.current === null) {
        rAFId.current = requestAnimationFrame(updateSlideshow);
      }
    },
    [updateSlideshow]
  );

  const onMouseDown = useCallback((clientX: number) => {
    mouseDownAt.current = clientX;
  }, []);

  const onTouchStart = useCallback((clientX: number) => {
    mouseDownAt.current = clientX;
  }, []);

  const onMove = useCallback(
    (clientX: number) => {
      handlePointerMove(clientX);
    },
    [handlePointerMove]
  );

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
