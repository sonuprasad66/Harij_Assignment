import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Trending = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"70px"}
        bg={"#f4f4f4"}
      >
        <Box textAlign={"center"}>
          <Heading>What's Trending</Heading>
          <Text fontSize={"20px"}>Let's not wait for the "Perfect Look"</Text>
          <Flex gap={"30px"} mt={"40px"}>
            <Box p={"10px 40px"} bg={"white"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  w={"120px"}
                  h={"180px"}
                  borderTopRadius={"60px"}
                  borderBottomRadius={"60px"}
                  src="https://spaalon.com/images/serviceImg.png"
                  alt="trending"
                />
              </Box>
              <Heading fontSize={"20px"}>Facials & Cleanup</Heading>
            </Box>
            <Box p={"10px 40px"} bg={"white"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  w={"120px"}
                  h={"180px"}
                  borderTopRadius={"60px"}
                  borderBottomRadius={"60px"}
                  src="https://spaalon.com/images/serviceImg.png"
                  alt="trending"
                />
              </Box>
              <Heading fontSize={"20px"}>Facials & Cleanup</Heading>
            </Box>

            <Box p={"10px 40px"} bg={"white"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  w={"120px"}
                  h={"180px"}
                  borderTopRadius={"60px"}
                  borderBottomRadius={"60px"}
                  src="https://spaalon.com/images/serviceImg.png"
                  alt="trending"
                />
              </Box>
              <Heading fontSize={"20px"}>Facials & Cleanup</Heading>
            </Box>

            <Box p={"10px 40px"} bg={"white"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  w={"120px"}
                  h={"180px"}
                  borderTopRadius={"60px"}
                  borderBottomRadius={"60px"}
                  src="https://spaalon.com/images/serviceImg.png"
                  alt="trending"
                />
              </Box>
              <Heading fontSize={"20px"}>Facials & Cleanup</Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
