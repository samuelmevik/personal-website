import { useState } from "react"
import { FaCamera, FaHome } from "react-icons/fa"
import { FaCode, FaFilePen } from "react-icons/fa6"
import { GrWorkshop } from "react-icons/gr"
import { IoMdPerson } from "react-icons/io"
import { LuPlus } from "react-icons/lu"

function Menu() {

  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen(prevState => !prevState)
  }
  const quantity = 5
  const degree = 180

  return (
    <div className={'z-50 text-white translate-y-[calc(50%-4rem)] dark:text-black fixed mx-auto bottom-0 left-0 right-0 size-[20rem]'}>
      <div className="grid place-items-center h-full">
        <button onClick={toggleMenu} className={`z-50 peer size-[max(4vmin,4rem)] bg-black dark:bg-white p-1 rounded-full transition-transform duration-1000 ${open && "rotate-[315deg]"}`} aria-label="Toggle Menu">
          <LuPlus className="w-full h-full" />
        </button>
        <NavItem href="home" icon={<FaHome />} open={open} order={0} quantity={quantity} degree={degree} />
        <NavItem href="me" icon={<IoMdPerson />} open={open} order={1} quantity={quantity} degree={degree} />
        <NavItem href="album" icon={<FaCamera />} open={open} order={2} quantity={quantity} degree={degree} />
        <NavItem href="work" icon={<GrWorkshop />} open={open} order={3} quantity={quantity} degree={degree} />
        <NavItem href="education" icon={<FaFilePen />} open={open} order={4} quantity={quantity} degree={degree} />
        <NavItem href="projects" icon={<FaCode />} open={open} order={5} quantity={quantity} degree={degree} />
      </div>
    </div>
  )
}

function NavItem({ href, icon, open, order, quantity, degree = 360, onHover }: { href: string, icon: JSX.Element, open: boolean, order: number, quantity: number, degree?: number, onHover?: (text: string) => void }) {
  return (
    <div onMouseOver={() => onHover && onHover(href)} style={{ rotate: `${open ? `${degree / quantity * order}deg` : ""}`, transitionDelay: `${0.1 * order}s` }} className={`absolute size-12 transition-all duration-700 left-0 ${open ? `origin-[10rem] translate-x-0` : "translate-x-[8.5rem]"}`}>
      <div style={{ rotate: `${-degree / quantity * order}deg` }} className="bg-black dark:bg-white rounded-full size-full transition-all">
        <a href={"#" + href} className="size-full *:size-full *:p-2 peer">{icon}</a>
        <div className="text-black capitalize dark:text-white absolute opacity-0 transition-opacity duration-200 peer-hover:opacity-100 w-full text-center">{href}</div>
      </div>
    </div>
  )
}


export default Menu