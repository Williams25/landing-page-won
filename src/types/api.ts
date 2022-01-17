export type LandingPageProps = PricingBoxProps & {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  sectionAboutUs: SectionAboutUsProps;
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

export type SectionConceptsProps = {
  title: string;
  conceps: {
    title: string;
  }[];
};

export type SectionModulesProps = {
  title: string;
  modules: {
    title: string;
    subTitle: string;
    description: string;
  }[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  button: ButtonProps;
  benefits: string;
};

export type SectionAboutUsProps = {
  title: string;
  authors: {
    name: string;
    role: string;

    description: string;
    photo: LogoProps;
    socialLinks: {
      title: string;
      url: string;
    }[];
  }[];
};
