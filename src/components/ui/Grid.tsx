import { twMerge } from "tailwind-merge"

function Grid({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("grid place-items-center sm:pt-[10vmin]", className)}>
      {children}
    </div>
  )
}

Grid.Row = function ({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-[4vmin] sm:flex-row justify-center items-center", className)}>
      {children}
    </div>
  )
}

Grid.Item = function ({ children, className, position, hover }: { children?: React.ReactNode, className?: string, position?: "up" | "down", hover?: boolean }) {
  return (
    <div className={twMerge(`reveal w-[80vw] sm:w-[40vmin] sm:h-[56vmin]  ${position === "down" && "sm:translate-y-[10vmin]"} ${position === "up" && "sm:-translate-y-[10vmin]"} ${hover && "hover:scale-105 duration-300"} `, className)}>
      {children}
    </div>
  )
}

export default Grid