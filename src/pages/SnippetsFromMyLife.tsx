import PageWrapper from "../components/PageWrapper";
import Slideshow from "../components/Slideshow";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import TitleWrapper from "../components/TitleWrapper";

function SnippetsFromMyLife() {
  return (
    <PageWrapper
      id="album"
      index="02"
      bare
      className="flex flex-col gap-[clamp(2rem,5vmin,4rem)] overflow-hidden pt-[clamp(5rem,12vmin,10rem)] pb-[clamp(3rem,6vmin,5rem)]"
    >
      <div className="edge-x flex flex-wrap items-end justify-between gap-6">
        <TitleWrapper eyebrow="The Album">
          <SentenceGroup className="inline-flex w-fit flex-wrap">
            <LetterGroup>
              <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
                F
              </span>
              <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
                r
              </span>
              <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
                a
              </span>
              <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
                m
              </span>
              <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">
                e
              </span>
              <span>&nbsp;</span>
            </LetterGroup>
            <LetterGroup>
              <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">
                B
              </span>
              <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
                y
              </span>
              <span>&nbsp;</span>
            </LetterGroup>
            <LetterGroup>
              <span className="group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">
                F
              </span>
              <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">
                r
              </span>
              <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg]">
                a
              </span>
              <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">
                m
              </span>
              <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">
                e
              </span>
            </LetterGroup>
          </SentenceGroup>
        </TitleWrapper>

        <p
          className="reveal max-w-xs opacity-65"
          style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
        >
          Snippets from places I’ve been and moments I wanted to keep,
          drag to wander.
        </p>
      </div>

      <div className="relative flex-1">
        <Slideshow />
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
          <span
            className="eyebrow border border-current/20 bg-[var(--bg)]/70 px-3 py-1.5 backdrop-blur-sm"
            style={{ fontSize: "0.55rem" }}
          >
            ← Drag to explore →
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}

export default SnippetsFromMyLife;
