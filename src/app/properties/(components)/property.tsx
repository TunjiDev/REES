"use client";

import React from "react";
import { Box, Flex, Text, Avatar, useMediaQuery } from "@/components/chakra-provider/index";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PropertiesType } from "@/types";

function Property({ initialData }: { initialData: PropertiesType }) {
  const router = useRouter();
  const [isLowerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex alignItems={"center"} gap={2} cursor={"pointer"} onClick={() => router.back()} my={"1rem"} px={"2rem"}>
        <Image src={"/icons/back-icon.svg"} alt="back icon" width={isLowerThan768 ? 20 : 30} height={5} />
        <Text fontSize={{ base: ".725rem", lg: "1rem" }}>Go Back</Text>
      </Flex>

      <>
        <Box
          bgImage={`url(${initialData?.image})`}
          bgSize={"cover"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          w={"100%"}
          textAlign={"center"}
          color={"#fff"}
          height={"50vh"}
          mb={"2rem"}
        ></Box>

        <Box px={"2rem"} color={"#4A60A1"}>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"} fontWeight={"semibold"}>
            {`${initialData?.name} - ${initialData.forSale ? "For Sale" : initialData.forRent ? "For Rent" : ""}`}
          </Text>

          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
            {initialData?.description}
          </Text>

          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
            Location: {initialData?.location}
          </Text>

          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
            Price: ₦ {initialData?.price.toLocaleString()}
          </Text>

          <Flex mb={"1rem"} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <Flex mr={"1rem"} alignItems={"center"}>
                <Text mr={"1rem"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                  Added By:
                </Text>
                <Avatar name={`${initialData?.firstName} ${initialData?.lastName}`} size={"sm"} />
              </Flex>
              <Text
                fontSize={{ base: ".725rem", lg: "1rem" }}
              >{`${initialData?.firstName} ${initialData?.lastName}`}</Text>
            </Flex>
          </Flex>
        </Box>
      </>
    </>
  );
}

export default Property;
