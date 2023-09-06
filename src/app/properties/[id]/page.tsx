"use client";

import React from "react";
import { Box, Flex, Text, Spinner, Avatar, useMediaQuery } from "@/components/chakra-provider/index";
import { useGetProperty } from "@/services/queries/properties";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

function Property() {
  const router = useRouter();
  const params = useParams();
  const [isLowerThan768] = useMediaQuery("(max-width: 768px)");
  const { data, isLoading, isSuccess } = useGetProperty(Number(params.id));

  return (
    <>
      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      )}

      <Flex alignItems={"center"} gap={2} cursor={"pointer"} onClick={() => router.back()} my={"1rem"} px={"2rem"}>
        <Image src={"/icons/back-icon.svg"} alt="back icon" width={isLowerThan768 ? 20 : 30} height={5} />
        <Text fontSize={{ base: ".725rem", lg: "1rem" }}>Go Back</Text>
      </Flex>

      {isSuccess && (
        <>
          <Box
            bgImage={`url(${data?.image})`}
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
              {`${data?.name} - ${data.forSale ? "For Sale" : data.forRent ? "For Rent" : ""}`}
            </Text>

            <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
              {data?.description}
            </Text>

            <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
              Location: {data?.location}
            </Text>

            <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
              Price: ₦{data?.price.toLocaleString()}
            </Text>

            <Flex mb={"1rem"} alignItems={"center"}>
              <Flex alignItems={"center"}>
                <Flex mr={"1rem"} alignItems={"center"}>
                  <Text mr={"1rem"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                    Added By:
                  </Text>
                  <Avatar name={`${data?.firstName} ${data?.lastName}`} size={"sm"} />
                </Flex>
                <Text fontSize={{ base: ".725rem", lg: "1rem" }}>{`${data?.firstName} ${data?.lastName}`}</Text>
              </Flex>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
}

export default Property;
