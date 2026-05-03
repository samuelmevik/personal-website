import PageWrapper from "../components/PageWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";

import img1L from "../assets/header/large/1_crop.jpg";
import img1S from "../assets/header/small/1_crop.jpg";

import img2L from "../assets/header/large/2_crop.jpg";
import img2S from "../assets/header/small/2_crop.jpg";

import img3L from "../assets/header/large/3_crop.jpg";
import img3S from "../assets/header/small/3_crop.jpg";

import img4L from "../assets/header/large/4_crop.jpg";
import img4S from "../assets/header/small/4_crop.jpg";

import img5L from "../assets/header/large/5_crop.jpg";
import img5S from "../assets/header/small/5_crop.jpg";

import img6L from "../assets/header/large/6_crop.jpg";
import img6S from "../assets/header/small/6_crop.jpg";

import img7L from "../assets/header/large/7_crop.jpg";
import img7S from "../assets/header/small/7_crop.jpg";

import img8L from "../assets/header/large/8_crop.jpg";
import img8S from "../assets/header/small/8_crop.jpg";

import img9L from "../assets/header/large/9_crop.jpg";
import img9S from "../assets/header/small/9_crop.jpg";

import img10L from "../assets/header/large/10_crop.jpg";
import img10S from "../assets/header/small/10_crop.jpg";

import img11L from "../assets/header/large/11_crop.jpg";
import img11S from "../assets/header/small/11_crop.jpg";

import img12L from "../assets/header/large/12_crop.jpg";
import img12S from "../assets/header/small/12_crop.jpg";

function Header() {
  return (
    <PageWrapper
      id="home"
      bare
      className="relative grid h-svh place-items-center overflow-hidden"
    >
      {/* Image grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 gap-[2vmin] px-[2vmin] [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_3%)] md:grid-cols-3"
      >
        <Column direction="up" className="hidden md:block">
          <Picture large={img1L} small={img1S} loading="eager" alt="" />
          <Picture large={img2L} small={img2S} loading="eager" alt="" />
          <Picture large={img3L} small={img3S} alt="" />
          <Picture large={img4L} small={img4S} alt="" />
        </Column>
        <Column direction="down">
          <Picture large={img5L} small={img5S} loading="eager" alt="" />
          <Picture large={img6L} small={img6S} loading="eager" alt="" />
          <Picture large={img7L} small={img7S} loading="eager" alt="" />
          <Picture large={img8L} small={img8S} loading="eager" alt="" />
        </Column>
        <Column direction="up">
          <Picture large={img9L} small={img9S} loading="eager" alt="" />
          <Picture large={img10L} small={img10S} loading="eager" alt="" />
          <Picture large={img11L} small={img11S} alt="" />
          <Picture large={img12L} small={img12S} alt="" />
        </Column>
      </div>

      {/* Soft vignette so the title reads cleanly over the imagery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--bg)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/35 dark:bg-black/45"
      />

      {/* Top meta strip */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[var(--edge)] pt-[clamp(1.25rem,4vmin,2.25rem)]">
        <span className="eyebrow">Samuel Mevik · Portfolio</span>
        <span className="eyebrow hidden sm:block">Sweden · 2026</span>
      </div>

      {/* Centered title */}
      <div className="relative z-10 flex flex-col items-center gap-[clamp(1rem,3vmin,2rem)] px-[var(--edge)] text-center">
        <span className="reveal flex items-center gap-3 text-current/70">
          <span aria-hidden="true" className="block h-px w-8 bg-current/40" />
          <span className="eyebrow">Web Developer & Code-Crafter</span>
          <span aria-hidden="true" className="block h-px w-8 bg-current/40" />
        </span>

        <SentenceGroup
          className="mx-auto max-w-[14ch]"
          props={{ style: { fontSize: "clamp(3rem, 11vw, 11rem)" } }}
        >
          <LetterGroup>
            <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              S
            </span>
            <span className="transform group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              A
            </span>
            <span className="transform group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              M
            </span>
            <span className="transform group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              U
            </span>
            <span className="transform group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              E
            </span>
            <span className="transform group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg]">
              L
            </span>
            <span>&nbsp;</span>
            <span className="transform group-hover/sentence:translate-y-1/2 group-hover/sentence:rotate-[8deg]">
              M
            </span>
            <span className="transform group-hover/sentence:translate-y-[15%] group-hover/sentence:-rotate-6">
              E
            </span>
            <span className="transform group-hover/sentence:translate-x-1/2 group-hover/sentence:translate-y-[-10%] group-hover/sentence:-rotate-3">
              V
            </span>
            <span className="transform group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg]">
              I
            </span>
            <span className="transform group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg]">
              K
            </span>
          </LetterGroup>
        </SentenceGroup>

        <p className="reveal max-w-[40ch] text-balance opacity-70">
          I build web experiences that pair solid architecture with interfaces
          that feel good to touch.
        </p>

        <a
          href="#me"
          className="reveal mt-[clamp(0.5rem,2vmin,1.25rem)] inline-flex items-center gap-2 border border-current/30 px-5 py-2.5 transition hover:border-current hover:bg-current hover:text-[var(--bg)]"
          style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
        >
          <span className="uppercase">Enter</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Bottom scroll cue */}
      <a
        href="#me"
        aria-label="Scroll to next section"
        className="group absolute inset-x-0 bottom-[4vmin] z-20 mx-auto flex w-fit flex-col items-center gap-1 text-current/70 hover:text-current"
      >
        <span className="eyebrow" style={{ fontSize: "0.55rem" }}>
          Scroll
        </span>
        <span
          aria-hidden="true"
          className="block animate-scroll-hint"
          style={{ fontSize: "1rem", lineHeight: 1 }}
        >
          ↓
        </span>
      </a>
    </PageWrapper>
  );
}

function Picture({
  large,
  small,
  alt,
  loading = "lazy",
  fetchpriority = "low",
}: {
  large: string;
  small: string;
  alt?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low";
}) {
  return (
    <picture className="aspect-[3/4]">
      <source
        width="360"
        height="480"
        media="(max-width: 768px)"
        srcSet={small}
      />
      <source
        width="800"
        height="1067"
        media="(min-width: 768px)"
        srcSet={large}
      />
      <img
        width="800"
        height="1067"
        loading={loading}
        src={large}
        className="w-full object-cover"
        fetchpriority={fetchpriority}
        alt={alt}
      />
    </picture>
  );
}

function Column({
  children,
  direction,
  className,
}: {
  children: React.ReactNode;
  direction: "up" | "down";
  className?: string;
}) {
  const animate =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  return (
    <div className={`col-span-1 overflow-hidden ${className}`}>
      <div className={`grid ${animate} h-max gap-[2vmin]`}>
        {children}
        {children}
      </div>
    </div>
  );
}

export default Header;
