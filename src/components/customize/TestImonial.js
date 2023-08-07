import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import css from "styled-components/macro";
import StrokeTextObject from "./StrokeText";
import { RelativeContianer, Container } from "./StrokeText";
import MessageIconSrc from "../../images/img/icon-chat.png";
import RightImageSrc from "../../images/img/about-6.png";
import LeftImageSrc from "../../images/img/about-5.png";
import CommaImageSrc from "../../images/img/comma-icon.png";

const CardSlider = styled(Slider)`
  ${tw`mt-16 w-[80%] mx-auto overflow-hidden`}
  .slick-track {
    ${tw`flex justify-center gap-[40px] `}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1 w-[80%]`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border relative focus:outline-none`;

function MessageBox({
  messageContent = "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
  sender = "Richard S. Brooks",
  role = "CEO & Founder",
}) {
  return (
    <>
      <div tw="bg-[#292738] p-[76px]">
        <img src={CommaImageSrc} alt="comma" />
        <div tw="border-b-4 text-[32px] text-[400] pb-[48px] leading-[48px] text-[#67687A]">
          {messageContent}
        </div>
        <div tw="flex flex-row justify-between items-center">
          <div tw="flex flex-col pt-[48px]">
            <div tw="text-white font-jost text-[34px] text-[600] leading-[40px]">
              {sender}
            </div>
            <div tw="text-[#67687A] font-sans text-[22px] text-[400] leading-[28px]">
              {role}
            </div>
          </div>
          <img
            src={MessageIconSrc}
            tw="w-[140px] h-[84px]"
            alt="message icon"
          />
        </div>
      </div>
    </>
  );
}

export default ({
  messages = [
    {
      messageContent:
        "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
      sender: "Richard S. Brooks",
      role: "CEO & Founder",
    },
    {
      messageContent:
        "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
      sender: "Gars G. Bernhardt",
      role: "CEO & Founder",
    },
    {
      messageContent:
        "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
      sender: "Gars G. Bernhardt",
      role: "CEO & Founder",
    },
    {
      messageContent:
        "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
      sender: "Gars G. Bernhardt",
      role: "CEO & Founder",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container tw="pb-[200px]">
        <RelativeContianer tw="pt-[150px] py-[100px]">
          <StrokeTextObject
            head="say’s"
            title="People’s Say About Our Support & Services"
            titleCss={tw`-mt-20 text-center uppercase -ml-[69px] lg:text-[260px]`}
            subTitleCss={tw`w-[40%] -mt-[110px] mx-auto  lg:text-[66px] leading-[82px] font-jost text-center tracking-[0.7px]`}
            imgCss={tw`mx-auto w-[132px] h-[16px] absolute z-50 top-[320px] left-[46%]`}
          />
        </RelativeContianer>

        <div tw="flex md:flex-row justify-center gap-[0] p-[80px] py-[25px] relative">
          <img
            src={LeftImageSrc}
            alt="left image"
            tw="ml-[50px] absolute left-[0px] -mt-[200px] h-[1112px] w-auto z-[50]"
          />
          <CardSlider ref={setSliderRef} {...sliderSettings}>
            {messages.map((item, idx) => (
              <Card tw="">
                <MessageBox key={idx} {...item} />
              </Card>
            ))}
          </CardSlider>
          <img
            src={RightImageSrc}
            alt="right image"
            tw=" absolute right-[100px] -mt-[280px] h-[1220px] w-auto "
          />
        </div>
      </Container>
    </>
  );
};
