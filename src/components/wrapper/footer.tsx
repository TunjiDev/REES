import React from "react";
import { Box, Flex, Text } from "@/components/chakra-provider/index";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <Box as="footer" borderTop={"2px solid #4A60A1"} py={"2rem"} px={"2rem"}>
      <Flex
        gap={{ base: 10, lg: 20 }}
        justifyContent={"space-evenly"}
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "normal" }}
      >
        <Box w={{ base: "full", lg: "20%" }}>
          <Box mb={"1rem"}>
            <Link href={"/"}>
              <Image src={"/images/logo.png"} alt={"logo"} width={100} height={100} />
            </Link>
          </Box>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"} as="h3" fontWeight={"bold"}>
            Contact Us
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"} color={"#889099"}>
            Call : +234 090 5357 2653
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"} color={"#889099"}>
            Shodipe Street, Alagomeji Yaba, Lagos Nigeria
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"}>
            Email: adetunjiigbatayo@gmail.com
          </Text>

          <Flex>
            <Box mr={"1rem"} borderRadius={".4rem"} bg={"#EDEFF6"} border={"1px solid #4A60A1"} p={".5rem"}>
              <Link href="https://web.facebook.com/adetunji.igbatayo/" target="_blank">
                <Image src={"/icons/faceboook-icon.svg"} alt={"facebook"} width={20} height={20} />
              </Link>
            </Box>

            <Box mr={"1rem"} borderRadius={".4rem"} bg={"#EDEFF6"} border={"1px solid #4A60A1"} p={".5rem"}>
              <Link href="https://twitter.com/El_directo_" target="_blank">
                <Image src={"/icons/twitter-icon.svg"} alt={"twitter"} width={20} height={20} />
              </Link>
            </Box>

            <Box mr={"1rem"} borderRadius={".4rem"} bg={"#EDEFF6"} border={"1px solid #4A60A1"} p={".5rem"}>
              <Link href="https://www.linkedin.com/in/adetunji-igbatayo-0a059416b" target="_blank">
                <Image src={"/icons/linkedin-icon.svg"} alt={"linkedIn"} width={20} height={20} />
              </Link>
            </Box>

            <Box mr={"1rem"} borderRadius={".4rem"} bg={"#EDEFF6"} border={"1px solid #4A60A1"} p={".5rem"}>
              <Link href="https://github.com/TunjiDev" target="_blank">
                <Image src={"/icons/github-icon.svg"} alt={"github"} width={20} height={20} />
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"2rem"} as={"h3"} fontWeight={"bold"}>
            Features
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/"}>Home</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/contact-us"}>Contact Us</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/"}>Rent</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/"}>Sell</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/"}>Buy</Link>
          </Text>
        </Box>

        <Box>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"2rem"} as={"h3"} fontWeight={"bold"}>
            Company
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/about-us"}>About Us</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/properties"}>Properties</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/contact-us"}>Contact Us</Link>
          </Text>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }} color={"#889099"} mb={"1rem"}>
            <Link href={"/gallery"}>Gallery</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
