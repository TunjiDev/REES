import { Flex, Spinner } from "@/components/chakra-provider";

export default function Loading() {
  return (
    <Flex justifyContent={"center"} my={"1rem"}>
      <Spinner color="#4A60A1" />
    </Flex>
  );
}
