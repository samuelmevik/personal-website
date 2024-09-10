import { twMerge } from "tailwind-merge"

function Grid({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={twMerge("grid gap-[4vmin]", className)}>{children}</div>
}


Grid.Item = function ({ children, className }: { children?: React.ReactNode, className?: string }) {
  return <div className={twMerge("aspect-[56/40] w-[80%] md:w-[55vmin] duration-1000 mx-auto transition-transform md:even:translate-x-[calc(33%+2vw)] md:odd:-translate-x-[calc(33%+2vw)]", className)}>{children}</div>
}

export default Grid