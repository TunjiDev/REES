"use client";
import { Box, Flex, Text } from "@/components/chakra-provider/index";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Flex color={"#ff5555"} justifyContent={"center"}>
      <Box mt={"5rem"}>
        <Text textAlign={"center"}>{error.message}</Text>
        <Box w={"50%"} m={"auto"}>
          <button onClick={() => reset()}>Try again</button>
        </Box>
      </Box>
    </Flex>
  );
}
