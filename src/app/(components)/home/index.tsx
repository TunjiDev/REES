"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Text, Heading, Flex } from "@/components/chakra-provider/index";
import theme from "@/utils/theme";
import SellDisplay from "../sell-or-rent-display";
import FeaturedProperties from "../featured-properties";
import RentProperties from "../rent-properties";
import SaleProperties from "../sale-properties";

export default function Home() {
  const [openSellOrRentModal, setOpenSellOrRentModal] = useState(false);

  return (
    <>
      <Box
        as="section"
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        textAlign={"center"}
        color={"#fff"}
        py={{ base: "1rem", lg: "5rem" }}
      >
        <Heading mb={"2rem"} fontSize={{ base: "1.25rem", lg: "1.875rem" }}>
          Find Your Dream Home
        </Heading>
        <Text fontSize={{ base: ".725rem", lg: "1rem" }}>
          Begin Your Journey of Discovery to Find Your Dream Home, Where Every Brick Tells a Story, and Every Window
          Frames a Dream, We&apos;re Here to Make Your Home Aspirations a Reality.
        </Text>
      </Box>

      <Box as="section" py={"2rem"} textAlign={"center"} color={theme.colors.typography.dark}>
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} color={theme.colors.typography.dark} mb={"2rem"}>
          Featured Properties
        </Heading>

        <Text mb={"3rem"} color={theme.colors.typography.gray} fontSize={{ base: ".725rem", lg: "1rem" }}>
          Uncover the Best in Real Estate with Our Featured Properties. These Homes Represent the Finest in
          Architecture, Design, and Lifestyle, and They&apos;re Ready to Welcome You Home.
        </Text>

        <FeaturedProperties />
      </Box>

      <Box as="section" bg={"#EDEFF6"} py={"2rem"} textAlign={"center"} color={theme.colors.typography.dark}>
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} color={theme.colors.typography.dark} mb={"2rem"}>
          Purchase, Rent or Sell a Property
        </Heading>

        <Text mb={"3rem"} color={theme.colors.typography.gray} fontSize={{ base: ".725rem", lg: "1rem" }}>
          Your Property Journey Starts Here. Buy, Rent, or Sell with Confidence, Knowing That Our Expertise and
          Dedication Will Guide You Every Step of the Way.
        </Text>

        <Flex
          gap={{ base: 10, lg: 20 }}
          w={{ base: "90%", lg: "50%" }}
          m={"auto"}
          direction={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "normal" }}
          justifyContent={"center"}
        >
          <Box
            borderRadius={".5rem"}
            cursor={"pointer"}
            boxShadow={"2xl"}
            bg={"#fff"}
            py={"1rem"}
            px={"1rem"}
            w={{ base: "full", sm: "80%" }}
            onClick={() => setOpenSellOrRentModal(true)}
          >
            <Box mb={"1rem"}>
              <Image src={"/icons/sell-icon.svg"} alt={"sell"} width={78} height={78} />
            </Box>
            <Text fontWeight={"bold"} fontSize={{ base: "1rem", lg: "1.5rem" }} mb={"1rem"} textAlign={"left"}>
              Rent or Sell Your Home
            </Text>

            <Text color={theme.colors.typography.gray} textAlign={"left"} fontSize={{ base: ".725rem", lg: "1rem" }}>
              We do a free evaluation to be sure you want to start selling.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box as="section" py={"2rem"} mb={"2rem"} textAlign={"center"} color={theme.colors.typography.dark}>
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} color={theme.colors.typography.dark} mb={"2rem"}>
          Latest Properties for Rent
        </Heading>

        <Text mb={"3rem"} color={theme.colors.typography.gray} fontSize={{ base: ".725rem", lg: "1rem" }}>
          Explore Our Newest Additions - the Latest Properties for Rent. Each One Offers a Unique Living Experience, and
          We&apos;re Here to Help You Find the Perfect Rental.
        </Text>

        <RentProperties />
      </Box>

      <Box as="section" py={"2rem"} textAlign={"center"} color={theme.colors.typography.dark}>
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} color={theme.colors.typography.dark} mb={"2rem"}>
          Latest Properties for Sale
        </Heading>

        <Text mb={"3rem"} color={theme.colors.typography.gray} fontSize={{ base: ".725rem", lg: "1rem" }}>
          Explore Our Newest Additions - the Latest Properties for Sale. Each One Offers a Unique Living Experience, and
          We&apos;re Here to Help You Find the Home.
        </Text>

        <SaleProperties />
      </Box>

      {openSellOrRentModal && <SellDisplay openModal={openSellOrRentModal} setOpenModal={setOpenSellOrRentModal} />}
    </>
  );
}
