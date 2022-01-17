import React from "react";

import Container from "components/Container";
import Heading from "components/Heading";

import * as S from "./styles";
import { SectionConceptsProps } from "types/api";

const SectionConcepts = ({ conceps, title }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {conceps.map((item, index) => (
          <S.Item key={index}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);

export default SectionConcepts;
