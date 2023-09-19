"use client";

import React from "react";
import { Text, Flex, Spinner } from "@/components/chakra-provider/index";
import { useGetRentProperties } from "@/services/queries/properties";
import Card from "@/components/card";
import theme from "@/utils/theme";

function Index() {
  const { data: rentalProperties, isLoading: rentPropsLoading, isSuccess: rentPropsSuccess } = useGetRentProperties();

  return (
    <Flex gap={10} justifyContent={"center"} flexWrap={"wrap"}>
      {rentPropsLoading ? (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      ) : rentPropsSuccess ? (
        <>
          {rentalProperties.map((property: any) => (
            <Card
              imgSrc={property.image}
              imgAlt={property.name}
              title={property.name}
              description={property.description}
              price={`₦ ${property.price.toLocaleString()}`}
              key={property.id}
            />
          ))}
        </>
      ) : (
        <Text
          textAlign={"center"}
          mb={"3rem"}
          color={theme.colors.typography.gray}
          fontSize={{ base: ".725rem", lg: "1rem" }}
        >
          No Properties available for rent.
        </Text>
      )}
    </Flex>
  );
}

export default Index;
