import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/Hero.js";
import Features from "components/customize/Features.js";
import Services from "components/customize/Sevices.js";
import { SubSection1, SubSection2 } from "components/customize/Sevices.js";
import Portfolio from "components/customize/Portfolio";
import Footer from "components/customize/Footer.js";
import Portfolio2 from "components/customize/Portfolio2";
import Testimonial from "components/customize/TestImonial.js";
import ContactUs from "components/customize/ContactUs";
export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Services />
    <SubSection1 />
    <SubSection2 />
    <Portfolio />
    <Portfolio2 />
    <Testimonial />
    <ContactUs />
    <Footer />
  </AnimationRevealPage>
);
