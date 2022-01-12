import { useImage } from "hooks/useImage";
import React from "react";
import { LogoProps } from "types/api";
import * as S from "./styles";

const Logo = ({ alternativeText, url }: LogoProps) => {
  const { handleLoadImage } = useImage();
  return <S.LogoWrapper src={handleLoadImage(url)} alt={alternativeText} />;
};

export default Logo;
