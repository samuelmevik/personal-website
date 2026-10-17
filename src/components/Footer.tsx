import ScatterText from "./ScatterText";
import endOfThePage from "../assets/header/large/6_crop.jpg";

function Footer() {
  return (
    <footer id="contact" className="section-y edge-x">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <ScatterText text="Get in touch" className="title" />

          <a
            href="mailto:samuel.mevik@outlook.com"
            className="link w-fit text-[clamp(1.25rem,0.9rem+2.2vw,2.75rem)] leading-tight"
          >
            samuel.mevik@outlook.com
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/samuel-mevik/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/samuelmevik"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <figure className="w-full max-w-[22rem] lg:col-span-4 lg:col-start-9 lg:justify-self-end">
          <img
            src={endOfThePage}
            alt="Samuel sitting on a stone sign carved with the words “Don’t go beyond this point”"
            width={800}
            height={1067}
            loading="lazy"
            className="block aspect-[3/4] w-full object-cover"
          />
          <figcaption className="caption mt-3">
            You’ve reached the end of the page.
          </figcaption>
        </figure>
      </div>

      <p className="caption mt-16">
        © {new Date().getFullYear()} Samuel Mevik
      </p>
    </footer>
  );
}

export default Footer;
