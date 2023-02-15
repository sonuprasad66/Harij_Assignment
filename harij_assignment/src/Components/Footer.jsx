import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <>
      <Box w={"100%"} bg={"#121921"} p={"60px 100px"}>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing="40px"
          borderBottom={"1px solid grey"}
          paddingBottom={"50px"}
        >
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              QUICK LINKS
            </Heading>
            <Text mt={3} color={"grey"}>
              About
            </Text>
            <Text mt={1} color={"grey"}>
              Privacy Popcy
            </Text>
            <Text mt={1} color={"grey"}>
              Terms and Condition
            </Text>
            <Text mt={1} color={"grey"}>
              List Your Business
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              CATEGORIES
            </Heading>
            <Text mt={5} color={"grey"}>
              Top Categories
            </Text>
            <Text mt={1} color={"grey"}>
              Popular Spaa & Salon
            </Text>
            <Text mt={1} color={"grey"}>
              Best Deals
            </Text>
            <Text mt={1} color={"grey"}>
              Latest Submission
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              CONTACTS
            </Heading>
            <Text
              mt={5}
              color={"white"}
              className="fa-solid fa-location-dot"
            ></Text>
            <Text mt={1} color={"grey"}>
              Connaught Place,New Delhi,
            </Text>
            <Text mt={1} color={"grey"}>
              India
            </Text>
            <Text mt={1} color={"grey"}>
              +91 9999-999-999
            </Text>
            <Text mt={1} color={"grey"}>
              info@spaalon.com
            </Text>
          </Box>
          <Box>
            <Heading color={"white"} fontSize={"20px"}>
              KEEP IN TOUCH
            </Heading>
            <Flex mt={5}>
              <input
                style={{
                  outline: "none",
                  border: "0px",
                  width: "250px",
                  heigth: "40px",
                  paddingLeft: "10px",
                }}
                placeholder="Your Email"
              />
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                w={"50px"}
                h={"40px"}
                color={"white"}
                bg={"#E94E1E"}
                cursor={"pointer"}
              >
                <ChevronRightIcon />
              </Box>
            </Flex>
            <Box mt={5}>
              <Heading color={"white"} fontSize={"20px"}>
                Follow Us
              </Heading>
              <Flex gap={1} mt={2}>
                <Image
                  w={"40px"}
                  h={"40px"}
                  src="https://spaalon.com/images/twitter_icon.svg"
                  alt="twitter"
                />
                <Image
                  w={"40px"}
                  h={"40px"}
                  src="https://spaalon.com/images/facebook_icon.svg"
                  alt="facebook"
                />
                <Image
                  w={"40px"}
                  h={"40px"}
                  src="https://spaalon.com/images/instagram_icon.svg"
                  alt="instagram"
                />
                <Image
                  w={"40px"}
                  h={"40px"}
                  src="https://spaalon.com/images/youtube_icon.svg"
                  alt="youtube"
                />
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
        <Text color={"white"} textAlign={"right"} p={4}>
          © 2020 Spaalon
        </Text>
      </Box>
    </>
  );
};
