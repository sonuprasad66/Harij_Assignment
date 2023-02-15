import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SlHandbag } from "react-icons/sl";
import { BsBoxArrowInRight } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <Flex
        w={"100%"}
        p={"20px 130px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
        top={"0px"}
        zIndex={1}
        bg={"white"}
      >
        <Box>
          <Image
            w={"170px"}
            h={"30px"}
            src="https://spaalon.com/images/SpaalonLogoRed.jpg"
            alt="logo"
          />
        </Box>
        <Flex gap={10}>
          <Text fontWeight={600} fontSize={"18px"} cursor={"pointer"}>
            Hair
          </Text>
          <Text fontWeight={600} fontSize={"18px"} cursor={"pointer"}>
            Body
          </Text>
          <Text fontWeight={600} fontSize={"18px"} cursor={"pointer"}>
            Spa
          </Text>
          <Text fontWeight={600} fontSize={"18px"} cursor={"pointer"}>
            Nails
          </Text>
          <Text fontWeight={600} fontSize={"18px"} cursor={"pointer"}>
            Face
          </Text>
          <BsBoxArrowInRight fontSize={"20px"} />
          <Box position={"relative"} cursor={"pointer"}>
            <SlHandbag fontSize={"20px"} />

            <Flex
              height="25px"
              width="24px"
              borderRadius="25px"
              padding="5px"
              backgroundColor="red"
              display="flex"
              alignItems="center"
              color={"white"}
              justifyContent="center"
              position="absolute"
              top="-13px"
              right="-14px"
            >
              0
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
