"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@/components/chakra-provider/index";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/footer.module.css";

function Footer() {
  const [bottom, setBottom] = useState(false);

  const toTop = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 800) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toTop);

      return () => {
        window.removeEventListener("scroll", toTop);
      };
    }
  }, []);

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
              <Image src={"/images/logo.png"} alt={"logo"} width={100} height={100} priority />
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

      <Box
        onClick={scrollToTop}
        className={bottom ? `${styles.footer__topArrowIcon}` : `${styles.hidden} ${styles.footer__topArrowIcon}`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 17V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a.999.999 0 0 0-1.414 0l-5 5a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0L9 5.414V17a1 1 0 1 0 2 0z"
            fill="#4A60A1"
          />
        </svg>
      </Box>
    </Box>
  );
}

export default Footer;
