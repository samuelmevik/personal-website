import PageWrapper from "../components/PageWrapper";
import Slideshow from "../components/Slideshow";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import TitleWrapper from "../components/TitleWrapper";

function SnippetsFromMyLife() {
  return (
    <PageWrapper id="album" className="overflow-hidden flex flex-col">
      <TitleWrapper>
        <h2>Explore My Moments</h2>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">F</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">r</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">a</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">m</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">e</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">B</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">y</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">F</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">r</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg] transform">a</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg] transform">m</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">e</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>
      <div className="flex-1 relative">
        <Slideshow />
      </div>
    </PageWrapper >
  )
}

export default SnippetsFromMyLife