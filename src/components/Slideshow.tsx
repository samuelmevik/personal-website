import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import spain from "../assets/spain-large.jpg";
import sky from "../assets/sky-large.jpg";
import gymnasium from "../assets/gymnasium-large.jpg";
import cheeta from "../assets/cheeta-large.jpg";
import cheeta1 from "../assets/cheeta1-large.jpg";
import flowerSouthAfrica from "../assets/flower-large.jpg";
import chameleon from "../assets/chameleon-large.jpg"
import crocodile from "../assets/crocodile-large.jpg";
import flower from "../assets/flower1-large.jpg";
import snorkling from "../assets/snorkling-large.jpg";


function Slideshow({ className }: { className?: string }) {

  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [slide, setSlide] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setMouseDownAt(e.clientX);
  }

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setMouseDownAt(e.touches[0].clientX);
  }


  function onMouseUp() {
    setMouseDownAt(0);
    setPrevSlide(slide);
  }

  function onTouchEnd() {
    onMouseUp();
  }

  const images = track.current?.querySelectorAll("img") || [];

  function handlePointerMove(clientX: number) {
    if (mouseDownAt === 0 || !track.current) return;

    const delta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 1.5;

    const percentage = (delta / maxDelta) * -100;
    const nextSlideUnconstrained = prevSlide + percentage;

    const nextPercentage = Math.max(Math.min(nextSlideUnconstrained, 0), -100);

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
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    handlePointerMove(e.clientX);
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    handlePointerMove(e.touches[0].clientX);
  }



  return <div className={twMerge("absolute top-1/2 left-1/2 -translate-y-1/2", className)} onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseLeave={onMouseUp} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchMove={onTouchMove}>
    <div ref={track} style={{ width: "max-content" }} className="flex reveal gap-[4vmin] select-none *:w-[40vmin] *:h-[56vmin] *:object-cover" >
      <img
        style={{ objectPosition: "100% center" }}
        src={spain}
        draggable="false"
        alt="Festival in Spain"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src={sky}
        draggable="false"
        alt="Sky"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={gymnasium}
        draggable="false"
        alt="Gymnasium"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={cheeta}
        draggable="false"
        alt="Cheeta"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={cheeta1}
        draggable="false"
        alt="Cheeta"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={flowerSouthAfrica}
        draggable="false"
        alt="Flower"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={chameleon}
        draggable="false"
        alt="Chameleon"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={crocodile}
        draggable="false"
        alt="Crocodile"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={flower}
        draggable="false"
        alt="Flower"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={snorkling}
        draggable="false"
        alt="Snorkling"
        loading="lazy"
      />
      {/* 
      <img
        style={{ objectPosition: "100% center" }}
        src={sky}
        draggable="false"
        alt="Sky"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={gymnasium}
        draggable="false"
        alt="Gymnasium"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={cheeta}
        draggable="false"
        alt="Cheeta"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={cheeta1}
        draggable="false"
        alt="Cheeta"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={flowerSouthAfrica}
        draggable="false"
        alt="Flower"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={chameleon}
        draggable="false"
        alt="Chameleon"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={crocodile}
        draggable="false"
        alt="Crocodile"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={flower}
        draggable="false"
        alt="Flower"
        loading="lazy"
      />

      <img
        style={{ objectPosition: "100% center" }}
        src={snorkling}
        draggable="false"
        alt="Snorkling"
        loading="lazy"
      />
      */}

    </div>
  </div>
}

/*
  <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        draggable="false"
      />
      <img
        style={{ objectPosition: "100% center" }}
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />*/

export default Slideshow;