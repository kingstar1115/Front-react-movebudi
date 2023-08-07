import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Pseudo from "../../images/img/pseudo.png";
import { ReactComponent as ArrorLeftIcon } from "feather-icons/dist/icons/arrow-right.svg";
import { ReactComponent as CheckboxIcon } from "../../images/img/chek-icon.svg";
import StrokeTextObject, {
  StrokeTitle,
  RelativeContianer,
  SubTitle,
  SubParagraph,
  Container,
  CustomizeButton,
} from "./StrokeText";
import AboutImage2 from "../../images/img/about-2-new.png";
import AboutImage3 from "../../images/img/about-3.png";
import AboutImage4 from "../../images/img/about-4.png";

const FeatureIcon = styled(CheckboxIcon)`
  ${tw`w-5 h-5 text-primary-500 `}
`;

const ServiceMainContainer = tw.div`flex flex-col lg:flex-row justify-center lg:py-[50px] lg:flex-row  `;
const ServiceTitle = tw.div`flex flex-row mx-auto pt-[120px] justify-center  pb-[40px]`;
const MainContainer = tw.div`w-[40%]`;

const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 rounded-full p-[24px] bg-[transparent]`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const ServiceItemContainer = styled.div((css) => [
  `margin-left: "${css}"`,
  tw`flex flex-row lg:w-[80%] md:w-1/2 gap-[20px] my-[25px] bg-[#292738] p-[25px] items-center rounded-[16px]`,
]);

const services = [
  {
    imageSrc: "/img/about-2-1.png",
    title: "Find a House cleaner",
    detail: "Sed perspiciatis unde omnis natus error voluptatem",
    left: tw`ml-[50px]`,
  },
  {
    imageSrc: "/img/about-2-2.png",
    title: "Find a House cleaner",
    detail: "Sed perspiciatis unde omnis natus error voluptatem",
    left: tw`ml-[100px]`,
  },
  {
    imageSrc: "/img/about-2-3.png",
    title: "Find a House cleaner",
    detail: "Sed perspiciatis unde omnis natus error voluptatem",
    left: tw`ml-[150px]`,
  },
  {
    imageSrc: "/img/about-2-4.png",
    title: "Find a House cleaner",
    detail: "Sed perspiciatis unde omnis natus error voluptatem",
    left: tw`ml-[20px]`,
  },
  {
    imageSrc: "/img/about-2-5.png",
    title: "Find a House cleaner",
    detail: "Sed perspiciatis unde omnis natus error voluptatem",
    left: tw`-ml-[180px]`,
  },
];

const featureList = [
  "Single App",
  "Cheaper prices",
  "Pool Services",
  "Wifi Services",
  "Home Shifting Services",
  "Secured",
];

const featureList2 = [
  {
    title: "Business Growth",
    description: "Sed perspiciatis unde omnis natus error voluptatem",
    imgSrc: "/img/feature-1.png",
  },
  {
    title: "Targeted Customers",
    description: "Sed perspiciatis unde omnis natus error voluptatem",
    imgSrc: "/img/feature-2.png",
  },
  {
    title: "Revenue Growth",
    description: "Sed perspiciatis unde omnis natus error voluptatem",
    imgSrc: "/img/feature-3.png",
  },
  {
    title: "24/7 Support",
    description: "Sed perspiciatis unde omnis natus error voluptatem",
    imgSrc: "/img/feature-1.png",
  },
];

