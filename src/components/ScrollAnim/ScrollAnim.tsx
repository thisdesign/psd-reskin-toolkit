import React, { useEffect, useState, useRef } from "react";
import S from "./ScrollAnim.Styled";

const ScrollAnim: React.FC<{
  delay?: number;
}> = ({ children, delay = 150 }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const windowHeight = window.innerHeight; // TODO: handle resize

    const setPos = () => {
      if (ref.current) {
        const bounds = ref.current.getBoundingClientRect();
        const isAboveBottom = bounds.y - windowHeight < 0;

        if (isAboveBottom) {
          setTimeout(() => setIsInView(isAboveBottom), delay);
        }
      }
    };

    setPos();

    window.addEventListener("scroll", setPos);

    return () => {
      window.removeEventListener("scroll", setPos);
    };
  }, []);

  return (
    <S.Wrapper ref={ref} inView={isInView}>
      {isInView}
      {children}
    </S.Wrapper>
  );
};

export default ScrollAnim;
