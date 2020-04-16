import React, { useState, useEffect } from "react";
import S from "./ZoomImg.Styled";

const ZoomImg: React.FC<{ src: string }> = ({ src, ...props }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return <S.ZoomImg active={isMounted} src={src} {...props} />;
};

export default ZoomImg;
