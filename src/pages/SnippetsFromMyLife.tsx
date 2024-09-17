import PageWrapper from "../components/PageWrapper";
import Slideshow from "../components/Slideshow";
import LetterGroup from "../components/ui/text/LetterGroup";
import SentenceGroup from "../components/ui/text/SentenceGroup";
import TitleWrapper from "../components/TitleWrapper";

function SnippetsFromMyLife() {
  return (
    <PageWrapper id="album" className="flex flex-col overflow-hidden">
      <TitleWrapper>
        <h2>Explore My Moments</h2>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">F</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">r</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">a</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">m</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">e</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">B</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">y</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg] group-hover/sentence:translate-x-[-80%]">F</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">r</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg]">a</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">m</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">e</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>
      <div className="relative flex-1">
        <Slideshow />
      </div>
    </PageWrapper >
  )
}

export default SnippetsFromMyLife