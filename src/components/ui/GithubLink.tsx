
import { twMerge } from "tailwind-merge";
import GithubIcon from "./GithubIcon";


function GithubLink({link, direction, className} : {link: string, direction?: "top-right" | "top-left", className?: string}) {
  return <a href={link} className={twMerge("group grid justify-items-center", className)}>
    <GithubIcon direction={direction} /> 
    <p className="font-semibold tracking-tighter">Github</p>
  </a>
}

export default GithubLink