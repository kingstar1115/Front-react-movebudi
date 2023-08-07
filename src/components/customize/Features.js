import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import StrokeText, { Container } from "./StrokeText.js";
import StrokeTextObject, {
  RelativeContianer,
  StrokeTitle,
  SubTitle,
} from "./StrokeText.js";
import Pseudo from "../../images/img/pseudo.png";
import FiveColSlider from "components/customize/FiveColSlider.js";

const StyledHeader = styled(Header)`
  ${tw`max-w-none bg-[transparent] border p-[12px] md:mx-[80px] mx-[20px] rounded-full lg:flex-row items-center justify-between sm:pr-[20px] `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 py-[28px] hover:border-gray-300 hover:text-gray-300 text-[30px]`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

export const CustomizeLink = tw(NavLink)`
  lg:mx-0 rounded-full
  xl:px-[40px] px-[0px] md:px-[40px] px-[40px] lg:py-[28px] py-[12px] leading-[42px] rounded bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]
  hocus:bg-blue-700 hocus:text-gray-200 focus:shadow-outline  
  border-b-0
`;

export const CustomizeLogoLink = styled(NavLink)`
  ${tw`items-center font-black text-white font-sans border-b-0 lg:mr-[40px] xl:pl-[40px] sm:pl-[10px] sm:pr-[20px] text-[42px] text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const HeroContainer = tw.div`z-20 py-[10px] lg:items-center max-w-screen-xl mx-auto`;
const HeroContainerChild = tw.div`flex xl:flex-row flex-col justify-center items-center gap-[25px]`;
const FeatureDetail = tw.div`text-[#A8ADB3] text-[18px] p-[25px] font-sans`;

export default () => {
  const logoLink = <CustomizeLogoLink href="/">MoveBudi</CustomizeLogoLink>;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Became Partner</NavLink>
      <NavLink href="#">Contact Us</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <CustomizeLink href="/#">Sign In</CustomizeLink>
    </NavLinks>,
  ];
  return (
    <>
      <Container tw="py-0">
        <StyledHeader links={navLinks} logoLink={logoLink} />
        <HeroContainer>
          <HeroContainerChild>
            <div>
              <StrokeTextObject
                head="Movbudi"
                title="Partnered with America’s favorite providers"
                titleCss={tw`mt-2 lg:text-[150px] z-[100]`}
                subTitleCss={tw`lg:text-[42px] leading-[53px]`}
              />
            </div>
            <FeatureDetail>
              Everything you need for your new home provided by hundreds of the
              nation's most trusted brands.Everything you need for yo
            </FeatureDetail>
          </HeroContainerChild>
        </HeroContainer>
        <FiveColSlider />
      </Container>
    </>
  );
};
