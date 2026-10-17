import { twMerge } from "tailwind-merge";

function PageWrapper({
  children,
  id,
  className,
  bare = false,
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  className?: string;
  bare?: boolean;
}>) {
  return (
    <section
      id={id}
      className={twMerge("relative w-full", !bare && "section-y edge-x", className)}
    >
      {children}
    </section>
  );
}

export default PageWrapper;