function FeatureItem(props) {
  return (
    <>
      <div tw="py-[20px] px-[20px] flex rounded-lg font-kumbh gap-[20px] bg-[#292738] items-center">
        <div tw="rounded-full bg-gradient-to-l from-[#186EF2] to-[#6D18EF] p-[8px]">
          <FeatureIcon />
        </div>
        {props.text}
      </div>
    </>
  );
}
function FeatureItem2(props) {
  return (
    <>
      <div tw="py-[30px] flex md:flex-row rounded-lg font-kumbh gap-[20px] items-center">
        <img src={props.imgSrc} />
        <div tw="flex flex-col w-[250px]">
          <div tw="font-jost text-[24px]">{props.title}</div>
          <div tw="font-kumbh text-[16px] text-[#67687A]">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}

function Service(props) {
  return (
    <>
      <ServiceItemContainer css={props.left}>
        <img src={props.imageSrc} alt="service detail" />

        <div tw="flex flex-col">
          <span tw="text-white text-[32px] leading-[40px]">{props.title}</span>
          <span tw="text-white text-[22px] leading-[40px]">{props.detail}</span>
        </div>
        <ControlButton tw="bg-[#232331]">
          <ArrorLeftIcon />
        </ControlButton>
      </ServiceItemContainer>
    </>
  );
}

function MainSection() {
  return (
    <>
      <ServiceMainContainer>
        <div tw="mt-[80px]">
          <img src={AboutImage2} alt="service img" />
        </div>
        <div tw="flex flex-col gap-[40px]">
          {services.map((item, idx) => (
            <Service key={idx} {...item} />
          ))}
        </div>
      </ServiceMainContainer>
    </>
  );
}

function TitleSection() {
  return (
    <>
      <ServiceTitle>
        <div>
          <StrokeTextObject
            head="Services"
            title="Conquer your move with the 
              Movebudi app"
            titleCss={tw`-mt-20 z-[10] text-center`}
            subTitleCss={tw`text-center w-[60%] mx-auto`}
            imgCss={tw`mx-auto absolute left-[50%] z-50`}
          />
        </div>
      </ServiceTitle>
    </>
  );
}

export function SubSection1() {
  return (
    <>
      <Container>
        <div tw="w-[90%] mx-auto">
          <ServiceMainContainer tw="justify-around ">
            <RelativeContianer tw="lg:w-[50%]">
              <StrokeTextObject
                head="Move"
                title="Settle in sooner with a single app at much cheaper than others"
                titleCss={tw`-mt-20 -ml-[40px] lg:text-[210px]`}
                subTitleCss={tw`lg:w-[70%]  lg:text-[60px]`}
                imgCss={tw`absolute z-50`}
              />
              <SubParagraph tw="py-[48px] lg:w-[90%]">
                Moving is messy, but it doesn’t have to be. Easily power through
                your moving tasks like forwarding mail, transferring utilities,
                and securing insurance. Our deep integrations also allow you to
                shop
              </SubParagraph>
              <div tw="flex flex-wrap gap-[20px] lg:w-[80%]">
                {featureList.map((item, key) => (
                  <FeatureItem text={item} key={key} />
                ))}
              </div>
            </RelativeContianer>
            <div>
              <img src={AboutImage3} tw="w-[100%]" />
            </div>
          </ServiceMainContainer>
        </div>
      </Container>
    </>
  );
}

export function SubSection2() {
  return (
    <>
      <Container>
        <div tw="w-[90%] mx-auto">
          <ServiceMainContainer tw="justify-around">
            <div>
              <img src={AboutImage4} tw="w-5/6" />
            </div>
            <RelativeContianer tw="lg:w-[60%] w-[100%] relative">
              <div>
                <StrokeTextObject
                  head="Move"
                  title="Became Our Partner & Unleash your business growth"
                  titleCss={tw`-mt-20 -ml-[20px] lg:text-[210px]`}
                  subTitleCss={tw`w-[90%] lg:text-[60px]`}
                  imgCss={tw`absolute z-50 -top-[10px]`}
                />
              </div>
              <div tw="flex flex-wrap gap-[20px]">
                {featureList2.map((item, idx) => (
                  <FeatureItem2 key={idx} {...item} />
                ))}
              </div>

              <CustomizeButton tw="my-[50px] drop-shadow-[0_35px_35px_rgba(1,1,1,1)] bg-[#6DDCFF] p-[16px] rounded-lg text-white font-sans text-[24px] text-[700] leading-[32px]">
                Register As Partner
              </CustomizeButton>
            </RelativeContianer>
          </ServiceMainContainer>
        </div>
      </Container>
    </>
  );
}
export default () => {
  return (
    <>
      <Container>
        <div tw="w-[90%] mx-auto">
          <TitleSection />
          <MainSection />
        </div>
      </Container>
    </>
  );
};
