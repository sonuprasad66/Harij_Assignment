import { Box, Button, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const SpaceSalon = () => {
  return (
    <>
      <Box
        p={"50px 100px"}
        w={"100%"}
        h={"450px"}
        position={"relative"}
        bg={"#f4f4f4"}
      >
        <Image
          w={"100%"}
          h={"100%"}
          borderRadius={"5px"}
          src="https://spaalon.com/images/Headersecond.png"
          alt="home"
        />
        <Box position={"absolute"} top={"150px"} left={"150px"}>
          <Heading color={"white"} fontSize={"15px"}>
            SPAALON
          </Heading>
          <Heading color={"white"} fontSize={"30px"}>
            More than 3000 Spas & Salons
          </Heading>
          <Heading color={"white"} fontSize={"20px"}>
            Book an appointment now within seconds
          </Heading>
          <Button
            bg={"#E94E1E"}
            color={"white"}
            _hover={"none"}
            h={"30px"}
            w={"100px"}
            mt={4}
          >
            View All
          </Button>
        </Box>
      </Box>
    </>
  );
};
