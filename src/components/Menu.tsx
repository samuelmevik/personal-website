import { JSX, useEffect, useState } from "react";
import { FaCamera, FaCode, FaHome } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const menuOptions = [
  { icon: <FaHome />, href: "home", label: "Home" },
  { icon: <IoMdPerson />, href: "me", label: "About" },
  { icon: <FaCamera />, href: "album", label: "Album" },
  { icon: <GrWorkshop />, href: "experience", label: "Experience" },
  { icon: <FaCode />, href: "projects", label: "Projects" },
];

const squareSize = "size-[calc(40vmin+8rem)]";
const toggleSize = "size-[calc(4vmin+2rem)]";
const refSize = "size-[calc(3vmin+2rem)]";
const refXTransform = "translate-x-[calc((40vmin+8rem)/2-(4vmin+2rem)/2)]";
const refXOrigin = "origin-[calc((40vmin+8rem)/2)]";
const translateMenuY = "translate-y-[calc(50%-(4vmin+2rem))]";
const degree = 180;

function Menu() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Hide the floating menu while the footer is on-screen so it doesn't
  // overlap the contact info.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      className={`z-50 text-white dark:text-black ${squareSize} fixed inset-x-0 bottom-0 m-auto ${translateMenuY} pointer-events-none transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <nav
        aria-label="Primary"
        id="primary-nav"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute grid size-full place-items-center">
          <button
            onClick={toggle}
            className={`pointer-events-auto z-50 grid ${toggleSize} place-items-center rounded-full bg-black dark:bg-white shadow-lg`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
          >
            <LuPlus
              className={`size-full transition-transform duration-300 ${
                open ? "rotate-[315deg]" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
        {menuOptions.map((option, index) => (
          <NavItem key={option.href} open={open} index={index} {...option} />
        ))}
      </nav>
    </div>
  );
}

function NavItem({
  index,
  open,
  icon,
  href,
  label,
}: Readonly<{
  index: number;
  open: boolean;
  icon: JSX.Element;
  href: string;
  label: string;
}>) {
  const angleOpen = (degree / (menuOptions.length - 1)) * index;
  const angleClose = 0;
  const delay = `${0.05 * index}s`;

  return (
    <div
      style={{
        rotate: open ? `${angleOpen}deg` : `${angleClose}deg`,
        transitionDelay: delay,
      }}
      className={`absolute inset-y-0 my-auto size-min transition-transform duration-400 ease-out ${refXTransform} ${
        open ? `!translate-x-0 ${refXOrigin}` : ""
      }`}
    >
      <div
        style={{
          rotate: open ? `${-angleOpen}deg` : "0deg",
          transitionDelay: delay,
        }}
        className="transition-transform duration-400 ease-out"
      >
        <a
          href={`#${href}`}
          tabIndex={open ? 0 : -1}
          aria-label={label}
          className={`${refSize} pointer-events-auto peer grid place-items-center rounded-full bg-black p-[calc(0.5vmin+0.5rem)] *:size-full dark:bg-white shadow-md transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon}
        </a>
        <span
          className={`absolute inset-x-0 mx-auto text-center text-black dark:text-white transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
            open ? "opacity-80 peer-hover:opacity-100" : "opacity-0"
          }`}
          style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default Menu;
