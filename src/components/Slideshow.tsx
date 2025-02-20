import { useRef } from "react";
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
import useSlideshow from "../hooks/useSlideShow";

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

function Slideshow({ className }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const {
    onMouseUp,
    onTouchEnd,
    onMouseDown,
    onTouchStart,
    onMouseMove,
    onTouchMove,
  } = useSlideshow(trackRef);

  return (
    <div
      style={{ willChange: "transform" }}
      className={twMerge(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      onMouseDown={(e) => onMouseDown(e.clientX)}
      onMouseUp={onMouseUp}
      onMouseMove={(e) => onMouseMove(e.clientX)}
      onMouseLeave={onMouseUp}
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
    >
      <div
        ref={trackRef}
        style={{ width: "max-content" }}
        className="reveal flex select-none gap-[4vmin]"
      >
        {imageSources.map(({ src, alt }) => (
          <ImageSlide key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}

function ImageSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative" key={src}>
      <img
        width={1280}
        height={720}
        style={{ objectPosition: "50% center", willChange: "transform" }}
        className="aspect-[5/7] w-[80vmin] object-cover sm:w-[40vmin]"
        src={src}
        alt={alt}
        draggable="false"
        loading="lazy"
      />
      <div className="absolute inset-x-0 grid place-items-center opacity-0 duration-1000 ease-in-out group-hover:opacity-100">
        <h3 className="text-nowrap">{alt}</h3>
      </div>
    </div>
  );
}

export default Slideshow;
