"use client";

import React from "react";
import { FormControl, Input, FormHelperText, ResponsiveValue, FlexProps } from "@/components/chakra-provider/index";
import themes from "@/utils/theme";

type AppInputProps = {
  errorMessage?: string;
  isRequired?: boolean;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  control?: any;
  placeholder?: string;
  focusBorderColor?: string;
  register?: any;
  variant?: ResponsiveValue<(string & {}) | "outline" | "filled" | "flushed" | "unstyled">;
} & FlexProps;

export const generalStyle = {
  height: "3rem",
  backgroundColor: "#FCFCFC",
  border: "0.4px solid rgba(15, 99, 255, 0.08)",
  borderRadius: "4px",
  color: "#000",
  fontSize: themes.fontSizes.small,
  fontWeight: themes.fontWeights.normal,
};

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ errorMessage, isRequired, type, placeholder, variant, control, defaultValue, id, register, ...rest }, ref) => {
    return (
      <FormControl isRequired={isRequired && isRequired}>
        <Input
          fontSize={"1rem"}
          height={"3rem"}
          fontWeight="400"
          _placeholder={{ fontSize: "1rem", color: "#889099" }}
          variant={variant}
          placeholder={placeholder}
          type={"text"}
          {...rest}
          ref={ref}
          {...register}
        />
        {errorMessage && (
          <FormHelperText fontSize="1rem" color="red">
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

AppInput.displayName = "AppInput";
export default AppInput;
