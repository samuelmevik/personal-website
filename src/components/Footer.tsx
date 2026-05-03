import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="edge-x relative flex min-h-svh flex-col justify-between gap-[clamp(3rem,8vmin,6rem)] border-t border-current/10 pb-[clamp(2rem,5vmin,4rem)] pt-[clamp(5rem,12vmin,10rem)]">
      <span
        aria-hidden="true"
        className="section-index absolute right-[var(--edge)] top-[clamp(2rem,6vmin,5rem)]"
      >
        05
      </span>

      <div className="relative z-10 flex flex-col gap-[clamp(2rem,5vmin,4rem)]">
        <div className="reveal flex items-center gap-3">
          <span aria-hidden="true" className="block h-px w-8 bg-current/40" />
          <span className="eyebrow">Get In Touch</span>
        </div>

        <h2
          className="reveal max-w-[14ch] text-balance"
          style={{
            fontSize: "clamp(2.5rem, 9vw, 8rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          Let’s build something good.
        </h2>

        <a
          href="mailto:samuel.mevik@outlook.com"
          className="reveal group inline-flex w-fit items-center gap-3 border-b border-current/30 pb-2 transition-colors hover:border-current"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.85rem)" }}
        >
          <HiOutlineMail
            aria-hidden="true"
            className="text-[1.25em] opacity-70 transition-transform duration-500 group-hover:translate-x-1"
          />
          <span>samuel.mevik@outlook.com</span>
          <span
            aria-hidden="true"
            className="opacity-50 transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      <div className="relative z-10 flex flex-col gap-6 border-t border-current/10 pt-[clamp(1.5rem,4vmin,3rem)] md:flex-row md:items-center md:justify-between">
        <nav aria-label="Social links" className="flex flex-wrap gap-3">
          <SocialLink
            href="https://www.linkedin.com/in/samuel-mevik/"
            label="LinkedIn"
            icon={<FaLinkedin aria-hidden="true" />}
          />
          <SocialLink
            href="https://github.com/samuelmevik"
            label="GitHub"
            icon={<FaGithub aria-hidden="true" />}
          />
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-65">
          <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
            Sweden
          </span>
          <span className="eyebrow" style={{ fontSize: "0.6rem" }}>
            © {new Date().getFullYear()} Samuel Mevik
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: Readonly<{ href: string; label: string; icon: React.ReactNode }>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 border border-current/25 px-4 py-2 transition-colors hover:border-current hover:bg-current hover:text-[var(--bg)]"
      style={{ fontSize: "0.7rem", letterSpacing: "0.22em" }}
    >
      <span className="text-[0.95rem]">{icon}</span>
      <span className="uppercase">{label}</span>
      <span
        aria-hidden="true"
        className="opacity-60 transition-transform duration-500 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}

export default Footer;
