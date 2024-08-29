import PageWrapper from "./PageWrapper"
import Experience from "./ui/Experience"
import Grid from "./ui/Grid"
import PageTitle from "./ui/PageTitle"
import LetterGroup from "./ui/text/LetterGroup"
import SentenceGroup from "./ui/text/SentenceGroup"
import TiltBox from "./ui/TiltBox"

function Education() {
  return (
    <PageWrapper id="education" className="flex flex-col">
      <PageTitle preTitle="Learn About">
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">M</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">y</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">E</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">d</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">u</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">c</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">a</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg] transform">t</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg] transform">i</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg] transform">o</span>
            <span className="group-hover/sentence:translate-y-[40%] group-hover/sentence:rotate-[-5deg] transform">n</span>
          </LetterGroup>
        </SentenceGroup>
      </PageTitle>

      <Grid className="flex-1 sm:pt-0">
        <Grid.Item className="sm:w-[80vmin] sm:h-fit">
          <TiltBox hoverGrow>
            <img className="aspect-video object-cover ring-2 dark:ring-white ring-black" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timeshighereducation.com%2Fsites%2Fdefault%2Ffiles%2Finstitution%2Fheader_image%2Flnu-header-image-1950x700.jpg&f=1&nofb=1&ipt=3826ebcc7505c0532ce5fc8d33589c12f6b5e7901a072923a0286d397093d213&ipo=images" alt="Linneaus University" />
            <Experience title="Bachelor of Web Development" date="August 2021 - June 2024" place="Linnaeus university">
              <p>My education has provided me with a solid computer science foundation, focusing
                on web programming.
                During my studies, I honed my skills in programming, developing, and deploying
                robust web applications with high code quality across various platforms.</p>
            </Experience>
          </TiltBox>
        </Grid.Item>
      </Grid>
    </PageWrapper>
  )
}

export default Education