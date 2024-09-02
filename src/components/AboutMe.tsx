import PageWrapper from "./PageWrapper";
import LetterGroup from "./ui/text/LetterGroup";
import SentenceGroup from "./ui/text/SentenceGroup";
import profile from "../assets/profile_(medium).webp"
import PageTitle from "./ui/PageTitle";
import Grid from "./ui/Grid";
import Experience from "./ui/Experience";



function AboutMe() {
  return (
    <PageWrapper id="me" className="flex flex-col">
      <PageTitle preTitle="Get to know More">
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
      </PageTitle>
      <Grid className="flex-1 sm:grid-cols-2">
        <Grid.Center className="sm:order-1">
          <Grid.Item positionX="right" positionY="up" className="relative aspect-square sm:aspect-square">
            <div className="overflow-hidden absolute top-0 animate-blob bg-transparent">
              <img width={568} height={568} src={profile} alt="Me in nature" className="scale-x-[-1] object-cover" />
            </div>
          </Grid.Item>
        </Grid.Center>

        <Grid.Center>
          <Grid.Item positionX="left" positionY="down" className="aspect-square sm:aspect-square">
            <Experience title="Hello!">
              <p>I'm a software developer based in Kalmar. I have a strong passion for backend development and am deeply fascinated by containerization and orchestration technologies like Docker and Kubernetes.</p>
              <p>I thrive on exploring these tools to push the boundaries of what's possible. Additionally, I enjoy working on the frontend and have been actively honing my skills in React to create dynamic and engaging user experiences.</p></Experience>
          </Grid.Item>
        </Grid.Center>
      </Grid>
    </PageWrapper >
  )
}

export default AboutMe