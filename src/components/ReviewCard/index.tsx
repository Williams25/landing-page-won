import React, { useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useImage } from "../../hooks/useImage";
import * as S from "./styles";

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  const { handleLoadImage } = useImage();

  useEffect(() => {
    const texts = document.querySelectorAll("p.description");

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? "add"
            : "remove"
        ]("truncated");
      }
    });

    texts.forEach((text) => observer.observe(text));
  });

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source srcSet={handleLoadImage(image)} type="image/webp" />
          <source srcSet={handleLoadImage(image)} type="image/jpg" />
          <img src={handleLoadImage(image)} loading="lazy" alt={name} />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  );
};

export default ReviewCard;
