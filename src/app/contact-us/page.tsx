"use server";

import { Box, Heading, Text } from "@/components/chakra-provider/index";
import styles from "./(styles)/contact-us.module.css";
import ContactForm from "./(components)/contact-form";

function Contact() {
  return (
    <Box as="section">
      <Box
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/joel-filipe-RFDP7_80v5A-unsplash.jpg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        textAlign={"center"}
        color={"#fff"}
        py={"5rem"}
      >
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} mb={"2rem"}>
          {" "}
          Contact us
        </Heading>
        <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"3rem"}>
          Contact Us Today and Let&apos;s Begin the Conversation About Your Real Estate Goals. Our Expert Team Is Ready
          to Provide You with Personalized Solutions and Unmatched Support.
        </Text>
      </Box>

      <Box py={"2rem"} px={{ base: ".5rem", lg: "2rem" }} as="section" bg={"#EDEFF6"}>
        <Box
          mt={"3rem"}
          w={{ base: "100%", lg: "50%" }}
          mx={"auto"}
          bg={"#fff"}
          p={"1.5rem"}
          className={styles["slide-in-left"]}
        >
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
