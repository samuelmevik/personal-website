import PageWrapper from "../components/PageWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import profile from "../assets/profile_medium.webp"
import Experience from "../components/ui/Experience";
import TitleWrapper from "../components/TitleWrapper";
import Grid from "../components/ui/Grid";



function AboutMe() {
  return (
    <PageWrapper id="me" className="flex flex-col gap-[4vmin]">
      <TitleWrapper>
        <h2>Learn</h2>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">A</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">b</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">o</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">u</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">t</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">M</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">e</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <Grid>
        <Grid.Item className="md:!translate-x-[calc(33%+2vw)] !aspect-[56/40]">
          <div style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }} className="overflow-hidden aspect-square mx-auto h-full animate-blob bg-transparent">
            <img width={568} height={568} src={profile} alt="Me in nature" className="scale-x-[-1] object-cover" />
          </div>
        </Grid.Item>
        <Grid.Item className="md:!translate-x-0">
          <Experience title="Hello!">
            <p>I'm a software developer based in Kalmar. I have a strong passion for backend development and am deeply fascinated by containerization and orchestration technologies like Docker and Kubernetes.</p>
            <p>I thrive on exploring these tools to push the boundaries of what's possible. Additionally, I enjoy working on the frontend and have been actively honing my skills in React to create dynamic and engaging user experiences.</p></Experience>
        </Grid.Item>
      </Grid>
    </PageWrapper >
  )
}

export default AboutMe