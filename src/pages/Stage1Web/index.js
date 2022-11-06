import React from "react";

import { Column, Row, Img, Stack, Text, Button } from "components";

const Stage1WebPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start lg:p-[45px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
          <Column className="items-center justify-start w-[88%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start justify-end ml-[auto] w-[36%]">
                    <Img
                      src="https://pbs.twimg.com/profile_images/1415881671329550341/_f1hexTf_400x400.jpg"
                      className="3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] rounded-radius50 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]"
                      id="profile__img"
                      alt="profileimg"
                    />
                    <Stack className="bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[201px] xl:ml-[252px] 2xl:ml-[284px] 3xl:ml-[340px] outline outline-[0.5px] outline-bluegray_100 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius10 w-[10%]">
                      <Img
                        src="images/img_share.svg"
                        className="absolute 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] top-[0] w-[50%]"
                        alt="share"
                      />
                    </Stack>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[4px] w-[100%]">
                    <Text
                      className="mb-[1px] text-gray_900 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Boluwatife Israel
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]">
                <Column className="items-center justify-start shadow-bs w-[100%]">
                 <a href= "https://twitter.com/_skito/" target="_blank" id="twitter"> 
                 <Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Twitter Link
                  </Button> </a>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                  <a href="https://training.zuri.team/" target="_blank" id="btn_zuri"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Zuri Team
                  </Button></a>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                  <a href="https://books.zuri.team/" target="_blank" id="books"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Zuri Books
                  </Button></a>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                  <a href="https://books.zuri.team/" target="_blank" id="book_python"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Python Books
                  </Button></a>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                  <a href="https://background.zuri.team" target="_blank" id="pitch"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Background Check for Coders
                  </Button></a>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                  <a href="https://books.zuri.team/" target="_blank" id="book_design"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Design Books
                  </Button></a>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] shadow-bs w-[100%]">
                <a href="/contact" id="contact"><Button className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                    Contact
                  </Button></a>
                </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[93%]">
            <Row className="items-center justify-center w-[6%]">
              <Img
                src="images/img_slack.svg"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="slack"
              />
              <Img
                src="images/img_settings.svg"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="settings"
              />
            </Row>
          </Column>
        </Column>
        <Column className="bg-white_A700 items-center justify-start lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[100%]">
          <Column className="items-center justify-start w-[90%]">
            <Row className="border border-bluegray_50 border-solid items-start justify-between lg:pt-[22px] xl:pt-[28px] 2xl:pt-[32px] 3xl:pt-[38px] w-[100%]">
              <Img
                src="images/img_zuriinternship.svg"
                className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[15%]"
                alt="ZuriInternship"
              />
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_500 w-[auto]"
                as="h2"
                variant="h2"
              >
                HNG Internship 9 Frontend Task
              </Text>
              <Img
                src="images/img_i4g.png"
                className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[11%]"
                alt="I4G"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Stage1WebPage;
