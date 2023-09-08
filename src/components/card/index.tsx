import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Image as ChakraImage, Heading, Stack, Text } from "../chakra-provider";

interface PropType {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  price: string;
  onClick?: () => void;
}

function index({ imgSrc, imgAlt, title, description, price, onClick }: PropType) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card maxW="sm" cursor={"pointer"} onClick={onClick} w={"full"} h={"full"}>
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
    </motion.div>
  );
}

export default index;
