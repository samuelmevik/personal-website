import { twMerge } from "tailwind-merge";

function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("grid gap-[calc(5vmin+2rem)]", className)}>
      {children}
    </div>
  );
}

Grid.Item = function ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "w-[90%] md:w-[max(55vmin,30rem)] duration-700 mx-auto transition-[width,height,transform] ease-in-out md:even:translate-x-[min(33%,10vw)] md:odd:-translate-x-[min(33%,10vw)] reveal",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
