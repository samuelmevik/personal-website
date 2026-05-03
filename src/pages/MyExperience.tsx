import PageWrapper from "../components/PageWrapper";
import TitleWrapper from "../components/TitleWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import teknikSpranget from "../assets/teknikspranget.jpg";
import lnuLarge from "../assets/lnu-L.jpg";

interface TimelineItemProps {
  title: string;
  date: string;
  place: string;
  year: string;
  tag?: string;
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
  tag,
  image,
  imageAlt,
  side,
  current = false,
  children,
}: TimelineItemProps) {
  const isLeft = side === "left";

  const card = (
    <article className="reveal group flex w-full flex-col border border-current/[0.12] bg-[var(--bg)] transition-all duration-500 ease-out hover:border-current/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      {image ? (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div className="aspect-[16/5] w-full border-b border-current/10 bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%)] bg-[length:18px_18px] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)]" />
      )}
      <div className="flex flex-col gap-3 p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {tag && (
              <span
                className="border border-current/25 px-2 py-0.5 uppercase tracking-[0.18em]"
                style={{ fontSize: "0.55rem" }}
              >
                {tag}
              </span>
            )}
            <span className="eyebrow" style={{ fontSize: "0.55rem" }}>
              {date}
            </span>
          </div>
          {current && (
            <span
              className="flex shrink-0 items-center gap-1.5 border border-current/40 px-2 py-0.5 uppercase tracking-[0.18em]"
              style={{ fontSize: "0.55rem" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
              </span>
              Present
            </span>
          )}
        </div>
        <h3 className="leading-tight">{title}</h3>
        <p
          className="font-semibold opacity-80"
          style={{ fontSize: "clamp(0.85rem, 1.15vw, 1rem)" }}
        >
          {place}
        </p>
        <div className="opacity-70">{children}</div>
      </div>
    </article>
  );

  return (
    <div className="grid grid-cols-[3rem_1fr] gap-x-4 md:grid-cols-[1fr_4rem_1fr] md:gap-x-0">
      {/* Left slot, desktop only, left-side cards */}
      <div className="hidden items-start justify-end pb-16 pr-8 md:flex">
        {isLeft && <div className="w-full max-w-[24rem]">{card}</div>}
      </div>

      {/* Center spine */}
      <div className="flex flex-col items-center pb-16">
        {current ? (
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <div className="absolute h-8 w-8 animate-ping rounded-full bg-current/15" />
            <div className="relative z-10 h-3.5 w-3.5 rounded-full bg-current" />
          </div>
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <div className="h-3 w-3 rounded-full border-[1.5px] border-current bg-[var(--bg)]" />
          </div>
        )}
        <span
          className="mt-1 mb-2 uppercase opacity-50"
          style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
        >
          {year}
        </span>
        <div className="w-px flex-1 bg-current/15" />
      </div>

      {/* Right slot, always on mobile; desktop only when side="right" */}
      <div className="flex items-start pb-16 md:pl-8">
        <div className="w-full md:hidden">{card}</div>
        {!isLeft && (
          <div className="hidden w-full max-w-[24rem] md:flex">{card}</div>
        )}
      </div>
    </div>
  );
}

function TimelineBreak({ label }: { label: string }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_4rem_1fr]">
      <div className="hidden md:block" />
      <div className="flex flex-col items-center py-1">
        <div className="h-6 w-px bg-current/15" />
        <span
          className="whitespace-nowrap py-3 text-center uppercase opacity-35"
          style={{ fontSize: "0.5rem", letterSpacing: "0.28em" }}
        >
          {label}
        </span>
        <div className="h-6 w-px bg-current/15" />
      </div>
      <div />
    </div>
  );
}

function MyExperience() {
  return (
    <PageWrapper
      id="experience"
      index="03"
      className="flex flex-col gap-[clamp(2rem,6vmin,5rem)]"
    >
      <TitleWrapper eyebrow="The Path So Far">
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg]">
              M
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              y
            </span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg]">
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

      <div className="relative z-10">
        <TimelineItem
          side="right"
          year="2019"
          tag="Work"
          title="Care Assistant"
          date="Jun – Aug 2019 · 3 mo"
          place="Kalmar County"
        >
          <p>
            Worked in a group home, developed strong teamwork skills,
            sensitivity to others' needs, and the ability to handle challenging
            situations professionally.
          </p>
        </TimelineItem>

        <TimelineItem
          side="left"
          year="2019"
          tag="Work"
          title="IT Support Technician"
          date="Aug – Dec 2019 · 5 mo"
          place="Region Kalmar Län"
          image={teknikSpranget}
          imageAlt="At Tekniksprånget"
        >
          <p>
            Part of Tekniksprånget, worked with the IT support and
            distribution department, resolving technical issues and assisting
            users across Region Kalmar County.
          </p>
        </TimelineItem>

        <TimelineBreak label="2020 – 2021" />

        <TimelineItem
          side="right"
          year="2021"
          tag="Education"
          title="Web Development"
          date="Aug 2021 – Jun 2024 · 3 yr"
          place="Linnaeus University"
          image={lnuLarge}
          imageAlt="Linnaeus University"
        >
          <p>
            Solid computer-science foundation with a focus on web programming,
            honed skills in developing and deploying robust web applications
            with high code quality across various platforms.
          </p>
        </TimelineItem>

        <TimelineItem
          side="left"
          year="2024"
          tag="Work"
          title="Software Developer"
          date="Nov 2024 – Oct 2025 · 1 yr"
          place="Tietoevry"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quam.
          </p>
        </TimelineItem>

        <TimelineItem
          side="right"
          year="2025"
          tag="Work"
          title="Software Developer"
          date="Oct 2025 – Present"
          place="Vivicta"
          current
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem.
          </p>
        </TimelineItem>
      </div>
    </PageWrapper>
  );
}

export default MyExperience;
