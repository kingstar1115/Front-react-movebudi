import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { LogoLink } from "components/headers/light.js";
import {
  Container,
  Content2Xl,
  ContentWithVerticalPadding,
} from "components/misc/Layouts";
import tw from "twin.macro";

const Row = tw.div`flex`;
const NavRow = tw(
  Row
)`flex flex-col border p-[50px] px-[84px] rounded-full lg:flex-row items-center justify-between`;
const NavLink = tw.a`leading-10 transition duration-300 font-medium pb-1 mr-[64px] text-gray-700 border-gray-400 hocus:border-gray-700`;
const NavButton = tw.a`p-[20px] px-[44px] border bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] lg:mt-10 rounded-full transition duration-300 font-medium text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;

export default () => (
  <AnimationRevealPage>
    <Content2Xl>
      <NavRow>
        <div tw="-mr-12">
          <LogoLink href="/">
            {/* <img src={logo} alt="" /> */}
            MoveBudi
          </LogoLink>
          <NavLink target="_blank" href="/">
            Services
          </NavLink>
          <NavLink target="_blank" href="/">
            Became Partner
          </NavLink>
          <NavLink target="_blank" href="/">
            Contact Us
          </NavLink>
        </div>
        <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
          <NavButton target="_blank" href="/">
            Sign In
          </NavButton>
          <div tw="md:hidden flex-100 h-0"></div>
        </div>
      </NavRow>
    </Content2Xl>
    <Footer />
  </AnimationRevealPage>
);
