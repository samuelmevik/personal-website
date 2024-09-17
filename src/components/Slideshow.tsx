import { useCallback, useEffect, useRef } from "react";
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
  return Math.max(Math.min((x + (width)) / (window.innerWidth + width) * 100, 100), 0);
}

function Slideshow({ className }: { className?: string }) {
  const mouseDownAt = useRef(0);
  const prevSlide = useRef(0);
  const slide = useRef(0);
  const track = useRef<HTMLDivElement>(null);



  const onMouseUp = () => {
    mouseDownAt.current = 0;
    prevSlide.current = slide.current;
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
    if (mouseDownAt.current === 0 || !curr) return;

    const delta = mouseDownAt.current - clientX;
    const maxDelta = curr.clientWidth / 2
    const percentage = (delta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(prevSlide.current + percentage, 0), -100);

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

    slide.current = nextPercentage;
  }, [mouseDownAt, prevSlide]);


  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => mouseDownAt.current = e.clientX;
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => mouseDownAt.current = e.touches[0].clientX;
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => handlePointerMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handlePointerMove(e.touches[0].clientX);


  return (
    <div
      style={{ willChange: "transform" }}
      className={twMerge("absolute top-1/2 left-1/2 -translate-y-1/2", className)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <div ref={track} style={{ width: "max-content" }} className="reveal flex select-none gap-[4vmin]">
        {imageSources.map(({ src, alt }) => (
          <div className="group relative" key={src}>
            <img
              width={1280}
              height={720}
              style={{ objectPosition: "100% center", willChange: "transform" }}
              className="aspect-[5/7] w-[80vmin] object-cover sm:w-[40vmin]"
              src={src}
              alt={alt}
              draggable="false"
              loading="lazy"
            />
            <div className="absolute inset-x-0 text-center opacity-0 duration-1000 ease-in-out group-hover:opacity-100">
              <h2>{alt}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;