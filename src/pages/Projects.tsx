import PageWrapper from "../components/PageWrapper";
import ScatterText from "../components/ScatterText";
import personalWebsite from "../assets/personal-website.webp";
import rental from "../assets/rental-car-small.png";
import universe from "../assets/universe.png";

function Screenshot({
  src,
  alt,
  width,
  height,
  position = "center",
}: Readonly<{
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
}>) {
  return (
    <div className="aspect-[16/10] overflow-hidden border border-rule">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        style={{ objectPosition: position }}
        className="size-full object-cover"
      />
    </div>
  );
}

// The pattern-matcher example, set as text rather than a picture of text.
function PatternMatcherSample() {
  return (
    <div className="grid aspect-[16/10] place-items-center overflow-x-auto bg-ink px-6 text-paper">
      <pre className="text-[clamp(0.8rem,0.7rem+0.5vw,1rem)] leading-relaxed">
        <code>
          <b>return</b> patternMatch(res)({"\n"}
          {"  "}when({"\n"}
          {"    "}{"{ statusCode: inRange(200, 299) }"},{"\n"}
          {"    "}() =&gt; res.body{"\n"}
          {"  "}),{"\n"}
          {"  "}otherWise(() =&gt; {"{}"}){"\n"}
          )
        </code>
      </pre>
    </div>
  );
}

function Project({
  title,
  artifact,
  stack,
  repository,
  children,
}: Readonly<{
  title: string;
  artifact: React.ReactNode;
  stack: string[];
  repository: string;
  children: React.ReactNode;
}>) {
  return (
    <article className="flex flex-col">
      {artifact}
      <h3 className="entry-title mt-6">{title}</h3>
      <div className="mt-3 max-w-[52ch]">{children}</div>
      <p className="caption mt-3">{stack.join(", ")}</p>
      <a
        href={repository}
        target="_blank"
        rel="noopener noreferrer"
        className="link mt-4 w-fit"
      >
        View the code on GitHub
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  );
}

const webStack = ["TypeScript", "React", "Tailwind", "Vite"];

function Projects() {
  return (
    <PageWrapper id="projects">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <ScatterText text="Projects" className="title lg:col-span-6" />
        <p className="max-w-[52ch] lg:col-span-5 lg:col-start-8">
          I enjoy working across the stack: Docker on one end, Java, React and
          Tailwind on the other. What drives me is combining solid architecture
          with interfaces that feel great to use.
        </p>
      </div>

      <div className="mt-[clamp(2.5rem,6vw,5rem)] grid gap-x-[4vw] gap-y-20 md:grid-cols-2">
        <Project
          title="This website"
          stack={webStack}
          repository="https://github.com/samuelmevik/personal-website"
          artifact={
            <Screenshot
              src={personalWebsite}
              alt="The 2024 version of this site: white capitals reading Samuel Mevik, Developer & Codecrafter, on black"
              width={1920}
              height={1080}
            />
          }
        >
          <p>
            The site you’re looking at, built with Vite, React, Tailwind and
            TypeScript. The screenshot shows how it looked in 2024.
          </p>
        </Project>

        <Project
          title="Rental Car"
          stack={webStack}
          repository="https://github.com/samuelmevik/car-rental"
          artifact={
            <Screenshot
              src={rental}
              alt="The rental car site, with a blue SUV next to a booking prompt"
              width={853}
              height={480}
            />
          }
        >
          <p>
            A frontend for browsing and booking rental cars, with a responsive,
            modern interface.
          </p>
        </Project>

        <Project
          title="Universe"
          stack={["Java"]}
          repository="https://github.com/samuelmevik/universe"
          artifact={
            <Screenshot
              src={universe}
              alt="UML class diagram of the Universe application"
              width={940}
              height={768}
              position="center 20%"
            />
          }
        >
          <p>
            A Java terminal application following MVC. Users can register and
            manipulate celestial bodies: stars, planets and moons.
          </p>
        </Project>

        <Project
          title="Pattern Matcher"
          stack={["TypeScript"]}
          repository="https://github.com/samuelmevik/pattern-matcher-es"
          artifact={<PatternMatcherSample />}
        >
          <p>
            A TypeScript library for declarative pattern matching: a more
            expressive alternative to switch and if chains that matches on the
            shape of data.
          </p>
        </Project>
      </div>
    </PageWrapper>
  );
}

export default Projects;
