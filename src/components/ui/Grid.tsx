import { twMerge } from "tailwind-merge"

function Grid({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={twMerge("grid gap-[4vmin]", className)}>{children}</div>
}


Grid.Item = function ({ children, className }: { children?: React.ReactNode, className?: string }) {
  return <div className={twMerge("w-[90%] md:w-[55vmin] duration-700 mx-auto transition-[width,height,transform] ease-in-out md:even:translate-x-[calc(33%+2vw)] md:odd:-translate-x-[calc(33%+2vw)]", className)}>{children}</div>
}

export default Grid