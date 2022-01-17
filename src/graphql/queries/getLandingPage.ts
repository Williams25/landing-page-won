export const GET_LANDING_PAGE = /* GraphQL */ `
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment button on ComponentPageButton {
    label
    url
  }

  fragment logo on LandingPage {
    logo {
      ...image
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        ...button
      }
      image {
        ...image
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...image
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          ...image
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      conceps {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subTitle
        description
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
    }
  }
`;
