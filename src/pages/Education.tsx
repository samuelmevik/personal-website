import PageWrapper from "../components/PageWrapper"
import TitleWrapper from "../components/TitleWrapper"
import Experience from "../components/ui/Experience"
import Grid from "../components/ui/Grid"
import LetterGroup from "../components/ui/text/LetterGroup"
import SentenceGroup from "../components/ui/text/SentenceGroup"


function Education() {
  return (
    <PageWrapper id="education" className="flex flex-col">
      <TitleWrapper>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">M</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">y</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">E</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">d</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">u</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg] transform">c</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg] transform">a</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg] transform">t</span>
            <span className="group-hover/sentence:translate-y-[40%] group-hover/sentence:rotate-[-5deg] transform">i</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg] transform">o</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg] transform">n</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <Grid className="flex-1">
        <Grid.Center>
          <Grid.Item className="sm:max-w-[80vmin]">
            <img className="object-cover w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timeshighereducation.com%2Fsites%2Fdefault%2Ffiles%2Finstitution%2Fheader_image%2Flnu-header-image-1950x700.jpg&f=1&nofb=1&ipt=3826ebcc7505c0532ce5fc8d33589c12f6b5e7901a072923a0286d397093d213&ipo=images" alt="Linneaus University" />
            <Experience title="Bachelor of Web Development" date="August 2021 - June 2024" place="Linnaeus university">
              <p>My education has provided me with a solid computer science foundation, focusing
                on web programming.
                During my studies, I honed my skills in programming, developing, and deploying
                robust web applications with high code quality across various platforms.</p>
            </Experience>
          </Grid.Item>
        </Grid.Center>
      </Grid>
    </PageWrapper>
  )
}

export default Education