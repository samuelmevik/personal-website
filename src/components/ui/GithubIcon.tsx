import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function GithubIcon({ className, direction = "top-left" }: { className?: string, direction?: "top-left" | "top-right" }) {
  const eyeDir = direction === "top-left" ? "left-0" : "right-0";
  return (
    <div className={twMerge(`group size-[4vmin]  ring-[#575757] ring-2 rounded-full transition-colors relative`, className)}>
      <span className="absolute inline-flex size-1/5 rounded-full bg-[#575757] opacity-75 left-[27%] top-[36%] overflow-hidden">
        <div className={`animate-bounce absolute ${eyeDir} size-4/6 rounded-full bg-white `}></div>
      </span>
      <span className="absolute inline-flex size-1/5 rounded-full bg-[#575757] opacity-75 right-[27%] top-[36%]  overflow-hidden">
        <div className={`animate-bounce absolute ${eyeDir} size-4/6 rounded-full bg-white `}></div>
      </span>

      <span className='absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-[65%] bg-red-700 w-[8%] h-0 group-hover:h-[10%] transition-all rounded-b-full ring-1 ring-[#575757]'>
        {direction === "top-left" ? <span className='absolute bg-red-900 right-0 top-0 size-1/2 rounded-bl-sm' /> : <span className='absolute bg-red-900 left-0 top-0 size-1/2 rounded-br-sm' />}
      </span>

      <FaGithub className="size-full" />
    </div>
  );
}

export default GithubIcon