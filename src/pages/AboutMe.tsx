import PageWrapper from "../components/PageWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import profile from "../assets/profile_medium.webp"
import Experience from "../components/ui/Experience";
import TitleWrapper from "../components/TitleWrapper";
import Grid from "../components/ui/Grid";



function AboutMe() {
  return (
    <PageWrapper id="me" className="grid">
      <TitleWrapper>
        <h2>Learn</h2>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">A</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">b</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">o</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">u</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">t</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">M</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">e</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>
      <Grid>
        <Grid.Item className="!aspect-square p-[2vmin] md:!w-[max(45vmin,30rem)] md:!translate-x-[min(33%,10vw)]">
          <div style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }} className="mx-auto aspect-square h-full animate-blob overflow-hidden bg-transparent">
            <img width={568} height={568} src={profile} alt="Me in nature" className="size-full -scale-x-100 object-cover" />
          </div>
        </Grid.Item>
        <Grid.Item className="!-translate-y-[10vh] md:!-translate-x-[min(33%,10vw)]">
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

/*
        <Grid.Item className="!aspect-video md:!w-[max(80vmin,30rem)] md:!translate-x-[min(33%,10vw)]">
          <div style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }} className="mx-auto aspect-square h-full animate-blob overflow-hidden bg-transparent">
            <img width={568} height={568} src={profile} alt="Me in nature" className="size-full -scale-x-100 object-cover" />
          </div>
        </Grid.Item>

*/

export default AboutMe