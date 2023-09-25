"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Flex, useMediaQuery, Text, SimpleGrid, Spinner, Heading } from "@/components/chakra-provider/index";
import { useGetProperties, useGetAllPropertiesLocations } from "@/services/queries/properties";
import { PropertiesFilter } from "@/types";
import AppButton from "@/components/app-button";
import Card from "@/components/card";
import CustomSelect from "@/components/custom-select";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const PAGE_SIZE = 10;

const propertyType = [
  { label: "For Rent", value: "For Rent" },
  { label: "For Sale", value: "For Sale" },
];

const priceRange = [
  { label: "250k and lower", value: "250000" },
  { label: "500k and lower", value: "500000" },
  { label: "1million and lower", value: "1000000" },
  { label: "1 million and higher", value: "1000000+" },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

function Index() {
  const [page, setPage] = useState(0);
  const pageSize = PAGE_SIZE;
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const [filters, setFilters] = useState<PropertiesFilter>({
    location: "",
    propertyType: "",
    priceRange: "",
    order: "",
  });
  const { data, isLoading, isSuccess, isPreviousData } = useGetProperties(page, pageSize, filters);
  const { data: locationsData } = useGetAllPropertiesLocations();

  function getUniqueValues(arr: { location: string }[]) {
    const uniqueValues: { label: string; value: string }[] = [];
    const seenValues: { [key: string]: boolean } = {};

    if (arr) {
      for (const item of arr) {
        const location = item.location.toLowerCase();

        if (!seenValues[location]) {
          uniqueValues.push({ label: location, value: location });
          seenValues[location] = true;
        }
      }
    }

    return uniqueValues;
  }

  const uniqueLocations = getUniqueValues(locationsData);

  const properties = data?.data || [];
  const totalCount = data?.count || 0;
  const hasMore = properties.length === pageSize;

  const startingIndex = page * pageSize + 1;
  const endingIndex = Math.min(startingIndex + properties.length - 1, totalCount);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Box
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        textAlign={"center"}
        color={"#fff"}
        py={"5rem"}
        px={"2rem"}
      >
        <Heading mb={"2rem"} fontSize={{ base: "1.25rem", lg: "1.875rem" }} as={"h1"}>
          Properties
        </Heading>
        <Text mb={"3rem"} fontSize={{ base: ".725rem", lg: "1rem" }}>
          Welcome to Our Properties Page, Your Gateway to a Diverse Range of Real Estate Opportunities. Explore Homes
          for Sale and Rent, Each One a Unique Gem Waiting to Be Discovered.
        </Text>

        <Box border={"1px solid #fff"} w={"80%"} m={"auto"} py={"2rem"} borderRadius={"1rem"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            mt={"1rem"}
            gap="1.7rem"
            direction={{ base: "column", lg: "row" }}
          >
            <CustomSelect
              w={{ base: "80%", lg: "auto" }}
              label="Location"
              placeholder={"Select Location"}
              options={uniqueLocations}
              onChange={(event: any) => {
                setFilters({ ...filters, location: event?.value });
              }}
            />
            <CustomSelect
              w={{ base: "80%", lg: "auto" }}
              label="Property Type"
              placeholder={"Select Property Type"}
              options={propertyType}
              onChange={(event: any) => {
                setFilters({ ...filters, propertyType: event?.value });
              }}
            />
            <CustomSelect
              w={{ base: "80%", lg: "auto" }}
              label="Price Range"
              placeholder={"Select Price Range"}
              options={priceRange}
              onChange={(event: any) => {
                setFilters({ ...filters, priceRange: event?.value });
              }}
            />
          </Flex>
        </Box>
      </Box>
      <Box py={"5rem"} px={"2rem"} as="section">
        <Flex justifyContent={"center"} alignItems={"center"} mb={"3rem"}>
          <Text fontWeight={"semi-bold"} mr={"1rem"} fontSize={{ base: ".725rem", lg: "1rem" }}>
            Sort By:
          </Text>
          <CustomSelect
            placeholder={"Default Order"}
            options={sortOptions}
            onChange={(event: any) => {
              setFilters({ ...filters, order: event?.value });
            }}
          />
        </Flex>

        <SimpleGrid minChildWidth="250px" spacing="20px" mb={"2rem"} justifyItems="center">
          {isLoading && (
            <Flex justifyContent={"center"}>
              <Spinner color="#4A60A1" />
            </Flex>
          )}
          {isSuccess &&
            properties.map((property: any) => (
              <Card
                imgSrc={property?.image}
                imgAlt={property?.name}
                title={property?.name}
                description={truncate(property?.description, 100)}
                price={`₦ ${property?.price.toLocaleString()}`}
                key={property?.id}
                onClick={() => {
                  router.push(`/properties/${property?.id}`);
                }}
              />
            ))}
          {properties.length === 0 && (
            <Text textAlign={"center"} mb={"3rem"} color={"#889099"} fontSize={{ base: ".725rem", lg: "1rem" }}>
              No Properties available
            </Text>
          )}
        </SimpleGrid>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={{ base: ".725rem", lg: "1rem" }}>
            Showing {startingIndex} to {endingIndex} of {totalCount} results
          </Text>

          <Flex>
            <AppButton
              variant={"primary"}
              mr={"1rem"}
              fontWeight={"normal"}
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0 || isLoading}
            >
              <ChevronLeftIcon />
              {isLargerThan768 && "Previous"}
            </AppButton>

            <AppButton
              variant={"primary"}
              fontWeight={"normal"}
              onClick={() => {
                if (!isPreviousData && hasMore) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData || isLoading || !hasMore}
            >
              {isLargerThan768 && "Next"} <ChevronRightIcon />
            </AppButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Index;
