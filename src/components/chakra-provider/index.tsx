"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
export {
  Box,
  Text,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
  Spinner,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
  extendTheme,
  type ThemeConfig,
  theme,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Grid,
  GridItem,
  Avatar,
  Stack,
  useMediaQuery,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  Button,
  FormControl,
  FormHelperText,
  Radio,
  RadioGroup,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  type ResponsiveValue,
  type ButtonProps,
  type SystemStyleObject,
  type FlexProps,
} from "@chakra-ui/react";

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
