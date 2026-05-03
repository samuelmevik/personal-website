import PageWrapper from "../components/PageWrapper";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import profile from "../assets/profile_medium.webp";
import TitleWrapper from "../components/TitleWrapper";

const interests = [
  "Coding",
  "Dungeons & Dragons",
  "Travel",
  "Photography",
  "The Gym",
];

function AboutMe() {
  return (
    <PageWrapper id="me" index="01" className="flex flex-col gap-[6vmin]">
      <TitleWrapper eyebrow="About Me">
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              H
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              e
            </span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              l
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              l
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              o
            </span>
            <span className="group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-5deg]">
              ,
            </span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              I
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              ’
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              m
            </span>
            <span>&nbsp;</span>
            <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
              S
            </span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
              a
            </span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
              m
            </span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
              u
            </span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
              e
            </span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg]">
              l
            </span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[6deg]">
              .
            </span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <div className="relative z-10 grid items-center gap-[6vmin] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="reveal grid place-items-center md:justify-self-start">
          <div
            style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30%" }}
            className="aspect-square w-[min(70vmin,32rem)] animate-blob overflow-hidden bg-current/5"
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

        <div className="reveal flex flex-col gap-5 md:gap-6">
          <p className="text-balance" style={{ fontSize: "clamp(1.1rem, 1.7vw, 1.55rem)", lineHeight: 1.5 }}>
            Passionate about many things, but particularly about coding. When
            I’m not knee-deep in a project, you’ll usually find me rolling dice
            with friends in an intense D&D session, hitting the gym, or
            daydreaming about my next trip.
          </p>
          <p className="opacity-75">
            D&D has been a creative outlet for years. The role-playing and
            problem-solving pair perfectly with my love for coding, both reward
            patience, creativity, and a little bit of magic.
          </p>
          <p className="opacity-75">
            When travelling, I live for those magical moments of stepping into
            a new country, immersing myself in different cultures, and embracing
            every fresh experience that comes my way, and capturing it through
            photography along the way.
          </p>

          <ul className="mt-2 flex flex-wrap gap-2">
            {interests.map((label) => (
              <li
                key={label}
                className="border border-current/20 px-3 py-1.5 uppercase tracking-[0.18em] opacity-70"
                style={{ fontSize: "0.6rem" }}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutMe;
