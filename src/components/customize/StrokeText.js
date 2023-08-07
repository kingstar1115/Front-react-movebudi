import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Pseudo from "../../images/img/pseudo.png";
import Pseudo2 from "../../images/img/pseudo2.png";
import { css } from "styled-components/macro"; //eslint-disable-line

export const Container = styled.div`
  ${tw`relative -mx-8 bg-[#000A1F] max-w-[1920px] mx-auto py-10`}
`;
const StrokeText = tw.p`text-[transparent] font-black font-kumbh leading-[40px] text-[60px] xl:text-[260px] lg:text-[160px] md:text-[120px] sm:text-[100px] uppercase `;
// const StrokeText = tw.p`text-[transparent] font-black font-kumbh leading-[40px] text-[60px] xl:text-[260px] lg:text-[160px] md:text-[120px] sm:text-[100px] uppercase `;

export const RelativeContianer = tw.div`text-white`;
export const StrokeTitle = styled(StrokeText)`
  ${tw``}
  z-index:-1;
  margin-top: -80px;
  color: #000a1f;
  line-height: 200px;
  background: linear-gradient(-45deg, #6ddcff, #7f60f9);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px transparent;
`;
export const SubTitle = tw.div`-mt-[120px] text-white text-[72px] leading-[92px] font-jost text-left`;
export const SubParagraph = tw.p`leading-[40px] text-[24px] text-white `;
export const CustomizeButton = tw.button`bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]`;

function StrokeTextObject({
  head = "Fact",
  title = "Let’s See Our Company Achievement",
  imgCss = null, //tw="md:w-[65%]"
  titleCss = null,
  subTitleCss = null,
  secondImage = null,
}) {
  return (
    <>
      <div>
        <img
          src={secondImage == null ? Pseudo : Pseudo2}
          css={imgCss}
          alt="Pseudo"
        />
      </div>
      <StrokeTitle css={titleCss}>{head}</StrokeTitle>
      <SubTitle css={subTitleCss}>{title}</SubTitle>
    </>
  );
}

export default StrokeTextObject;
