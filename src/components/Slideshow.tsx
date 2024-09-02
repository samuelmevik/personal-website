import { useCallback, useMemo, useRef, useState } from "react";
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
  { src: spain, alt: "Festival in Spain" },
  { src: sky, alt: "Sky" },
  { src: gymnasium, alt: "Gymnasium" },
  { src: cheeta, alt: "Cheeta" },
  { src: cheeta1, alt: "Cheeta" },
  { src: flowerSouthAfrica, alt: "Flower" },
  { src: chameleon, alt: "Chameleon" },
  { src: crocodile, alt: "Crocodile" },
  { src: flower, alt: "Flower" },
  { src: snorkling, alt: "Snorkling" },
];

function Slideshow({ className }: { className?: string }) {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => setMouseDownAt(e.clientX);
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setMouseDownAt(e.touches[0].clientX);
  const onMouseUp = () => {
    setMouseDownAt(0);
    setPrevSlide(slide);
  };
  const onTouchEnd = onMouseUp;

  const images = useMemo(() => track.current?.querySelectorAll("img") || [], []);

  const handlePointerMove = useCallback((clientX: number) => {
    if (mouseDownAt === 0 || !track.current) return;

    const delta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 1.5;
    const percentage = (delta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(prevSlide + percentage, 0), -100);

    track.current.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
    setSlide(nextPercentage);

    images.forEach((image) => {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  }, [mouseDownAt, prevSlide, images]);



  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => handlePointerMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handlePointerMove(e.touches[0].clientX);


  return (
    <div
      className={twMerge("absolute top-1/2 left-1/2 -translate-y-1/2", className)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <div ref={track} style={{ width: "max-content" }} className="flex reveal gap-[4vmin] select-none *:w-[40vmin] *:h-[56vmin] *:object-cover">
        {imageSources.map(({ src, alt }) => (
          <img
            key={src}
            style={{ objectPosition: "100% center", willChange: "auto" }}
            src={src}
            alt={alt}
            draggable="false"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;