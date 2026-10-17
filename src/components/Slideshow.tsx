import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import festival from "../assets/festival.jpg";
import sky from "../assets/sky.jpg";
import gymnasium from "../assets/gymnasium.jpg";
import cheeta from "../assets/cheeta.jpg";
import cheeta1 from "../assets/cheeta1.jpg";
import torchLilies from "../assets/flower.jpg";
import redBud from "../assets/flower1.jpg";
import chameleon from "../assets/chameleon.jpg";
import crocodile from "../assets/crocodile.jpg";
import snorkling from "../assets/snorkling.jpg";
import germany from "../assets/germany.jpg";
import useSlideshow from "../hooks/useSlideShow";

const photos = [
  {
    src: cheeta,
    place: "South Africa",
    year: 2015,
    alt: "Three people crouching beside a cheetah resting in the grass",
  },
  {
    src: cheeta1,
    place: "South Africa",
    year: 2015,
    alt: "A cheetah hiding its face behind its paw",
  },
  {
    src: redBud,
    place: "Lesotho",
    year: 2015,
    alt: "A deep red flower bud between broad green leaves",
  },
  {
    src: torchLilies,
    place: "Lesotho",
    year: 2015,
    alt: "Red and yellow torch lilies in front of a mountain in mist",
  },
  {
    src: chameleon,
    place: "Madagascar",
    year: 2017,
    alt: "A red chameleon with a yellow stripe, seen in profile",
  },
  {
    src: crocodile,
    place: "Madagascar",
    year: 2017,
    alt: "A crocodile resting with its jaws open beside pink flowers",
  },
  {
    src: snorkling,
    place: "Snorkelling",
    year: 2017,
    alt: "A swimmer adjusting a dive mask and snorkel",
  },
  {
    src: sky,
    place: "Sarek",
    year: 2017,
    alt: "Dusk over a frozen lake, with dark clouds above a band of gold light",
  },
  {
    src: festival,
    place: "Spain",
    year: 2019,
    alt: "A crowded street at night beside a tall tree of coloured star lights",
  },
  {
    src: gymnasium,
    place: "Gymnasium",
    year: 2019,
    alt: "A note from classmates, in Swedish, teasing Samuel for always getting top grades",
  },
  {
    src: germany,
    place: "Germany",
    year: 2023,
    alt: "A bronze statue of a soldier against a clear blue sky, seen from below",
  },
];

function Slideshow({ className }: Readonly<{ className?: string }>) {
  const trackRef = useRef<HTMLDivElement>(null);

  const {
    onMouseUp,
    onTouchEnd,
    onMouseDown,
    onTouchStart,
    onMouseMove,
    onTouchMove,
    nudge,
  } = useSlideshow(trackRef);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nudge(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nudge(-1);
    }
  }

  return (
    <div
      role="region"
      aria-label="Photo strip"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseDown={(e) => onMouseDown(e.clientX)}
      onMouseUp={onMouseUp}
      onMouseMove={(e) => onMouseMove(e.clientX)}
      onMouseLeave={onMouseUp}
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
      className={twMerge(
        "cursor-grab select-none py-3 focus-visible:outline-offset-[-2px] active:cursor-grabbing",
        className
      )}
    >
      <div className="relative left-1/2 w-max -translate-x-1/2">
        <div ref={trackRef} className="flex gap-[4vmin]" style={{ willChange: "transform" }}>
          {photos.map((photo) => (
            <figure key={photo.src} className="w-[68vw] sm:w-[42vmin] lg:w-[32vmin]">
              <img
                width={1280}
                height={720}
                src={photo.src}
                alt={photo.alt}
                draggable="false"
                loading="lazy"
                style={{ objectPosition: "50% center", willChange: "transform" }}
                className="block aspect-[5/7] w-full object-cover"
              />
              <figcaption className="caption mt-3">
                {photo.place}, {photo.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
