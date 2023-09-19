"use client";

import { Button, ButtonProps } from "@/components/chakra-provider/index";
import theme from "@/utils/theme";
import { ReactNode } from "react";

interface PropType extends ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "danger-outline" | "outline" | "grey" | "primary-outline";
  width?: string;
  loading?: boolean;
  style?: React.CSSProperties;
}

const AppButton = ({
  children,
  type,
  onClick,
  disabled,
  variant = "primary",
  width,
  loading,
  style,
  ...rest
}: PropType) => {
  return (
    <Button
      isLoading={loading}
      onClick={onClick}
      w={width}
      type={type}
      style={style}
      disabled={disabled}
      isDisabled={disabled}
      fontSize={{ base: ".8rem", lg: theme.fontSizes.small }}
      fontWeight="500"
      padding={{ base: ".5rem", lg: "1rem" }}
      h={variant === "outline" ? "2rem" : "2.5rem"}
      background={
        variant === "primary"
          ? "#4A60A1"
          : "primary-outline"
          ? "#F1FAFF"
          : variant === "danger"
          ? "#EB6969"
          : variant === "danger-outline"
          ? "#FEEBE14D"
          : variant === "secondary"
          ? "#F1FAFF"
          : variant === "grey"
          ? "#F9F9FB"
          : ""
      }
      _hover={{}}
      color={
        variant === "primary"
          ? "white"
          : variant === "primary-outline"
          ? "#4A60A1"
          : variant === "danger"
          ? "white"
          : variant === "danger-outline"
          ? "#EB6969"
          : variant === "secondary"
          ? "#0738B7"
          : variant === "grey"
          ? "#4B506D"
          : variant === "outline"
          ? "#CACACA"
          : ""
      }
      borderRadius={variant === "outline" ? "4rem" : ".6rem"}
      border={
        variant === "danger-outline"
          ? "1px solid #EB6969"
          : variant === "primary-outline"
          ? "#4A60A1"
          : variant === "outline"
          ? "1px solid #CACACA"
          : ""
      }
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
