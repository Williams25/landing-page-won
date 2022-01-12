import React from "react";

import Logo from "components/Logo";
import Button from "components/Button";
import * as S from "./styles";
import { useImage } from "hooks/useImage";
import { gaEvent } from "utils/ga";
import Container from "components/Container";
import { LogoProps, HeaderProps } from "types/api";

const onClick = () =>
  gaEvent({ action: "click", category: "cta", label: "hero button" });

type SectionHeroProps = {
  logo: LogoProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: SectionHeroProps) => {
  const { handleLoadImage } = useImage();
  return (
    <S.Wrapper>
      <Container>
        <Logo alternativeText={logo.alternativeText} url={logo.url} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{header.title}</S.Title>
            <S.Description>{header.description}</S.Description>
            <S.ButtonWrapper>
              <Button href={header.button.url} onClick={onClick} wide>
                {header.button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src={handleLoadImage(header.image.url)}
            alt={header.image.alternativeText}
          />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default SectionHero;
