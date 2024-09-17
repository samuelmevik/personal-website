import { twMerge } from "tailwind-merge";

function SentenceGroup({ children, className, props }: { children: React.ReactNode, className?: string, props? : React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <h1 className={twMerge("group", className)} {...props}>
      {children}
    </h1>
  );
}

export default SentenceGroup;