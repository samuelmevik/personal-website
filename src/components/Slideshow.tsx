import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import spain from "../assets/spain-large.jpg";
import sky from "../assets/sky-large.jpg";
import gymnasium from "../assets/gymnasium-large.jpg";
import cheeta from "../assets/cheeta-large.jpg";
import cheeta1 from "../assets/cheeta1-large.jpg";
import flowerSouthAfrica from "../assets/flower-large.jpg";
import chameleon from "../assets/chameleon-large.jpg";
import crocodile from "../assets/crocodile-large.jpg";
import flower from "../assets/flower1-large.jpg";
import snorkling from "../assets/snorkling-large.jpg";

const imageSources = [
  { src: cheeta, alt: "South Africa 2015" },
  { src: cheeta1, alt: "South Africa 2015" },
  { src: crocodile, alt: "South Africa 2015" },
  { src: flower, alt: "Lesotho 2015" },
  { src: flowerSouthAfrica, alt: "Lesotho 2015" },
  { src: chameleon, alt: "Madagaskar 2017" },
  { src: sky, alt: "Sarek 2017" },
  { src: spain, alt: "Spain 2019" },
  { src: gymnasium, alt: "Gymnasium 2019" },
  { src: snorkling, alt: "Snorkling" },
];

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
    const images = track.current?.querySelectorAll("img") ?? [];
    images.forEach((image) => {
      image.animate(
        {
          objectPosition: `${getImageObjectPosition(image)}% center`, // Move from right (100%) to left (0%)
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  }, [])

  function getImageObjectPosition(image: HTMLImageElement) {
    const { width, x } = image.getBoundingClientRect();

    // Calculate rect center and percentage
    const rectCenterX = x + width / 2;

    return Math.max(Math.min((rectCenterX / window.innerWidth) * 100, 100), 0);
  }

  const handlePointerMove = useCallback((clientX: number) => {
    const curr = track.current;
    if (mouseDownAt === 0 || !curr) return;

    const delta = mouseDownAt - clientX;
    const maxDelta = curr.clientWidth / 2
    const percentage = (delta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(prevSlide + percentage, 0), -100);

    const images = track.current.querySelectorAll("img");

    curr.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );



    for (const image of images) {
      const { left, right } = image.getBoundingClientRect();
      // Early return if the image is fully outside the viewport
      if (left > window.innerWidth || right < 0) continue;

      image.animate(
        {
          objectPosition: `${getImageObjectPosition(image)}% center`, // Move from right (100%) to left (0%)
        },
        { duration: 1200, fill: "forwards" }
      );
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
              style={{ objectPosition: "100% center", willChange: "auto" }}
              className="w-[40vmin] min-w-52 aspect-[5/7] object-cover"
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