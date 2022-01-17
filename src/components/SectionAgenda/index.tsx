import React from "react";

import Container from "components/Container";
import Heading from "components/Heading";

import * as S from "./styles";
import { SectionAgendaProps } from "types/api";

const SectionAgenda = ({ description, title }: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text>
      {description.split("\n").map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </S.Text>
  </Container>
);

export default SectionAgenda;
