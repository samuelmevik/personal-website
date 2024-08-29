import PageWrapper from "./PageWrapper";
import LetterGroup from "./ui/text/LetterGroup";
import SentenceGroup from "./ui/text/SentenceGroup";

function Header() {
  return (
    <PageWrapper id="home" className='grid place-items-center p-0'>
      <div className="flex flex-col gap-[4vmin]">
        <SentenceGroup props={{style: {fontSize: "clamp(3rem, 8vw, 10rem)"}}}>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">S</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">A</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">M</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">U</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-3deg] transform">E</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg] transform">L</span>
            <span>&nbsp;</span>
            <span className="group-hover/sentence:translate-y-[50%] group-hover/sentence:rotate-[8deg] transform">M</span>
            <span className="group-hover/sentence:translate-y-[15%] group-hover/sentence:rotate-[-6deg] transform">E</span>
            <span className="group-hover/sentence:translate-x-[50%] group-hover/sentence:translate-y-[-10%] group-hover/sentence:rotate-[-3deg] transform">V</span>
            <span className="group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg] transform">I</span>
            <span className="group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg] transform">K</span>
          </LetterGroup>
          <LetterGroup className="flex">
            <span className="group-hover/sentence:translate-x-[-30%] group-hover/sentence:translate-y-[30%] group-hover/sentence:rotate-[10deg]">D</span>
            <span className="group-hover/sentence:translate-x-[0%] group-hover/sentence:translate-y-[10%] group-hover/sentence:rotate-[3deg] transform">E</span>
            <span className="group-hover/sentence:translate-y-[-15%] group-hover/sentence:rotate-[6deg] transform">V</span>
            <span className="group-hover/sentence:translate-y-[-50%] group-hover/sentence:rotate-[-8deg] transform">E</span>
            <span className="group-hover/sentence:translate-y-[10%] group-hover/sentence:rotate-[5deg] transform">L</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[3deg] transform">O</span>
            <span className="group-hover/sentence:translate-x-[10%] group-hover/sentence:translate-y-[10%] group-hover/sentence:rotate-[8deg] transform">P</span>
            <span className="group-hover/sentence:translate-x-[40%] group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[6deg] transform">E</span>
            <span className="group-hover/sentence:translate-x-[80%] group-hover/sentence:translate-y-[-60%] group-hover/sentence:rotate-[-4deg] transform">R</span>
            <div className="flex-1"></div>
            <span className="group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg] transform">&</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">C</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:rotate-[-6deg] transform">O</span>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg] transform">D</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">E</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg] transform">C</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg] transform">R</span>
            <span className="group-hover/sentence:translate-y-[15%] group-hover/sentence:rotate-[10deg] transform">A</span>
            <span className="group-hover/sentence:translate-y-[50%] group-hover/sentence:rotate-[8deg] transform">F</span>
            <span className="group-hover/sentence:translate-y-[15%] group-hover/sentence:rotate-[-6deg] transform">T</span>
            <span className="group-hover/sentence:translate-x-[50%] group-hover/sentence:translate-y-[-10%] group-hover/sentence:rotate-[-3deg] transform">E</span>
            <span className="group-hover/sentence:translate-x-[120%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg] transform">R</span>
            <span className="group-hover/sentence:translate-x-[300%] group-hover/sentence:translate-y-[-30%] group-hover/sentence:rotate-[-10deg] transform">!</span>
          </LetterGroup>

        </SentenceGroup>
      </div>
    </PageWrapper >
  )
}

export default Header;