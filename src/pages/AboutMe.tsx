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
        <Grid.Item className="md:!translate-x-[calc(33%+2vw)] !aspect-video">
          <div style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }} className="overflow-hidden aspect-square mx-auto h-full animate-blob bg-transparent">
            <img width={568} height={568} src={profile} alt="Me in nature" className="scale-x-[-1] object-cover size-full" />
          </div>
        </Grid.Item>
        <Grid.Item className="md:!translate-x-[-10vw] md:!-translate-y-[8vh]">
          <Experience title="Hello!">
            <p>My name is Samuel Mevik, and I am passionate about many things, especially coding. When I'm not knee-deep in a project, you can usually find me rolling dice with friends during an intense Dungeons & Dragons session, hitting the gym to work up a good sweat, or daydreaming about travelling.</p>
            <p>DnD has been a creative outlet for me. The role-playing and problem-solving aspects of DnD pair perfectly with my love for coding—both require patience, creativity, and a little bit of magic, right?</p>
            <p>As for the gym, it's my way to reset. There is something satisfying about struggling against gravity!</p>
            <p>When it comes to traveling, I live for the moments of stepping into a new country, discovering new cultures, and soaking in new experiences.</p>
            <p>Of course, I’ll share more about my coding practices and projects later, but let’s just say it’s a constantly evolving passion.</p>
          </Experience>
        </Grid.Item>
      </Grid>
    </PageWrapper >
  )
}

export default AboutMe