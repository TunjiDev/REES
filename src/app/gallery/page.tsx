"use server";

import { Box, Heading } from "@/components/chakra-provider";
import Carousel from "./(components)/carousel";

function Gallery() {
  return (
    <Box as="section" py={"2rem"}>
      <Heading mb={"2rem"} textAlign={"center"} fontSize={{ base: "1.25rem", lg: "1.875rem" }} as={"h1"}>
        Kindly checkout our beautiful houses and apartments below.
      </Heading>

      <Carousel />
    </Box>
  );
}

export default Gallery;
