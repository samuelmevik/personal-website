import { CSSProperties, Fragment } from "react";
import { twMerge } from "tailwind-merge";

// Hover offsets taken from the original hand-tuned titles: each letter drifts
// away from the middle of its word, with a lift and a tilt from these lists.
const LIFT = [60, 20, 60, 8, 20, -40, 50, 15, -10, -30, -60, 30];
const TILT = [4, -6, -8, 5, -3, -5, 8, -6, -3, -10, 6, -4];

function letterStyle(index: number, position: number, length: number) {
  const spread = length > 1 ? position / (length - 1) - 0.5 : 0;
  return {
    "--dx": `${Math.round(spread * 160)}%`,
    "--dy": `${LIFT[index % LIFT.length]}%`,
    "--r": `${TILT[index % TILT.length]}deg`,
    "--i": index,
  } as CSSProperties;
}

function ScatterText({
  text,
  as: Tag = "h2",
  className,
  wordClassName,
}: Readonly<{
  text: string;
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
  wordClassName?: string;
}>) {
  let index = 0;

  return (
    <Tag className={twMerge("scatter", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="block">
        {text.split(" ").map((word, w) => (
          <Fragment key={`${word}-${w}`}>
            {w > 0 && " "}
            <span className={twMerge("scatter-word", wordClassName)}>
              {[...word].map((letter, position) => (
                <span
                  key={position}
                  className="scatter-letter"
                  style={letterStyle(index++, position, word.length)}
                >
                  {letter}
                </span>
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}

export default ScatterText;
