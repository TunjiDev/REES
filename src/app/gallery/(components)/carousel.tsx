"use client";

import React from "react";
import { Box, Text, Flex, Spinner } from "@/components/chakra-provider";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetGalleryProperties } from "@/services/queries/properties";

function Index() {
  const { data: galleryProperties, isLoading, isSuccess } = useGetGalleryProperties();

  return (
    <>
      {isLoading ? (
        <Flex justifyContent={"center"}>
          <Spinner color="#4A60A1" />
        </Flex>
      ) : isSuccess ? (
        <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
          {galleryProperties.map((property: any) => {
            return (
              <Box key={property.id} fontSize={{ base: ".725rem", lg: "1rem" }}>
                <Image
                  src={property.image}
                  alt={property.title ?? property.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={"image"}
                />
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
    </>
  );
}

export default Index;
