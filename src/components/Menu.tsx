import { useState } from "react";
import { FaCamera, FaCode, FaHome } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const menuOptions = [
  {
    icon: <FaHome />,
    href: "home",
  },
  {
    icon: <IoMdPerson />,
    href: "me",
  },
  {
    icon: <FaCamera />,
    href: "album",
  },
  {
    icon: <GrWorkshop />,
    href: "work",
  },
  {
    icon: <FaFilePen />,
    href: "education",
  },
  {
    icon: <FaCode />,
    href: "projects",
  },
];

const squareSize = "size-[calc(40vmin+8rem)]";
const toggleSize = "size-[calc(4vmin+2rem)]";
const refSize = "size-[calc(3vmin+2rem)]";
const refXTransform = "translate-x-[calc((40vmin+8rem)/2-(4vmin+2rem)/2)]"; // = squareSize/2 - refSize/2
const refXOrigin = "origin-[calc((40vmin+8rem)/2)]"; // squareSize / 2
const translateMenuY = "translate-y-[calc(50%-(4vmin+2rem))]";
const degree = 180;

function Menu() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      className={`z-50 text-white dark:text-black ${squareSize} fixed inset-x-0 bottom-0 m-auto ${translateMenuY}`}
    >
      <div className="absolute grid place-items-center size-full">
        <button
          onClick={toggle}
          className={`grid z-50 ${toggleSize} place-items-center bg-black dark:bg-white rounded-full`}
          aria-label="Toggle menu"
        >
          <LuPlus
            className={`size-full transition-transform duration-1000 ${
              open && "rotate-[315deg]"
            }`}
          />
        </button>
      </div>
      {menuOptions.map((option, index) => (
        <NavItem key={index} open={open} index={index} {...option} />
      ))}
    </div>
  );
}

function NavItem({
  index,
  open,
  icon,
  href,
}: {
  index: number;
  open: boolean;
  icon: JSX.Element;
  href: string;
}) {
  return (
    <div
      style={{
        rotate: `${
          open ? `${(degree / (menuOptions.length - 1)) * index}deg` : ""
        }`,
        transitionDelay: `${0.1 * index}s`,
      }}
      className={`absolute inset-y-0 my-auto size-min transition-all duration-700
        ${refXTransform} 
        ${open && `!translate-x-0 ${refXOrigin}`}`}
    >
      <div
        style={{
          rotate: `${
            open ? `${(degree / (menuOptions.length - 1)) * -index}deg` : ""
          }`,
          transitionDelay: `${0.1 * index}s`,
        }}
      >
        <a
          href={`#${href}`}
          className={`${refSize} p-[calc(0.5vmin+0.5rem)] *:size-full bg-black dark:bg-white rounded-full grid place-items-center peer`}
        >
          {icon}
        </a>
        <span
          className={`absolute capitalize inset-x-0 mx-auto text-center text-black dark:text-white duration-500 transition-opacity opacity-0 peer-hover:opacity-100`}
        >
          {href}
        </span>
      </div>
    </div>
  );
}

export default Menu;
