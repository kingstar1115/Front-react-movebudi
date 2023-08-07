import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-lin
import { Container } from "../StrokeText";
// import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "../../../images/img/feature-icon-1.png";
import ShieldIconImage from "../../../images/img/feature-icon-2.png";
import CustomizeIconImage from "../../../images/img/feature-icon-3.png";

const ThreeColumnContainer = styled.div`
  ${tw`lg:w-[80%] flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-between mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-[30%] max-w-xs lg:max-w-[50%]`}
`;

const CardContainer = styled.div`
  ${tw`bg-[#292738] p-[52px] py-[60px] rounded-[18px] transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4`}
  .imageContainer {
    ${tw`text-center p-8 bg-[transparent]`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .imageContainer2 {
    ${tw`p-8 bg-[transparent]`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`font-jost text-[60px] text-white leading-[96px] text-[700]`}
  }

  .symbol {
    ${tw`font-saira text-[60px] text-white leading-[96px] text-[700] -mt-4 `}
  }

  .description {
    ${tw`text-[32px] font-medium text-[500] leading-[42px] text-white`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
      url: "/",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "/",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Customize Description",
      url: "/",
    },
  ],
  imageContainerCss = null,
  imageCss = null,
}) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <CardContainer tw="-skew-y-6">
              <Card href={card.url} tw="skew-y-6">
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="card" css={imageCss} />
                </span>
                <div tw="flex justify-center gap-4">
                  <span className="title">{card.title}</span>
                  <span className="symbol">+</span>
                </div>
                <p className="description">{card.description}</p>
              </Card>
            </CardContainer>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};

export function ThreeColSection2({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "All your moving tasks in one place",
      description: [
        "From booking movers to forwarding your mail: stay on top of everything you need to do in one app.",
        "Receive helpful moving tips and timely reminders.",
      ],
    },
    {
      imageSrc: SupportIconImage,
      title: "Personalized, human $ AI assistance",
      description: [
        "Yes, you can talk to a human! Updater blends the best of in-person service with intuitive technology.",
        "Our experienced team is on hand to assist you when you need it.",
        "Let AI Help make your life easy peasy.",
      ],
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Shop and compare with confidence",
      description: [
        "Compare options from the nation's top providers of internet, TV, insurance and even movers.",
        "Make the selection that's right for you without ever having to leave the app.",
      ],
    },
  ],
  imageCss = null,
  imageContainerCss = null,
}) {
  return (
    <>
      <Container>
        <ThreeColumnContainer tw="w-[90%]">
          {cards.map((card, i) => (
            <Column tw="lg:w-[32%]" key={i}>
              <CardContainer tw="p-0 p-[60px] h-[630px]">
                <Card href={card.url}>
                  <span className="imageContainer2" css={imageContainerCss}>
                    <img src={card.imageSrc} alt="" css={imageCss} />
                  </span>
                  <div tw="text-[30px] text-left leading-[40px] -tracking-[0.6px] text-[600] font-sans text-white">
                    {card.title}
                  </div>
                  <ul tw="list-disc">
                    {card.description.map((items, idx) => (
                      <li
                        key={idx}
                        tw="text-white text-left text-[20px] text-[400] leading-[30px] pt-[20px]"
                      >
                        {items}
                      </li>
                    ))}
                  </ul>
                </Card>
              </CardContainer>
            </Column>
          ))}
        </ThreeColumnContainer>
      </Container>
    </>
  );
}
