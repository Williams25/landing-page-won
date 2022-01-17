import React from "react";
import { GetStaticProps } from "next";
import { client } from "../graphql/client";
import { GET_LANDING_PAGE } from "../graphql/queries/getLandingPage";
import SectionHero from "components/SectionHero";
import SectionAboutProject from "components/SectionAboutProject";
import SectionTech from "components/SectionTech";
import SectionConcepts from "components/SectionConcepts";
import SectionModules from "components/SectionModules";
import SectionAgenda from "components/SectionAgenda";
import PricingBox from "components/PricingBox";
import SectionAboutUs from "components/SectionAboutUs";
import SectionReviews from "components/SectionReviews";
import SectionFaq from "components/SectionFaq";
import Footer from "components/Footer";
import JsonSchema from "components/JsonSchema";
import { LandingPageProps } from "../types/api";

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  ...pricingBox
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject
      description={sectionAboutProject.description}
      image={sectionAboutProject.image}
      title={sectionAboutProject.title}
    />
    <SectionTech techIcons={sectionTech.techIcons} title={sectionTech.title} />
    <SectionConcepts
      conceps={sectionConcepts.conceps}
      title={sectionConcepts.title}
    />
    <SectionModules
      modules={sectionModules.modules}
      title={sectionModules.title}
    />
    <SectionAgenda {...sectionAgenda} />
    <PricingBox {...pricingBox} />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);
  console.log(landingPage);
  return {
    props: {
      ...landingPage
    }
  };
};
