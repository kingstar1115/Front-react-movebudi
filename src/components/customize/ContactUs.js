import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "./StrokeText.js";
import AvataImageSrc1 from "../../images/img/Avatar-1.png";
import AvataImageSrc2 from "../../images/img/Avatar-2.png";
import AvataImageSrc3 from "../../images/img/Avatar.png";

const ImageContainer = tw.div`p-10 flex flex-row justify-center`;
const TitleContainer = tw.div`text-center text-[60px] pb-[40px] text-[600] leading-[72px] -tracking-[2.5px] font-jost text-white`;
const DescriptionContainer = tw.div`font-poppins text-center pb-[40px] text-[22px] text-[400] leading-[36px] lg:w-[35%] mx-auto text-white`;
const ButtonContainer = tw.button`py-[16px] px-[32px] text-[#7B7EFA] rounded-full bg-[#FFF] text-[16px] leading-[28px] mx-auto -tracking-[0.2px] text-[600] font-poppins`;

export default () => {
  return (
    <>
      <Container tw="bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] p-20 mx-auto">
        <ImageContainer>
          <div tw="relative w-[100px] py-[30px]">
            <img
              src={AvataImageSrc1}
              tw="z-10 absolute -left-[20px] top-0"
              alt="avatar"
            />
            <img
              src={AvataImageSrc2}
              tw="z-40 absolute -top-[8px] left-[20px]"
              alt="avatar"
            />
            <img
              src={AvataImageSrc3}
              tw="z-10 absolute -right-[20px] top-0"
              alt="avatar"
            />
          </div>
        </ImageContainer>
        <TitleContainer>Have Any Question? Contact Us</TitleContainer>
        <DescriptionContainer>
          We would love to solve your problem and help you choose a right
          service for you
        </DescriptionContainer>
        <div tw="flex justify-center">
          <ButtonContainer>Get in touch</ButtonContainer>
        </div>
      </Container>
    </>
  );
};
