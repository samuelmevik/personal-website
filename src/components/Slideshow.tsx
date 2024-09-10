import { useCallback, useRef, useState } from "react";
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



  const onMouseUp = () => {
    setMouseDownAt(0);
    setPrevSlide(slide);
  };
  const onTouchEnd = onMouseUp;

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

    images.forEach((image) => {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });

    setSlide(nextPercentage)
  }, [mouseDownAt, prevSlide]);


  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => setMouseDownAt(e.clientX);
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setMouseDownAt(e.touches[0].clientX);
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
      <div ref={track} style={{ width: "max-content" }} className="flex reveal gap-[4vmin] select-none">
        {imageSources.map(({ src, alt }) => (
          <div className=" relative group">
            <img
              key={src}
              style={{ objectPosition: "100% center", willChange: "auto" }}
              className="w-[40vmin] min-w-52 aspect-[5/7] object-cover"
              src={src}
              alt={alt}
              draggable="false"
              loading="lazy"
            />
            <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 duration-1000 ease-in-out">
              <h2>{alt}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;