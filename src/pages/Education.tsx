/* eslint-disable tailwindcss/classnames-order */
import PageWrapper from "../components/PageWrapper"
import TitleWrapper from "../components/TitleWrapper"
import Experience from "../components/ui/Experience"
import Grid from "../components/ui/Grid"
import LetterGroup from "../components/ui/text/LetterGroup"
import SentenceGroup from "../components/ui/text/SentenceGroup"
import lnuSmall from "../assets/lnu-S.jpg"
import lnuLarge from "../assets/lnu-L.jpg"


function Education() {
  return (
    <PageWrapper id="education" className="flex flex-col mt-[4vmin]">
      <TitleWrapper>
        <SentenceGroup className="inline-flex w-fit flex-wrap">
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-80%] group-hover/sentence/sentence:translate-y-[60%] group-hover/sentence/sentence:rotate-[4deg]">M</span>
            <span className="group-hover/sentence:translate-x-[-40%] group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-6">y</span>
            <span>&nbsp;</span>
          </LetterGroup>
          <LetterGroup>
            <span className="group-hover/sentence:translate-x-[-10%] group-hover/sentence:translate-y-[60%] group-hover/sentence:rotate-[-8deg]">E</span>
            <span className="group-hover/sentence:translate-y-[8%] group-hover/sentence:rotate-[5deg]">d</span>
            <span className="group-hover/sentence:translate-y-[20%] group-hover/sentence:-rotate-3">u</span>
            <span className="group-hover/sentence:translate-y-[-40%] group-hover/sentence:rotate-[-5deg]">c</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg]">a</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">t</span>
            <span className="group-hover/sentence:translate-y-[40%] group-hover/sentence:rotate-[-5deg]">i</span>
            <span className="group-hover/sentence:translate-y-[-20%] group-hover/sentence:rotate-[-5deg]">o</span>
            <span className="group-hover/sentence:translate-y-[-5%] group-hover/sentence:rotate-[-5deg]">n</span>
          </LetterGroup>
        </SentenceGroup>
      </TitleWrapper>

      <Grid className="flex-1 place-items-center">
        <div className="w-[90%] md:max-w-[max(80vmin,40rem)]">
          <picture>
            <source width={640} height={230} media="(max-width: 768px)" srcSet={lnuSmall} />
            <source width={900} height={323} media="(min-width: 768px)" srcSet={lnuLarge} />
            <img width={900} height={323} className="object-cover w-full" src={lnuLarge} alt="Linnaeus University" />
          </picture>
          <Experience title="Bachelor of Web Development" date="August 2021 - June 2024" place="Linnaeus university">
            <p>My education has provided me with a solid computer science foundation, focusing
              on web programming.
              During my studies, I honed my skills in programming, developing, and deploying
              robust web applications with high code quality across various platforms.</p>
          </Experience>
        </div>
      </Grid>
    </PageWrapper>
  )
}

export default Education