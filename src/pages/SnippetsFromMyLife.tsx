import PageWrapper from "../components/PageWrapper";
import ScatterText from "../components/ScatterText";
import Slideshow from "../components/Slideshow";

function SnippetsFromMyLife() {
  return (
    <PageWrapper id="album" bare className="section-y overflow-x-clip">
      <div className="edge-x grid gap-6 lg:grid-cols-12 lg:items-end">
        <ScatterText text="Frame by frame" className="title lg:col-span-7" />
        <p className="max-w-[44ch] lg:col-span-4 lg:col-start-9">
          Places I’ve been and moments I wanted to keep, from 2015 to 2023. Drag
          the strip to look around, or tab to it and use the arrow keys.
        </p>
      </div>

      <Slideshow className="mt-[clamp(2.5rem,6vw,5rem)]" />
    </PageWrapper>
  );
}

export default SnippetsFromMyLife;
