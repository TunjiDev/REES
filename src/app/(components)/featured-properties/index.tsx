"use client";

import React from "react";
import { Box, Text, Flex, Image, GridItem, Grid, Spinner } from "@/components/chakra-provider/index";
import { useGetFeaturedProperties } from "@/services/queries/properties";
import theme from "@/utils/theme";

function Index() {
  const {
    data: featuredProperties,
    isLoading: featPropsLoading,
    isSuccess: featPropsSuccess,
  } = useGetFeaturedProperties();

  return (
    <Box w={{ base: "90%", lg: "80%" }} m={"auto"}>
      {featPropsLoading ? (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      ) : featPropsSuccess ? (
        <Grid
          h="45rem"
          templateRows={{ base: "repeat(20, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
          {featuredProperties.map((property: any, index: number) => (
            <GridItem
              colSpan={{ base: 6, md: index < 3 ? 2 : 3 }}
              rowSpan={{ base: 4, md: 1 }}
              bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${property.image})`}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              color={"#fff"}
              borderRadius={"1rem"}
              pt={"1rem"}
              pl={"1rem"}
              key={property.id}
            >
              <Text textAlign={"left"} w={{ base: "100%", lg: "40%" }} fontSize={{ base: ".725rem", lg: "1rem" }}>
                {property.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text
          textAlign={"center"}
          mb={"3rem"}
          color={theme.colors.typography.gray}
          fontSize={{ base: ".725rem", lg: "1rem" }}
        >
          No Featured Properties available
        </Text>
      )}
    </Box>
  );
}

export default Index;
