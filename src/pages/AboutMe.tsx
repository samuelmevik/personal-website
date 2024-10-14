import PageWrapper from "../components/PageWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import profile from "../assets/profile_medium.webp";
import Experience from "../components/ui/Experience";
import TitleWrapper from "../components/TitleWrapper";

function AboutMe() {
  return (
    <PageWrapper id="me">
      <TitleWrapper>
        <h2>Learn</h2>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              A
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              b
            </span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              o
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              u
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              t
            </span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              M
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              e
            </span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>
      <div className="grid px-[4vmin] md:grid-cols-2 lg:gap-[4vmin]">
        <div className="grid place-items-center">
          <div
            style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }}
            className="aspect-square max-h-[45vmin] animate-blob overflow-hidden bg-transparent"
          >
            <img
              width={568}
              height={568}
              src={profile}
              alt="Me in nature"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-3/4">
          <Experience title="Hello!">
            <p>
              My name is Samuel Mevik, and I am passionate about many things,
              but I particularly like coding. When I'm not knee-deep in a
              project, you can usually find me rolling dice with friends during
              an intense Dungeons & Dragons (DnD) session, hitting the gym to
              work up a good sweat, or daydreaming about travelling.
            </p>
            <p>
              DnD has been a creative outlet for me. The role-playing and
              problem-solving aspects of DnD pair perfectly with my love for
              coding—both require patience, creativity, and a little bit of
              magic, right?
            </p>
            <p>
              When travelling, I live for those magical moments of stepping into
              a new country, immersing myself in different cultures, and
              embracing every fresh experience that comes my way. And in case
              you haven’t noticed, I’m also fiery about capturing it all through
              photography!
            </p>
            <p>
              I’ll share more about my coding practices and projects later, but
              let’s just say it’s a constantly evolving passion.
            </p>
          </Experience>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutMe;
