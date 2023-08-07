import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import LogoImage from "images/logo-light.svg";
import { ReactComponent as FacebookIcon } from "../../images/img/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/img/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/img/youtube-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/img/linked.svg";
import FooterAppImageSrc1 from "../../images/img/footer-app-img1.png";
import FooterAppImageSrc2 from "../../images/img/footer-app-img2.png";
import FooterAppImageSrc3 from "../../images/img/footer-app-img3.png";
import { Container } from "./StrokeText";

// const Container = tw.div`relative bg-[#292738] text-gray-100 -mb-8 px-8`;
const Content = tw.div`w-[80%] mx-auto pt-16 pb-8`;
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/6 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/6`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 bg-[transparent] text-gray-900 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-[24px] h-[24px] hover:text-[#330000] `}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`;
const CopyrightNotice = tw.div``;

const Divider = tw.div`my-[24px] border-b-2 border-gray-800`;
export default () => {
  return (
    <Container tw="bg-[#292738] text-gray-100">
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoText>MoveBudi</LogoText>
            </LogoContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Services</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Internet & TV</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Moving</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Utilities</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Forward your mail</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Insurance</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Packing supplies</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>For partners</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Partnership</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Multifamily</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Residential real estate</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Industry news</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Client stories</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Resources & research</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Info</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Carreers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Press</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Contact us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Help center</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Resources</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Packing guides</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Moving tips</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Moving checklist</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Downloaded the App</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <img src={FooterAppImageSrc1} alt="footer app 1" />
              </LinkListItem>
              <LinkListItem>
                <img src={FooterAppImageSrc2} alt="footer app 1" />
              </LinkListItem>
              <LinkListItem tw="pt-[89px]">
                <img src={FooterAppImageSrc3} alt="footer app 1" />
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>
            Copyright &copy; 2023 Updater | Terms & Privacy
          </CopyrightNotice>
          {/* <CompanyInfo>An Internet Company.</CompanyInfo> */}
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com">
              <LinkedInIcon />
            </SocialLink>
          </SocialLinksContainer>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
