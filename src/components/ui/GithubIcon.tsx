import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function GithubIcon({ className, direction = "top-left" }: { className?: string, direction?: "top-left" | "top-right" }) {
  const eyeDir = direction === "top-left" ? "left-0" : "right-0";
  return (
    <div className={twMerge(`group size-[4vmin]  ring-[#575757] ring-2 rounded-full transition-colors relative`, className)}>
      <span className="absolute left-[27%] top-[36%] inline-flex size-1/5 overflow-hidden rounded-full bg-[#575757] opacity-75">
        <div className={`absolute animate-bounce ${eyeDir} size-4/6 rounded-full bg-white `}></div>
      </span>
      <span className="absolute right-[27%] top-[36%] inline-flex size-1/5 overflow-hidden rounded-full bg-[#575757]  opacity-75">
        <div className={`absolute animate-bounce ${eyeDir} size-4/6 rounded-full bg-white `}></div>
      </span>

      <span className='absolute left-1/2 top-[65%] h-0 w-[8%] -translate-x-1/2 translate-y-[-65%] rounded-b-full bg-red-700 ring-1 ring-[#575757] transition-all group-hover:h-[10%]'>
        {direction === "top-left" ? <span className='absolute right-0 top-0 size-1/2 rounded-bl-sm bg-red-900' /> : <span className='absolute left-0 top-0 size-1/2 rounded-br-sm bg-red-900' />}
      </span>

      <FaGithub className="size-full" />
    </div>
  );
}

export default GithubIcon