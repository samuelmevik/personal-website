import { twMerge } from "tailwind-merge";

function PageWrapper({
  children,
  id,
  className,
  index,
  bare = false,
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  className?: string;
  index?: string;
  bare?: boolean;
}>) {
  return (
    <section
      id={id}
      className={twMerge(
        "relative w-full min-h-svh",
        !bare && "section-y edge-x",
        className,
      )}
    >
      {index && (
        <span
          aria-hidden="true"
          className="section-index absolute right-[var(--edge)] top-[clamp(2rem,6vmin,5rem)] z-0"
        >
          {index}
        </span>
      )}
      {children}
    </section>
  );
}

export default PageWrapper;
