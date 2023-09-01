"use client";

import { useRef } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  Button,
} from "@/components/chakra-provider/index";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [isLowerThan768] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <Box as="header" px={"2rem"}>
      {/* DESKTOP NAV */}
      {!isLowerThan768 && (
        <Flex as="nav" justifyContent={"space-between"} alignItems={"center"} py={".5rem"}>
          <Box>
            <Link href={"/"}>
              <Image src={"/images/logo.png"} alt={"logo"} width={100} height={100} />
            </Link>
          </Box>

          <Flex as="ul" listStyleType={"none"} gap={8} color={"#0F1320"}>
            <Box
              as="li"
              _hover={{
                color: "#4A60A1",
              }}
              className={pathname === "/" ? "active" : ""}
            >
              <Link href={"/"}>HOME</Link>
            </Box>
            <Box
              as="li"
              _hover={{
                color: "#4A60A1",
              }}
              className={pathname === "/about-us" ? "active" : ""}
            >
              <Link href={"/about-us"}>ABOUT US</Link>
            </Box>
            <Box
              as="li"
              _hover={{
                color: "#4A60A1",
              }}
              className={pathname === "/properties" ? "active" : ""}
            >
              <Link href={"/properties"}>PROPERTIES</Link>
            </Box>
            <Box
              as="li"
              _hover={{
                color: "#4A60A1",
              }}
              className={pathname === "/gallery" ? "active" : ""}
            >
              <Link href={"/gallery"}>GALLERY</Link>
            </Box>
            <Box
              as="li"
              _hover={{
                color: "#4A60A1",
              }}
              className={pathname === "/contact-us" ? "active" : ""}
            >
              <Link href={"/contact-us"}>CONTACT US</Link>
            </Box>
          </Flex>
        </Flex>
      )}

      {/* MOBILE NAV */}
      {isLowerThan768 && (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Button ref={btnRef} onClick={onOpen}>
            <Image src={"/icons/hamburger-icon.svg"} alt={"menu"} width={20} height={20} />
          </Button>

          <Box>
            <Link href={"/"}>
              <Image src={"/images/logo.png"} alt={"logo"} width={100} height={100} />
            </Link>
          </Box>
        </Flex>
      )}

      <Drawer isOpen={isOpen} placement={"right"} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton />
          <DrawerHeader>
            <Box onClick={onClose}>
              <Link href={"/"}>
                <Image src={"/images/logo.png"} alt={"logo"} width={100} height={100} />
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              as="ul"
              listStyleType={"none"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={6}
              direction={"column"}
              color={"#0F1320"}
            >
              <Box
                as="li"
                _hover={{
                  color: "#4A60A1",
                }}
                className={pathname === "/" ? "active" : ""}
                onClick={onClose}
              >
                <Link href={"/"}>HOME</Link>
              </Box>
              <Box
                as="li"
                _hover={{
                  color: "#4A60A1",
                }}
                className={pathname === "/about-us" ? "active" : ""}
                onClick={onClose}
              >
                <Link href={"/about-us"}>ABOUT US</Link>
              </Box>
              <Box
                as="li"
                _hover={{
                  color: "#4A60A1",
                }}
                className={pathname === "/properties" ? "active" : ""}
                onClick={onClose}
              >
                <Link href={"/properties"}>PROPERTIES</Link>
              </Box>
              <Box
                as="li"
                _hover={{
                  color: "#4A60A1",
                }}
                className={pathname === "/gallery" ? "active" : ""}
                onClick={onClose}
              >
                <Link href={"/gallery"}>GALLERY</Link>
              </Box>
              <Box
                as="li"
                _hover={{
                  color: "#4A60A1",
                }}
                className={pathname === "/contact-us" ? "active" : ""}
                onClick={onClose}
              >
                <Link href={"/contact-us"}>CONTACT US</Link>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
