// import page from "../assets/page.png"

import Experience from "../components/ui/Experience";
import GithubLink from "../components/ui/GithubLink";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import personalWebsite from "../assets/personal-website.webp"
import patternMatcher from "../assets/pattern-matcher.webp"
import PageWrapper from "../components/PageWrapper";
import { SiTypescript, SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import Grid from "../components/ui/Grid";
import TitleWrapper from "../components/TitleWrapper";


function Projects() {
  return (
    <PageWrapper id="projects" className="flex flex-col">
      <TitleWrapper>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">P</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">r</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">o</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">j</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">e</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg] transform">c</span>
            <span className="group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-5deg] transform">t</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg] transform">s</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <Grid className="flex-1 min-h-[90svh] sm:grid-cols-2">
        <Grid.Center>
          <Grid.Item positionX="left" positionY="up" className="relative">
            <img className="object-cover w-full ring-2 dark:ring-white ring-black" src={patternMatcher} alt="Pattern Matcher" />
            <GithubLink link="https://github.com/samuelmevik/pattern-matcher-es" direction="top-right" className="p-1 text-black bg-white absolute top-0 right-0 rounded-es-lg" />
            <Experience title="Pattern Matcher"  ><p>There are limited ways in Javascript to match expressions with the exception of strings. The switch is severely limiting. To avoid accidental fallthrough an explicit break is required in each case and the only comparison that it can do is ===. This library aim is to solve these problems by providing a declarative version of the if and switch conditionals. Where the shape of the shape of the data is described by "patterns".</p></Experience>
          </Grid.Item>
        </Grid.Center>
        <Grid.Center>
          <Grid.Item positionX="right" positionY="down" className="relative">
            <img className="object-cover w-full ring-2 dark:ring-white ring-black" src={personalWebsite} alt="This Website" />
            <GithubLink link="https://github.com/" direction="top-left" className="p-1 text-black bg-white absolute top-0 right-0 rounded-es-lg" />
            <Wrapper>
              <SlideItem props={{ style: { animationDelay: "calc(30s / 4 * (4 - 1) * -1)" } }}>
                <SiTypescript className="size-8" />
              </SlideItem>
              <SlideItem props={{ style: { animationDelay: "calc(30s / 4 * (4 - 2) * -1)" } }}>
                <FaReact className="size-8" />
              </SlideItem>
              <SlideItem props={{ style: { animationDelay: "calc(30s / 4 * (4 - 3) * -1)" } }}>
                <RiTailwindCssFill className="size-8" />
              </SlideItem>
              <SlideItem props={{ style: { animationDelay: "calc(30s / 4 * (4 - 4) * -1)" } }}>
                <SiVite className="size-8" />
              </SlideItem>
            </Wrapper>
            <Experience title="Personal Website"  ><p>My personal website, to showcase a bit about myself!</p></Experience>
          </Grid.Item>
        </Grid.Center>
      </Grid>
      <Grid className="min-h-[45svh]">
        <Grid.Center>
          <Grid.Item>
            <div className="aspect-video ring-2 dark:ring-white ring-black" />
            <Experience title="Coming Soon..."  ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel saepe dignissimos dicta perferendis mollitia numquam neque nihil, corrupti quas.</p></Experience>
          </Grid.Item>
        </Grid.Center>
      </Grid>
    </PageWrapper>
  );
}




function SlideItem({ children, className, props }: { children?: React.ReactNode, className?: string, props: React.HTMLProps<HTMLDivElement> }) {
  return <div className={twMerge("absolute size-8 rounded-md left-[max(calc(32px_*_4),_100%)] animate-scroll-left", className)} {...props}>{children}</div>
}


function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      maskImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
      )
`}} className="relative w-full h-10 overflow-hidden pt-1">
      {children}
    </div>
  )
}


export default Projects;