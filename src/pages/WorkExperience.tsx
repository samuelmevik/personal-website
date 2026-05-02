import PageWrapper from "../components/PageWrapper";
import TitleWrapper from "../components/TitleWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import teknikSpranget from "../assets/teknikspranget.jpg";

interface TimelineItemProps {
  title: string;
  date: string;
  place: string;
  year: string;
  image?: string;
  imageAlt?: string;
  side: "left" | "right";
  current?: boolean;
  children: React.ReactNode;
}

function TimelineItem({
  title,
  date,
  place,
  year,
  image,
  imageAlt,
  side,
  current = false,
  children,
}: TimelineItemProps) {
  const isLeft = side === "left";

  const card = (
    <article className="w-full border border-current/[0.12] hover:border-current/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] reveal">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full object-cover aspect-[16/9] block"
        />
      )}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="leading-tight">{title}</h3>
          {current && (
            <span className="shrink-0 border border-current/30 px-2 py-0.5 tracking-[0.15em] uppercase opacity-60 mt-1.5" style={{ fontSize: "0.6rem" }}>
              Present
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold" style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.95rem)" }}>
            {place}
          </p>
          <p className="opacity-45" style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.8rem)" }}>
            {date}
          </p>
        </div>
        <div className="opacity-75">{children}</div>
      </div>
    </article>
  );

  return (
    <div className="grid grid-cols-[1fr_3rem_1fr]">
      {/* Left slot — visible on desktop only when side="left" */}
      <div className="hidden md:flex justify-end items-start pr-8 pb-14">
        {isLeft && <div className="w-full max-w-[22rem]">{card}</div>}
      </div>

      {/* Center spine */}
      <div className="flex flex-col items-center pb-14">
        {current ? (
          <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
            <div className="absolute w-8 h-8 rounded-full bg-current/10 animate-ping" />
            <div className="w-3.5 h-3.5 rounded-full bg-current relative z-10" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-10 h-10 shrink-0">
            <div className="w-3 h-3 rounded-full border-[1.5px] border-current" />
          </div>
        )}
        <span className="opacity-35 uppercase mt-0.5 mb-2" style={{ fontSize: "0.5rem", letterSpacing: "0.18em" }}>
          {year}
        </span>
        <div className="w-px flex-1 bg-current/15" />
      </div>

      {/* Right slot — always on mobile; desktop only when side="right" */}
      <div className="flex items-start pl-8 pb-14">
        <div className="md:hidden w-full">{card}</div>
        {!isLeft && <div className="hidden md:flex w-full max-w-[22rem]">{card}</div>}
      </div>
    </div>
  );
}

function TimelineBreak({ label }: { label: string }) {
  return (
    <div className="grid grid-cols-[1fr_3rem_1fr]">
      <div />
      <div className="flex flex-col items-center py-1">
        <div className="h-5 w-px bg-current/10" />
        <span className="opacity-25 uppercase py-3 text-center whitespace-nowrap" style={{ fontSize: "0.45rem", letterSpacing: "0.25em" }}>
          {label}
        </span>
        <div className="h-5 w-px bg-current/10" />
      </div>
      <div />
    </div>
  );
}

function WorkExperience() {
  return (
    <PageWrapper id="work" className="flex flex-col gap-[4vmin]">
      <TitleWrapper>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              W
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              o
            </span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              r
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              k
            </span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              E
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              x
            </span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              p
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              e
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              r
            </span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">
              i
            </span>
            <span className="group-hover/sentence:translate-y-[-15%] group-hover/sentence:rotate-[-5deg]">
              e
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              n
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              c
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              e
            </span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <div>
        <TimelineItem
          side="right"
          year="2019"
          title="Care Assistant"
          date="Jun – Aug 2019 · 3 months"
          place="Kalmar County"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F83%2F26%2FTVC4pE.jpeg&f=1&nofb=1&ipt=3e708cd41f0adcc5ffe106178b729da1f7618611c72196f3703626f9d48b4cb5&ipo=images"
          imageAlt="Care"
        >
          <p>
            Worked in a group home where I developed strong teamwork skills,
            sensitivity to others' needs, and the ability to handle challenging
            situations professionally.
          </p>
        </TimelineItem>

        <TimelineItem
          side="left"
          year="2019"
          title="IT Support Technician"
          date="Aug – Dec 2019 · 5 months"
          place="Region Kalmar Län"
          image={teknikSpranget}
          imageAlt="Me and Leopold Wigbratt"
        >
          <p>
            Part of Tekniksprånget — worked with the IT support and distribution
            department, resolving technical issues and assisting users across
            Region Kalmar County.
          </p>
        </TimelineItem>

        <TimelineBreak label="2020 – 2023" />

        <TimelineItem
          side="right"
          year="2024"
          title="Software Developer"
          date="Nov 2024 – Oct 2025 · 1 year"
          place="Tietoevry"
        >
          <p>
            Placeholder — add your description of the work you did at Tietoevry here.
          </p>
        </TimelineItem>

        <TimelineItem
          side="left"
          year="2025"
          title="Software Developer"
          date="Oct 2025 – Present"
          place="Vivicta"
          current
        >
          <p>
            Placeholder — add your description of the work you do at Vivicta here.
          </p>
        </TimelineItem>
      </div>
    </PageWrapper>
  );
}

export default WorkExperience;
