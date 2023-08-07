import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/play.svg";
import { CustomizeButton } from "./StrokeText";
import ThreeColSection from "./Layout.js/ThreeColSection";
import SupportIconImage from "../../images/img/feature-icon-1.svg";
import ShieldIconImage from "../../images/img/feature-icon-2.svg";
import CustomizeIconImage from "../../images/img/feature-icon-3.svg";
import Pseudo from "../../images/img/pseudo.png";
import StrokeTextObject from "./StrokeText";
import {
  StrokeTitle,
  SubTitle,
  RelativeContianer,
  SubParagraph,
  Container,
} from "./StrokeText";
const HeroContainer = tw.div`z-20 relative w-[90%] px-4 sm:px-8 mx-auto`;
const TwoColumn = tw.div`pt-48 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

export default ({ imgCss = tw`w-[160px]! h-[150px]!` }) => {
  return (
    <>
      <Container>
        <HeroContainer>
          <TwoColumn>
            <LeftColumn>
              <RelativeContianer>
                <StrokeTextObject
                  head="Fact"
                  title="Let’s See Our Company Achievement"
                  titleCss={tw`-mt-20 -ml-[69px] lg:text-[260px]`}
                  subTitleCss={tw`w-[90%] lg:text-[72px] leading-[92px] tracking-[0.7px]`}
                  imgCss={tw`absolute z-50 top-[210px]`}
                  secondImage="true"
                />
                <SubParagraph tw="pt-[40px] w-[95%]">
                  Sed ut perspiciatis unde omnis iste natus error sit ways
                  voluptatem accusantium doloremque laudantium totam rem aperiam
                  eaque epsa quae abillo inventore
                </SubParagraph>
              </RelativeContianer>
            </LeftColumn>
            <RightColumn>
              <div tw="flex rounded-full bg-[#333] w-[400px] h-[400px] justify-center items-center">
                <CustomizeButton tw="rounded-full bg-[#300] w-[120px] h-[120px] mx-auto to-[#7F60F9]">
                  <ChevronLeftIcon tw="inline text-white" />
                </CustomizeButton>
              </div>
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
        <ThreeColSection
          cards={[
            {
              imageSrc: SupportIconImage,
              title: "15000",
              description: "Moves Per Month",
              url: "/",
            },
            {
              imageSrc: ShieldIconImage,
              title: "25000",
              description: "Satisfied Clients",
              url: "/",
            },
            {
              imageSrc: CustomizeIconImage,
              title: "5000",
              description: "Expert Partners",
              url: "/",
            },
          ]}
          imageContainerCss={tw`p-2!`}
          imageCss={imgCss}
        />
      </Container>
    </>
  );
};
