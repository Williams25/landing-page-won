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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`;
