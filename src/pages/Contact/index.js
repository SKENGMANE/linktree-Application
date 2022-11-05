import React from "react";

import { Column, Text, Row, Input, TextArea, Img, Button } from "components";

const ContactPage = () => {
    return (
        <>
            <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
                <Column className="bg-white_A700 items-center justify-start lg:p-[110px] xl:p-[138px] 2xl:p-[156px] 3xl:p-[187px] w-[100%]">
                    <Column className="items-center justify-start lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] w-[64%]">
                        <Column className="items-center justify-start w-[100%]">
                            <Column className="justify-end pr-[3px] py-[3px] w-[100%]">
                                <Text
                                    className="mt-[1px] text-gray_900 tracking-ls1 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                >
                                    Contact Me
                                </Text>
                                <Text
                                    className="lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-bluegray_700 w-[auto]"
                                    as="h2"
                                    variant="h2"
                                >
                                    Hi there, contact me to ask me about anything you have in
                                    mind.
                                </Text>
                            </Column>
                            <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
                                <Column className="items-center justify-start w-[100%]">
                                    <Row className="items-start justify-between pt-[2px] w-[100%]">
                                        <Column className="justify-start w-[48%]">
                                            <Text
                                                className="text-bluegray_800 w-[auto]"
                                                as="h4"
                                                variant="h4"
                                            >
                                                First name
                                            </Text>
                                            <Input
                                                className="placeholder:text-bluegray_500 Input"
                                                wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                                                type="text"
                                                name="Input"
                                                placeholder="Enter your first name"
                                            ></Input>
                                        </Column>
                                        <Column className="justify-start mt-[1px] w-[48%]">
                                            <Text
                                                className="text-bluegray_800 w-[auto]"
                                                as="h4"
                                                variant="h4"
                                            >
                                                Last name
                                            </Text>
                                            <Input
                                                className="placeholder:text-bluegray_500 Input"
                                                wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                                                type="text"
                                                name="Input One"
                                                placeholder="Enter your last name"
                                            ></Input>
                                        </Column>
                                    </Row>
                                    <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                                        <Text
                                            className="text-bluegray_800 w-[auto]"
                                            as="h4"
                                            variant="h4"
                                        >
                                            Email
                                        </Text>
                                        <Input
                                            className="placeholder:text-bluegray_500 Input"
                                            wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                                            type="email"
                                            name="email"
                                            placeholder="yourname@email.com"
                                        ></Input>
                                    </Column>
                                    <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                                        <Text
                                            className="text-bluegray_800 w-[auto]"
                                            as="h4"
                                            variant="h4"
                                        >
                                            Message
                                        </Text>
                                        <TextArea
                                            className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                                            name="Input Two"
                                            placeholder="Send me a message and I'll reply you as soon as possible..."
                                            id="message"
                                        ></TextArea>
                                    </Column>
                                    <Row className="items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                                        <Img
                                            src="images/img_input.svg"
                                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[3%]"
                                            alt="Input Three"
                                        />
                                        <Column className="justify-end lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[96%]">
                                            <Text
                                                className="not-italic text-bluegray_700 w-[auto]"
                                                as="h3"
                                                variant="h3"
                                            >
                                                {
                                                    "You agree to providing your data to {name} who may contact you."
                                                }
                                            </Text>
                                        </Column>
                                    </Row>
                                </Column>
                                <Button className="font-semibold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]" id="btn__submit">
                                    Send message
                                </Button>
                            </Column>
                        </Column>
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
                                as="h3"
                                variant="h3"
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

export default ContactPage;
