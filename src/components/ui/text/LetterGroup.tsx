import { twMerge } from "tailwind-merge";

function LetterGroup({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("group/sentence transition-opacity duration-500 ease-in-out group-hover:opacity-10 hover:!opacity-100 *:inline-block *:transition-transform *:duration-500 *:ease-in-out", className)} >
      {children}
    </div>
  );
}

export default LetterGroup;