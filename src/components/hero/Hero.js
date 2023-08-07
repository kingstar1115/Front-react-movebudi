import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import DesignIllustration from "../../images/img/about-1.png";
import Sphere from "../../images/img/about-1-1.png";
import { Container } from "../../components/customize/StrokeText.js";
import ReactStars from "react-rating-stars-component";

const ImgContainer = styled(Container)`
  background-color: #000b27;
  background-image: url("/img/background2.png");
  background-repeat: no-repeat;
`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-2/3 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Heading = styled.h1`
  ${tw`font-bold text-[75px] font-sans text-white`}
`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-white`;
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full text-white font-medium focus:outline-none transition duration-300 bg-[transparent] focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
const CustomersLogoStrip = styled.div`
  ${tw`mt-8 lg:mt-5`}
  p {
    ${tw`text-sm lg:text-xs tracking-wider text-white`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;
const RatingTitle = tw.p`leading-[30px] text-[18px] text-[400]`;

export default () => {
  const [rating, setRating] = useState(4);
  function changeRating(newRating) {
    setRating(newRating);
    console.log(newRating);
  }
  return (
    <>
      <ImgContainer tw="py-0">
        <TwoColumn>
          <LeftColumn>
            <div
              tw="w-[600px] mt-[115px] pt-[20px]"
              style={{
                backgroundImage: "url(/img/about-1-2.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
              }}
            >
              <Heading>
                The Smartest <br />
                Move you’ll ever <br />
                make for you.
              </Heading>
            </div>
            <Paragraph>
              MoveBudii all take the stress out of an already stressfull
              situation using cutting edge technology to facilitiate life
              changes upon moving to your new location
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Go</button>
            </Actions>
            <CustomersLogoStrip>
              <RatingTitle>Trusted by 50k+ users</RatingTitle>
              <div tw="flex flex-row gap-[8px] items-center">
                <ReactStars
                  count={5}
                  size={24}
                  onChange={changeRating}
                  color="gray"
                  a11y={true}
                  edit={true}
                  isHalf="true"
                  value={rating}
                  activeColor="#7F60F9"
                />
                <span tw="text-white text-[16px] text-[400] leading-[24px]">
                  {rating}/5
                </span>

                <span tw="text-[16px] text-[400] leading-[24px] text-[#333]">
                  (14k Reviews)
                </span>
              </div>
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
            <div>
              <img tw="absolute end-0 top-[150px]" src={Sphere} />
            </div>
          </RightColumn>
        </TwoColumn>
      </ImgContainer>
    </>
  );
};
