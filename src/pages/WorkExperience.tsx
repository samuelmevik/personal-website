import PageWrapper from "../components/PageWrapper";
import TitleWrapper from "../components/TitleWrapper";
import Experience from "../components/ui/Experience";
import Grid from "../components/ui/Grid";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";

function WorkExperience() {
  return <PageWrapper id="work" className="flex flex-col">
    <TitleWrapper>
      <SentenceGroup className="inline-flex w-fit flex-wrap">
        <LetterGroup>
          <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">W</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">o</span>
          <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">r</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">k</span>
          <span>&nbsp;</span>
        </LetterGroup>
        <LetterGroup>
          <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">E</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">x</span>
          <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">p</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">e</span>
          <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">r</span>
          <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg] transform">i</span>
          <span className="group-hover/sentence:translate-y-[-15%] group-hover/sentence:rotate-[-5deg] transform">e</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">n</span>
          <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">c</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">e</span>
        </LetterGroup>
      </SentenceGroup>
    </TitleWrapper>

    <Grid className="flex-1 sm:grid-cols-2 pt-[4vmin]">
      <Grid.Center>
        <Grid.Item positionX="left" positionY="up">
          <img className="object-cover w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F83%2F26%2FTVC4pE.jpeg&f=1&nofb=1&ipt=3e708cd41f0adcc5ffe106178b729da1f7618611c72196f3703626f9d48b4cb5&ipo=images" alt="Care" />
          <Experience title="Care Assistant" date="June 2019 - August 2019 (3 months)" place="Region Kalmar Län"  ><p>I worked as a care assistant in a group home. There, I had the opportunity
            to learn the importance of working in a team and being sensitive to the needs of
            others, and handling challenging situations professionally.</p></Experience>
        </Grid.Item>
      </Grid.Center>
      <Grid.Center>
        <Grid.Item positionX="right" positionY="down">
          <img className="object-cover w-full" src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/74354974_2596311353768219_1372751520092651520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=0sdsJ27JzEUQ7kNvgG_FeWN&_nc_ht=scontent-cph2-1.xx&oh=00_AYDoCfh-CnEoJj0B_jvcpx9_GaCUyc2c2G3j6IY1hI25HQ&oe=66EFB8DF" alt="Me and Leopold Wigbratt" />
          <Experience title="IT Support Technician" date="August 2019 - December 2019 (5 months)" place="Region Kalmar Län"><p>As part of Tekniksprånget, I worked with the IT support and distribution
            department for Region Kalmar County. It was an excellent opportunity to
            develop my technical skills. During this period, I had the chance to work with
            various technical problems, help users with their questions and contribute to
            effective support</p></Experience>
        </Grid.Item>
      </Grid.Center>
    </Grid>
  </PageWrapper>;
}



export default WorkExperience;