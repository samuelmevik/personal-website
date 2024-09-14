import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import spain from "../assets/festival.jpg";
import sky from "../assets/sky.jpg";
import gymnasium from "../assets/gymnasium.jpg";
import cheeta from "../assets/cheeta.jpg";
import cheeta1 from "../assets/cheeta1.jpg";
import flowerSouthAfrica from "../assets/flower.jpg";
import chameleon from "../assets/chameleon.jpg";
import crocodile from "../assets/crocodile.jpg";
import flower from "../assets/flower1.jpg";
import snorkling from "../assets/snorkling.jpg";
import germany from "../assets/germany.jpg";

const imageSources = [
  { src: cheeta, alt: "South Africa 2015" },
  { src: cheeta1, alt: "South Africa 2015" },
  { src: flower, alt: "Lesotho 2015" },
  { src: flowerSouthAfrica, alt: "Lesotho 2015" },
  { src: chameleon, alt: "Madagaskar 2017" },
  { src: crocodile, alt: "Madagaskar 2017" },
  { src: snorkling, alt: "Snorkling 2017" },
  { src: sky, alt: "Sarek 2017" },
  { src: spain, alt: "Spain 2019" },
  { src: gymnasium, alt: "Gymnasium 2019" },
  { src: germany, alt: "Germany 2023" },
];
function updateImageObjectPosition(image: HTMLImageElement) {
  image.animate(
    {
      objectPosition: `${getImageObjectPosition(image)}% center`, // Move from right (100%) to left (0%)
    },
    { duration: 1200, fill: "forwards" }
  );
}

function getImageObjectPosition(image: HTMLImageElement) {
  const { width, x } = image.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const offset = (x + (width - viewportWidth) / 2) / viewportWidth * 100;
  return Math.max(Math.min(50 + offset, 100), 0);
}

function Slideshow({ className }: { className?: string }) {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement>(null);



  const onMouseUp = () => {
    setMouseDownAt(0);
    setPrevSlide(slide);
  };
  const onTouchEnd = onMouseUp;

  useEffect(() => {
    const images = [...(track.current?.querySelectorAll("img") ?? [])];
    images.forEach(updateImageObjectPosition)
    window.addEventListener("resize", () => images.forEach(updateImageObjectPosition));
    return () => window.removeEventListener("resize", () => images.forEach(updateImageObjectPosition));
  }, [])

  const handlePointerMove = useCallback((clientX: number) => {
    const curr = track.current;
    if (mouseDownAt === 0 || !curr) return;

    const delta = mouseDownAt - clientX;
    const maxDelta = curr.clientWidth / 2
    const percentage = (delta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(prevSlide + percentage, 0), -100);

    curr.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = [...(track.current?.querySelectorAll("img") ?? [])]

    for (const image of images) {
      // If the image is not visible, don't animate it
      const { right, left } = image.getBoundingClientRect();
      if (right < 0 || left > window.innerWidth) {
        continue;
      }
      updateImageObjectPosition(image);
    }

    setSlide(nextPercentage)
  }, [mouseDownAt, prevSlide]);


  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => setMouseDownAt(e.clientX);
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setMouseDownAt(e.touches[0].clientX);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => handlePointerMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handlePointerMove(e.touches[0].clientX);


  return (
    <div
      style={{ willChange: "auto" }}
      className={twMerge("absolute top-1/2 left-1/2 -translate-y-1/2", className)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <div ref={track} style={{ width: "max-content" }} className="flex reveal gap-[4vmin] select-none">
        {imageSources.map(({ src, alt }) => (
          <div className="relative group" key={src}>
            <img
              width={1280}
              height={720}
              style={{ objectPosition: "100% center", willChange: "auto" }}
              className="sm:w-[40vmin] w-80 aspect-[5/7] object-cover"
              src={src}
              alt={alt}
              draggable="false"
              loading="lazy"
            />
            <div className="absolute inset-x-0 text-center opacity-0 group-hover:opacity-100 duration-1000 ease-in-out">
              <h2>{alt}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;