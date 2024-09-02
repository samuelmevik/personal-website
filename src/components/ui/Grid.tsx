import { twMerge } from "tailwind-merge"

function Grid({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("grid gap-x-[10vw] gap-y-[4vmin]", className)}>
      {children}
    </div>
  )
}

Grid.Center = function ({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("grid place-items-center", className)}>
      {children}
    </div>
  )
}

Grid.Item = function ({ children, className, positionX, positionY }: { children: React.ReactNode, className?: string, positionX?: "left" | "right", positionY?: "up" | "down" }) {
  return (
    <div className={twMerge(`reveal aspect-[56/40] w-[90%] sm:max-w-[50vmin] ring-black ${positionX === "left" && "sm:ml-auto"} ${positionX === "right" && "sm:mr-auto"} ${positionY === "up" && "sm:-translate-y-[10vmin]"} ${positionY === "down" && "sm:translate-y-[10vmin]"}`, className)}> {children}</div>
  )
}

export default Grid