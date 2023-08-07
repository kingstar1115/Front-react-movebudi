import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import styled from "styled-components";
import { ThreeColSection2 } from "./Layout.js/ThreeColSection";
import NewsIcon1 from "../../images/img/news-icon-1.png";
import NewsIcon2 from "../../images/img/news-icon-2.png";
import NewsIcon3 from "../../images/img/news-icon-3.png";

import StrokeTextObject, { Container } from "./StrokeText";
import { RelativeContianer } from "./StrokeText";
const HeroContainer = tw.div`z-20 relative w-[90%] px-4 sm:px-8 mx-auto`;
const TwoColumn = tw.div`pt-48 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

export default ({ imgCss = tw`w-[100px]! h-[100px]!` }) => {
  return (
    <>
      <Container tw="pt-[150px]">
        <HeroContainer>
          <RelativeContianer>
            <StrokeTextObject
              head="Movebudi"
              title="Discover a better way to move"
              titleCss={tw`-mt-20 text-center -ml-[69px] lg:text-[260px]`}
              subTitleCss={tw`w-[40%] -mt-[110px] mx-auto  lg:text-[66px] leading-[82px] font-jost text-center tracking-[0.7px]`}
              imgCss={tw`mx-auto left-[46%] top-[50px] absolute top-0`}
              secondImage="true"
            />
          </RelativeContianer>
        </HeroContainer>
        <ThreeColSection2
          cards={[
            {
              imageSrc: NewsIcon1,
              title: "All your moving tasks in one place",
              description: [
                "From booking movers to forwarding your mail: stay on top of everything you need to do in one app.",
                "Receive helpful moving tips and timely reminders.",
              ],
            },
            {
              imageSrc: NewsIcon2,
              title: "Personalized, human $ AI assistance",
              description: [
                "Yes, you can talk to a human! Updater blends the best of in-person service with intuitive technology.",
                "Our experienced team is on hand to assist you when you need it.",
                "Let AI Help make your life easy peasy.",
              ],
            },
            {
              imageSrc: NewsIcon3,
              title: "Shop and compare with confidence",
              description: [
                "Compare options from the nation's top providers of internet, TV, insurance and even movers.",
                "Make the selection that's right for you without ever having to leave the app.",
              ],
            },
          ]}
          imageContainerCss={tw`p-2!`}
          imageCss={imgCss}
        />
      </Container>
    </>
  );
};
