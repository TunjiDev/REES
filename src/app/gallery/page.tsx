"use client";

import { Box, Text, Image, Heading, Flex, Spinner } from "@/components/chakra-provider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetGalleryProperties } from "@/services/queries/properties";

function Gallery() {
  const { data: galleryProperties, isLoading, isSuccess } = useGetGalleryProperties();

  return (
    <Box as="section" py={"2rem"}>
      <Heading mb={"2rem"} textAlign={"center"} fontSize={{ base: "1.25rem", lg: "1.875rem" }}>
        Kindly checkout our beautiful houses and apartments below.
      </Heading>

      {isLoading ? (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      ) : isSuccess ? (
        <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
          {galleryProperties.map((property: any) => {
            return (
              <Box key={property.id} fontSize={{ base: ".725rem", lg: "1rem" }}>
                <Image src={property.image} alt={property.title} height={{ base: 600, lg: 900 }} />
                <Text className="legend">{property.name}</Text>
              </Box>
            );
          })}
        </Carousel>
      ) : (
        <Text textAlign={"center"} mb={"3rem"} color={"#889099"} fontSize={{ base: ".725rem", lg: "1rem" }}>
          No Properties available in gallery at this time...
        </Text>
      )}
    </Box>
  );
}

export default Gallery;
