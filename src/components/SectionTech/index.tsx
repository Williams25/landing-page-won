import React from "react";
import { useImage } from "../../hooks/useImage";
import Heading from "components/Heading";
import Container from "components/Container";
import * as S from "./styles";
import { SectionTechProps } from "types/api";

const SectionTech = ({ techIcons, title }: SectionTechProps) => {
  const { handleLoadImage } = useImage();
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ icon, title }) => (
            <S.Icon key={title}>
              <S.Icons
                src={handleLoadImage(icon[0].url)}
                alt={title}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
};

export default SectionTech;
