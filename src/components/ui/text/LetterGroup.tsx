import { twMerge } from "tailwind-merge";

function LetterGroup({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("group/sentence group-hover:opacity-10 hover:!opacity-100 *:inline-block *:transition-transform", className)} >
      {children}
    </div>
  );
}

export default LetterGroup;