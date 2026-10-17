import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import PageWrapper from "../components/PageWrapper";
import ScatterText from "../components/ScatterText";
import useMediaQuery from "../hooks/useMediaQuery";

import sarekLarge from "../assets/header/large/1_crop.jpg";
import sarekSmall from "../assets/header/small/1_crop.jpg";
import elephantLarge from "../assets/header/large/2_crop.jpg";
import elephantSmall from "../assets/header/small/2_crop.jpg";
import catLarge from "../assets/header/large/3_crop.jpg";
import catSmall from "../assets/header/small/6_crop.jpg";
import rainbowLarge from "../assets/header/large/4_crop.jpg";
import rainbowSmall from "../assets/header/small/4_crop.jpg";
import flamingosLarge from "../assets/header/large/5_crop.jpg";
import flamingosSmall from "../assets/header/small/11_crop.jpg";
import signLarge from "../assets/header/large/6_crop.jpg";
import signSmall from "../assets/header/small/3_crop.jpg";
import lighthouseLarge from "../assets/header/large/7_crop.jpg";
import lighthouseSmall from "../assets/header/small/7_crop.jpg";
import canoeLarge from "../assets/header/large/8_crop.jpg";
import canoeSmall from "../assets/header/small/8_crop.jpg";
import statueLarge from "../assets/header/large/9_crop.jpg";
import statueSmall from "../assets/header/small/9_crop.jpg";
import tajMahalLarge from "../assets/header/large/10_crop.jpg";
import tajMahalSmall from "../assets/header/small/10_crop.jpg";
import cliffLarge from "../assets/header/large/11_crop.jpg";
import cliffSmall from "../assets/header/small/5_crop.jpg";
import beeLarge from "../assets/header/large/12_crop.jpg";
import beeSmall from "../assets/header/small/12_crop.jpg";

interface Photo {
  large: string;
  small: string;
}

interface ColumnProps {
  direction: "up" | "down";
  // Seconds into the loop to start from, so adjacent columns don't line up
  offset: number;
  className?: string;
  photos: Photo[];
}

const columns: ColumnProps[] = [
  {
    direction: "up",
    offset: 0,
    className: "hidden xl:block",
    photos: [
      { large: sarekLarge, small: sarekSmall },
      { large: lighthouseLarge, small: lighthouseSmall },
      { large: flamingosLarge, small: flamingosSmall },
      { large: signLarge, small: signSmall },
    ],
  },
  {
    direction: "down",
    offset: -14,
    photos: [
      { large: rainbowLarge, small: rainbowSmall },
      { large: tajMahalLarge, small: tajMahalSmall },
      { large: canoeLarge, small: canoeSmall },
      { large: catLarge, small: catSmall },
    ],
  },
  {
    direction: "up",
    offset: -31,
    photos: [
      { large: beeLarge, small: beeSmall },
      { large: statueLarge, small: statueSmall },
      { large: elephantLarge, small: elephantSmall },
      { large: cliffLarge, small: cliffSmall },
    ],
  },
];

function Header() {
  const [fontReady, setFontReady] = useState(false);

  // Hold the opening back until Cinzel has loaded, so the letters rise once in
  // the right typeface instead of swapping halfway through.
  useEffect(() => {
    let active = true;
    const reveal = () => {
      if (active) setFontReady(true);
    };
    const fallback = window.setTimeout(reveal, 2500);
    document.fonts.load('900 1em "Cinzel Variable"').then(reveal, reveal);
    return () => {
      active = false;
      window.clearTimeout(fallback);
    };
  }, []);

  const opening = fontReady ? "wake" : "pending";

  // The photos only appear where they fit beside the name. Smaller screens get
  // the name alone, and never download the photos.
  const wide = useMediaQuery("(min-width: 64rem)");

  return (
    <PageWrapper
      id="home"
      bare
      className="hero grid min-h-svh lg:grid-cols-[minmax(0,1fr)_40vw]"
    >
      <div className="edge-x flex flex-col justify-center py-[min(6rem,10svh)] lg:py-28">
        <ScatterText
          as="h1"
          text="Samuel Mevik"
          className={twMerge("hero-name w-fit", opening)}
          wordClassName="block w-fit uppercase"
        />
        <div className="mt-[clamp(1.75rem,4svh,3rem)] flex max-w-[44ch] flex-col gap-3">
          <p className="font-display text-[1.3125rem] leading-tight font-bold">
            Developer &amp; codecrafter
          </p>
          <p>
            I write software at Vivicta in Sweden, mostly for the web, and take
            my camera wherever I travel.
          </p>
        </div>
      </div>

      {wide && (
        <div
          aria-hidden="true"
          className={twMerge("hero-photos relative overflow-hidden", opening)}
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-[var(--gap)] xl:grid-cols-3">
            {columns.map((column, i) => (
              <Column key={i} {...column} />
            ))}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

function Column({ photos, direction, offset, className }: Readonly<ColumnProps>) {
  const animate =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  return (
    <div className={twMerge("overflow-hidden", className)}>
      <div
        className={`grid gap-[var(--gap)] ${animate}`}
        style={{ animationDelay: `${offset}s` }}
      >
        {photos.map((photo, i) => (
          <Picture key={photo.large} {...photo} eager={i < 2} />
        ))}
        {photos.map((photo) => (
          <Picture key={`${photo.large}-loop`} {...photo} />
        ))}
      </div>
    </div>
  );
}

function Picture({
  large,
  small,
  eager = false,
}: Readonly<Photo & { eager?: boolean }>) {
  return (
    <img
      src={large}
      srcSet={`${small} 360w, ${large} 800w`}
      sizes="(min-width: 80rem) 14vw, 20vw"
      width={800}
      height={1067}
      alt=""
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="block aspect-[3/4] w-full object-cover"
    />
  );
}

export default Header;
