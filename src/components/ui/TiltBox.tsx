import { createRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function TiltBox({
  children,
  className,
  hoverGrow,
  degree = 10,
}: {
  children: React.ReactNode;
  className?: string;
  hoverGrow?: boolean;
  degree?: number;
}) {
  const ref = createRef<HTMLDivElement>();

  const [xTilt, setXTilt] = useState(0);
  const [yTilt, setYTilt] = useState(0);

  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      if (isTouchDevice) return;
      const element = ref.current;
      if (!element) return;
      const x = event.clientX;
      const y = event.clientY;

      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const offsetX = ((x - elementCenterX) / elementCenterX) * degree;
      const offsetY = ((y - elementCenterY) / elementCenterY) * degree;

      setXTilt(offsetX);
      setYTilt(offsetY);
    }
    const element = ref.current;

    element?.addEventListener("mousemove", onMouseMove);

    return () => {
      element?.removeEventListener("mousemove", onMouseMove);
    };
  }, [degree, ref]);

  return (
    <div
      ref={ref}
      className={twMerge(
        `${hoverGrow && "hover:scale-105 duration-300"}`,
        className
      )}
    >
      <div
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(5000px) rotateY(${xTilt}deg) rotateX(${
            -1 * yTilt
          }deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default TiltBox;
