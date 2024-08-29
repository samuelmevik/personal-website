import { twMerge } from "tailwind-merge";

function SentenceGroup({ children, className, props }: { children: React.ReactNode, className?: string, props? : React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <div className={twMerge("group *:transition-opacity", className)} style={{ fontSize: "clamp(3rem, 5vw, 6rem)" }} {...props}>
      {children}
    </div>
  );
}

export default SentenceGroup;