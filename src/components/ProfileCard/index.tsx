import React from "react";

import { GrGithub } from "react-icons/gr";
import { FaDribbble, FaTwitter } from "react-icons/fa";
import { useImage } from "../../hooks/useImage";
import * as S from "./styles";

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
};

type socialLinks = {
  title: string;
  url: string;
};

type Props = {
  name: string;
  role: string;
  image: string;
  socialLinks: socialLinks[];
  description: string;
};

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => {
  const { handleLoadImage } = useImage();
  return (
    <S.Card key={name}>
      <S.Image>
        <source srcSet={handleLoadImage(image)} type="image/webp" />
        <source srcSet={handleLoadImage(image)} type="image/png" />
        <img src={handleLoadImage(image)} loading="lazy" alt={name} />
      </S.Image>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map((item) => (
          <S.Link key={item.url}>
            <a href={item.url} title={item.title}>
              {icons[item.title]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default ProfileCard;
