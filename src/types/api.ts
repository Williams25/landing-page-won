export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
};

export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type ButtonProps = {
  label: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: ButtonProps;
  image: LogoProps;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: LogoProps;
};

export type SectionTechProps = {
  title: string;
  techIcons: {
    title: string;
    icon: {
      url: string;
    }[];
  }[];
};
