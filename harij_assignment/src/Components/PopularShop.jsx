import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const PopularShop = () => {
  const [data, setData] = useState();

  const getData = () => {
    return axios
      .get("https://spaalon.harij.in/api/shop/PopularShop")
      .then((res) => {
        setData(res.data.popularShop);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={"100%"} p={"50px 100px"}>
        <Heading>Popular Shop</Heading>
        <Text fontSize={"20px"}>
          Come experience the best haircut and color services
        </Text>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" mt={7}>
          {data &&
            data?.map((item) => (
              <>
                <Flex
                  height="150px"
                  border={"1px solid grey"}
                  borderRadius={"5px"}
                >
                  <Image src={item.image_url} alt="p" />
                  <Box marginLeft={4}>
                    <Heading fontSize={"25px"}>{item.shop_name}</Heading>
                    <Text color={"grey"}>{item.description}</Text>
                    {/* <Flex>
                        <Text>Latitude:{item.latitude}</Text>
                        <Text>Longitude:{item.longitude}</Text>
                      </Flex> */}

                    <Text>Shop Discount: {item.shop_discount}</Text>
                    <Text>Shop Rating: {item.shop_rating}</Text>
                    <Text>Rating Count: {item.rating_count}</Text>
                  </Box>
                </Flex>
              </>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
