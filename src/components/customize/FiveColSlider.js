import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "../../images/img/left-arrow.svg";
import { ReactComponent as ChevronRightIcon } from "../../images/img/right-arrow.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-5`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const ControlButton = styled(PrimaryButtonBase)`
  box-sizing: border-box;
  padding: 0px !important;
  background: linear-gradient(#000a1f, #000a1f),
    linear-gradient(to right, #6ddcff, #7f60f9);
  border: 2px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  border-width: 12px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: -9px;
    bottom: -9px;
    left: -9px;
    right: -9px;
    border: 12px solid #000a1f;
    border-radius: 50%;
  }

  ${tw`mt-4 sm:mt-0 first:ml-0 rounded-full p-1 bg-[transparent]`}
  svg {
    ${tw`w-6 h-6 `}
  }
`;
const SlideContainer = tw.div`flex justify-center items-center`;
const Hr = tw.hr`border-[#464548] pb-[25px] ml-[24%] w-[52%]`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`w-1/2 mx-auto overflow-hidden`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-[80px] flex! flex-col max-w-sm relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-[100px] h-[80px] sm:h-64 bg-contain bg-no-repeat bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "/img/slide-1.png",
    },
    {
      imageSrc: "/img/slide-2.png",
    },
    {
      imageSrc: "/img/slide-3.png",
    },
    {
      imageSrc: "/img/slide-4.png",
    },
    {
      imageSrc: "/img/slide-5.png",
    },
    {
      imageSrc: "/img/slide-1.png",
    },
  ];

  return (
    <Container>
      <Content>
        <Hr />
        <SlideContainer>
          <PrevButton onClick={sliderRef?.slickPrev}>
            <ChevronLeftIcon tw="bg-[#333]" />
          </PrevButton>
          <CardSlider ref={setSliderRef} {...sliderSettings}>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardImage imageSrc={card.imageSrc} />
              </Card>
            ))}
          </CardSlider>
          <NextButton onClick={sliderRef?.slickNext}>
            <ChevronRightIcon />
          </NextButton>
        </SlideContainer>
      </Content>
    </Container>
  );
};
