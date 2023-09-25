"use server";

import { Box, Flex, Heading, Text, Image } from "@/components/chakra-provider";
import styles from "./(styles)/about-us.module.css";

function About() {
  return (
    <>
      <Box
        as="section"
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/jason-briscoe-UV81E0oXXWQ-unsplash.jpg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        textAlign={"center"}
        color={"#fff"}
        py={{ base: "1rem", lg: "5rem" }}
      >
        <Heading mb={"2rem"} fontSize={{ base: "1.25rem", lg: "1.875rem" }} as={"h1"}>
          About Us
        </Heading>
        <Text fontSize={{ base: ".725rem", lg: "1rem" }}>About the REES (Real Estate) Network.</Text>
      </Box>

      <Flex
        w={{ base: "100%", lg: "70%" }}
        m={"auto"}
        py={{ base: "1rem", lg: "3rem" }}
        gap={5}
        justifyContent={"center"}
        direction={{ base: "column", sm: "row", lg: "row" }}
        alignItems={{ base: "center", lg: "normal" }}
        as="section"
      >
        <Flex
          bg={"#4A60A1"}
          color={"#fff"}
          px={{ base: ".5rem", lg: "2rem" }}
          borderRadius={"2rem"}
          textAlign={"left"}
          w={{ base: "90%", lg: "40%" }}
          h={"15rem"}
          alignItems={"center"}
          className={styles["slide-in-left"]}
        >
          <Flex direction={"column"}>
            <Text w={"80%"} mb={"3rem"} fontSize={{ base: ".725rem", lg: "1rem" }}>
              REES has helped put over 40 milllion renters into new homes.
            </Text>
            <Box>
              <Text fontSize={{ base: ".725rem", lg: "1rem" }}>Adetunji Igbatayo</Text>
              <Text fontSize={{ base: ".725rem", lg: "1rem" }}>CEO of REES</Text>
            </Box>
          </Flex>
          <Box mt={"-5rem"}>
            <Image src={"/images/tunji.png"} alt={"tunji's photo"} />
          </Box>
        </Flex>
        <Box
          w={{ base: "90%", lg: "40%" }}
          fontSize={{ base: ".725rem", lg: "1rem" }}
          className={styles["slide-in-right"]}
        >
          The REES Network represents the nation’s most comprehensive online rental marketplace. Our extensive network
          of 10 leading sites including xxx.com, xx1.com, xx2.com and 7 others are visited over 100 million times each
          month by renters looking for their next apartment. Our suite of digital advertising, social and reputation
          management, and market analytics solutions delivers the most leases at a great ROI for our advertisers. REES
          is the only source you need to optimize your online marketing performance and fill your vacancies fast.
        </Box>
      </Flex>
      <Box
        as="section"
        bgImage={"url('/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg')"}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h={"25rem"}
      ></Box>
    </>
  );
}

export default About;
