"use client";

import React from "react";
import { Text, Flex, Spinner } from "@/components/chakra-provider/index";
import { useGetSaleProperties } from "@/services/queries/properties";
import Card from "@/components/card";
import theme from "@/utils/theme";

function Index() {
  const { data: saleProperties, isLoading: salePropsLoading, isSuccess: salePropsSuccess } = useGetSaleProperties();

  return (
    <Flex gap={10} justifyContent={"center"} flexWrap={"wrap"}>
      {salePropsLoading ? (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      ) : salePropsSuccess ? (
        <>
          {saleProperties.map((property: any) => (
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
          No Properties available for sale.
        </Text>
      )}
    </Flex>
  );
}

export default Index;
