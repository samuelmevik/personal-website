import PageWrapper from "../components/PageWrapper";
import ScatterText from "../components/ScatterText";
import profile from "../assets/profile_medium.webp";

function AboutMe() {
  return (
    <PageWrapper id="me">
      <ScatterText text="Hello, I’m Samuel." className="title" />

      <div className="mt-[clamp(2.5rem,6vw,5rem)] grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div
            style={{ borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }}
            className="aspect-square w-full max-w-[32rem] overflow-hidden"
          >
            <img
              width={768}
              height={768}
              src={profile}
              alt="Samuel smiling outdoors, with a lake and pine forest behind"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="flex max-w-[60ch] flex-col gap-6 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <p className="lead">
            Passionate about many things, but particularly about coding. When
            I’m not knee-deep in a project, you’ll usually find me rolling dice
            with friends in an intense D&amp;D session, hitting the gym, or
            daydreaming about my next trip.
          </p>
          <p>
            D&amp;D has been a creative outlet for years. The role-playing and
            problem-solving pair perfectly with my love for coding: both reward
            patience, creativity, and a little bit of magic.
          </p>
          <p>
            When travelling, I live for those magical moments of stepping into a
            new country, immersing myself in different cultures, and embracing
            every fresh experience that comes my way. I capture as much of it as
            I can with my camera.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutMe;
