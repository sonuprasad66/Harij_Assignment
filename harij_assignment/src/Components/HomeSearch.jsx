import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

export const HomeSearch = () => {
  return (
    <>
      <Box w={"100%"} h={"80vh"} position={"relative"} mt={"75px"}>
        <Image
          w={"100%"}
          h={"100%"}
          src="https://spaalon.com/images/Headerfirst.png"
          alt="home"
        />
        <Box
          textAlign={"center"}
          position={"absolute"}
          top={"150px"}
          left={"250px"}
        >
          <Heading color={"white"} fontSize={"50px"}>
            Discover & Book
          </Heading>
          <Heading color={"white"} fontSize={"30px"}>
            Looking for Best Spa & Salon Near you ?
          </Heading>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            p={3}
            gap={2}
            bg={"white"}
            borderRadius={"5px"}
            mt={3}
          >
            <Flex
              alignItems={"center"}
              p={"0 15px"}
              borderRight={"1px solid gray"}
            >
              <Input
                variant="unstyled"
                w={["100%", "100%", "100%", "300px"]}
                placeholder="What are you looking for.."
                outline={"none"}
                border={"0px"}
              />
              <FiSearch />
            </Flex>
            <Flex alignItems={"center"}>
              <Input
                variant="unstyled"
                w={["100%", "100%", "100%", "300px"]}
                placeholder="Enter your location get started"
                outline={"none"}
                border={"0px"}
              />
              <CiLocationOn />
            </Flex>
            <Button bg={"#E94E1E"} color={"white"} _hover={"none"} w={"100px"}>
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
