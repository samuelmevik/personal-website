import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import personalWebsite from "../assets/personal-website.webp";
import patternMatcher from "../assets/pattern-matcher.webp";
import rental from "../assets/rental-car-small.png";
import universe from "../assets/universe.png";
import PageWrapper from "../components/PageWrapper";
import { SiTypescript, SiVite } from "react-icons/si";
import { FaGithub, FaJava, FaReact, FaUpRightFromSquare } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import TitleWrapper from "../components/TitleWrapper";

interface TechTagProps {
  icon: React.ReactNode;
  label: string;
}

function TechTag({ icon, label }: Readonly<TechTagProps>) {
  return (
    <span
      className="inline-flex items-center gap-1.5 border border-current/20 px-2 py-1 uppercase tracking-[0.18em] opacity-70 transition-opacity hover:opacity-100"
      style={{ fontSize: "0.55rem" }}
    >
      <span className="text-[0.85rem] leading-none">{icon}</span>
      {label}
    </span>
  );
}

interface ProjectCardProps {
  title: string;
  image?: string;
  imageAlt?: string;
  githubLink?: string;
  tags?: TechTagProps[];
  placeholder?: boolean;
  children: React.ReactNode;
}

function ProjectCard({
  title,
  image,
  imageAlt,
  githubLink,
  tags,
  placeholder = false,
  children,
}: Readonly<ProjectCardProps>) {
  return (
    <article
      className={`reveal group flex h-full flex-col border transition-all duration-500 ease-out ${
        placeholder
        ? "border-dashed border-current/20 opacity-40"
        : "border-current/[0.12] hover:border-current/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
      }`}
    >
      <div className="relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
            <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%)] bg-[length:18px_18px] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)]" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="leading-tight">{title}</h3>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="flex shrink-0 items-center gap-1.5 border border-current/25 px-2 py-1.5 transition-colors hover:border-current hover:bg-[var(--fg)] hover:text-[var(--bg)]"
              style={{ fontSize: "0.6rem" }}
            >
              <FaGithub className="text-[0.85rem]" aria-hidden="true" />
              <FaUpRightFromSquare className="text-[0.65rem]" aria-hidden="true" />
            </a>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <TechTag key={tag.label} {...tag} />
            ))}
          </div>
        )}
        <div className="opacity-75">{children}</div>
      </div>
    </article>
  );
}

const webStack: TechTagProps[] = [
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <RiTailwindCssFill />, label: "Tailwind" },
  { icon: <SiVite />, label: "Vite" },
];

function FeatureProject() {
  return (
    <article className="reveal group grid gap-0 border border-current/[0.12] transition-all duration-500 ease-out hover:border-current/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="relative overflow-hidden">
        <img
          src={personalWebsite}
          alt="This website"
          loading="lazy"
          className="block aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] md:aspect-auto md:h-full"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4">
          <span className="eyebrow">Featured · 2026</span>
          <h3
            className="leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            This Website
          </h3>
          <p className="opacity-75">
            The site you’re looking at right now, built with Vite, React, Tailwind
            and TypeScript.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {webStack.map((tag) => (
              <TechTag key={tag.label} {...tag} />
            ))}
          </div>
        </div>
        <a
          href="https://github.com/samuelmevik/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border border-current/30 px-5 py-2.5 transition-colors hover:border-current hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          style={{ fontSize: "0.7rem", letterSpacing: "0.22em" }}
        >
          <FaGithub aria-hidden="true" />
          <span className="uppercase">View Source</span>
          <FaUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <PageWrapper
      id="projects"
      index="04"
      className="flex flex-col gap-[clamp(2rem,6vmin,5rem)]"
    >
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <TitleWrapper eyebrow="Selected Work">
          <SentenceGroup className="inline-flex w-fit flex-wrap">
            <LetterGroup>
              <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
                P
              </span>
              <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
                r
              </span>
              <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
                o
              </span>
              <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
                j
              </span>
              <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
                e
              </span>
              <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg]">
                c
              </span>
              <span className="group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-5deg]">
                t
              </span>
              <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg]">
                s
              </span>
            </LetterGroup>
          </SentenceGroup>
        </TitleWrapper>

        <p
          className="reveal max-w-md opacity-65"
          style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
        >
          I enjoy working across the stack, Docker on one end, Java, React and
          Tailwind on the other. What drives me is combining solid architecture
          with interfaces that feel great to use.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-[clamp(1.25rem,3vmin,2.5rem)]">
        <FeatureProject />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ProjectCard
            title="Pattern Matcher"
            image={patternMatcher}
            imageAlt="Pattern Matcher"
            githubLink="https://github.com/samuelmevik/pattern-matcher-es"
            tags={[{ icon: <SiTypescript />, label: "TypeScript" }]}
          >
            <p>
              A TypeScript library providing declarative pattern matching, a
              more expressive alternative to switch/if chains that matches on
              the shape of data.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Rental Car"
            image={rental}
            imageAlt="Rental Car"
            githubLink="https://github.com/samuelmevik/car-rental"
            tags={webStack}
          >
            <p>
              Frontend web application for browsing and booking rental cars,
              built with a responsive, modern interface.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Universe"
            image={universe}
            imageAlt="Universe"
            githubLink="https://github.com/samuelmevik/universe"
            tags={[{ icon: <FaJava />, label: "Java" }]}
          >
            <p>
              A Java terminal application following MVC. Users can register and
              manipulate celestial bodies, planets, stars, and moons.
            </p>
          </ProjectCard>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Projects;
