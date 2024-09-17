import PageWrapper from "../components/PageWrapper";
import TitleWrapper from "../components/TitleWrapper";
import Experience from "../components/ui/Experience";
import Grid from "../components/ui/Grid";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";

function WorkExperience() {
  return <PageWrapper id="work" className="flex flex-col gap-[4vmin]">
    <TitleWrapper>
      <SentenceGroup className="inline-flex w-fit flex-wrap">
        <LetterGroup>
          <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">W</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">o</span>
          <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">r</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">k</span>
          <span>&nbsp;</span>
        </LetterGroup>
        <LetterGroup>
          <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">E</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">x</span>
          <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">p</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">e</span>
          <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">r</span>
          <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">i</span>
          <span className="group-hover/sentence:translate-y-[-15%] group-hover/sentence:rotate-[-5deg]">e</span>
          <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">n</span>
          <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">c</span>
          <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">e</span>
        </LetterGroup>
      </SentenceGroup>
    </TitleWrapper>

    <Grid>
      <Grid.Item>
        {
          // <img className="object-cover w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F83%2F26%2FTVC4pE.jpeg&f=1&nofb=1&ipt=3e708cd41f0adcc5ffe106178b729da1f7618611c72196f3703626f9d48b4cb5&ipo=images" alt="Care" />
        }
        <img width={411} height={231} className="w-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F83%2F26%2FTVC4pE.jpeg&f=1&nofb=1&ipt=3e708cd41f0adcc5ffe106178b729da1f7618611c72196f3703626f9d48b4cb5&ipo=images" alt="Care" />
        <Experience title="Care Assistant" date="June 2019 - August 2019 (3 months)" place="Region Kalmar Län"  ><p>I worked as a care assistant in a group home. There, I had the opportunity
          to learn the importance of working in a team and being sensitive to the needs of
          others, and handling challenging situations professionally.</p></Experience>
      </Grid.Item>
      <Grid.Item>
        {
          // <img className="object-cover w-full" src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/74354974_2596311353768219_1372751520092651520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=0sdsJ27JzEUQ7kNvgG_FeWN&_nc_ht=scontent-cph2-1.xx&oh=00_AYDoCfh-CnEoJj0B_jvcpx9_GaCUyc2c2G3j6IY1hI25HQ&oe=66EFB8DF" alt="Me and Leopold Wigbratt" />
        }
        <img width={412} height={215} className="w-full object-cover" src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/74354974_2596311353768219_1372751520092651520_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=0sdsJ27JzEUQ7kNvgG_FeWN&_nc_ht=scontent-cph2-1.xx&oh=00_AYDoCfh-CnEoJj0B_jvcpx9_GaCUyc2c2G3j6IY1hI25HQ&oe=66EFB8DF" alt="Me and Leopold Wigbratt" />
        <Experience title="IT Support Technician" date="August 2019 - December 2019 (5 months)" place="Region Kalmar Län"><p>As part of Tekniksprånget, I worked with the IT support and distribution
          department for Region Kalmar County. It was an excellent opportunity to
          develop my technical skills. During this period, I had the chance to work with
          various technical problems, help users with their questions and contribute to
          effective support</p></Experience>
      </Grid.Item>
    </Grid>
  </PageWrapper>;
}



export default WorkExperience;