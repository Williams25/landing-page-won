import React from "react";

import Heading from "components/Heading";
import Container from "components/Container";
import { useImage } from "../../hooks/useImage";
import * as S from "./styles";
import { SectionAboutProjectProps } from "types/api";

const SectionAboutProject = ({
  description,
  image,
  title
}: SectionAboutProjectProps) => {
  const { handleLoadImage } = useImage();
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image>
            <source srcSet={handleLoadImage(image.url)} type="image/webp" />
            <source srcSet={handleLoadImage(image.url)} type="image/png" />
            <img
              src={handleLoadImage(image.url)}
              loading="lazy"
              alt={image.alternativeText}
            />
          </S.Image>
          <div>
            <Heading>{title}</Heading>
            <S.Text>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </S.Text>
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  );
};

export default SectionAboutProject;
