import { twMerge } from "tailwind-merge";

function PageWrapper({
  children,
  id,
  className,
}: Readonly<{
  children: React.ReactNode;
  id?: string;
  className?: string;
}>) {
  return (
    <div className={twMerge("w-full min-h-svh relative", className)} id={id}>
      {children}
    </div>
  );
}

export default PageWrapper;
