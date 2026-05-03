import { twMerge } from "tailwind-merge";

function TitleWrapper({
  children,
  eyebrow,
  align = "left",
  className,
}: Readonly<{
  children: React.ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}>) {
  return (
    <header
      className={twMerge(
        "relative z-10 flex flex-col gap-[clamp(0.75rem,2vmin,1.5rem)]",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <div className="reveal flex items-center gap-3">
          <span aria-hidden="true" className="block h-px w-8 bg-current/40" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      {children}
    </header>
  );
}

export default TitleWrapper;
