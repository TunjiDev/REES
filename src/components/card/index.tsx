import React from "react";
import { Card, CardBody, Image as ChakraImage, Heading, Stack, Text } from "../chakra-provider";

interface PropType {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  price: string;
}

function index({ imgSrc, imgAlt, title, description, price }: PropType) {
  return (
    <Card maxW="sm">
      <CardBody>
        <ChakraImage src={imgSrc} alt={imgAlt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size={{ base: "sm", lg: "md" }} color={"#1E2640"} textAlign={"left"}>
            {title}
          </Heading>
          <Text textAlign={"left"} fontSize={{ base: ".725rem", lg: "1rem" }}>
            {description}
          </Text>
          <Text color={"#4A60A1"} textAlign={"left"} fontSize={{ base: ".725rem", lg: "1rem" }}>
            {price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default index;
