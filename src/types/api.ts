export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
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
