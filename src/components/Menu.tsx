import { JSX, useState } from "react";
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
      <div className="absolute grid size-full place-items-center">
        <button
          onClick={toggle}
          className={`z-50 grid ${toggleSize} place-items-center rounded-full bg-black dark:bg-white`}
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
}: Readonly<{
  index: number;
  open: boolean;
  icon: JSX.Element;
  href: string;
}>) {
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
          className={`${refSize} peer grid place-items-center rounded-full bg-black p-[calc(0.5vmin+0.5rem)] *:size-full dark:bg-white`}
        >
          {icon}
        </a>
        <span
          className={`absolute inset-x-0 mx-auto text-center capitalize text-black opacity-0 transition-opacity duration-500 peer-hover:opacity-100 dark:text-white`}
        >
          {href}
        </span>
      </div>
    </div>
  );
}

export default Menu;
