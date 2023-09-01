"use client";

import { SystemStyleObject, Flex, FlexProps, Text } from "@/components/chakra-provider";
import { OptionBase, Select } from "chakra-react-select";
import theme from "@/utils/theme";
import { SelectorOptionValue } from "@/types";

interface PropType {
  register?: any;
  options?: Array<OptionBase & SelectorOptionValue>;
  onChange?: (data: SelectorOptionValue) => void;
  placeholder?: string;
  name?: string;
  containerStyles?: FlexProps;
  selectorStyles?: SystemStyleObject;
  inputStyles?: SystemStyleObject;
  optionStyles?: SystemStyleObject;
  isDisabled?: boolean;
  label?: string;
  isHiddenChevron?: boolean;
  closeOnSelect?: boolean;
  error?: string;
  h?: string | { [key: string]: string | number };
  w?: string | { [key: string]: string | number };
  closeMenuOnSelect?: boolean;
  value?: SelectorOptionValue;
  defaultValue?: { label: string; value: string }[];
}

const CustomSelect = ({
  register,
  options,
  onChange,
  placeholder,
  name,
  isDisabled,
  isHiddenChevron,
  label,
  value,
  h,
  w,
  containerStyles,
  selectorStyles,
  optionStyles,
  closeOnSelect = true,
  inputStyles,
  error,
  defaultValue,
}: PropType) => {
  return (
    <Flex w={w} flexDirection="column" {...containerStyles} size="xs">
      {!!label && (
        <Text mb="0.8rem" fontSize={theme.fontSizes.tiny} fontWeight={theme.fontWeights.bold} color="typography.gray">
          {label}
        </Text>
      )}
      <Select
        {...register}
        id="filter"
        name={name}
        isDisabled={isDisabled}
        options={options || []}
        value={value}
        placeholder={placeholder}
        closeMenuOnSelect={closeOnSelect}
        defaultValue={defaultValue}
        chakraStyles={{
          dropdownIndicator: (provided: any, _: any) => ({
            ...provided,
            bg: "transparent",
            px: 2,
            cursor: "inherit",
            size: "sm",
          }),
          indicatorSeparator: (provided: any) => ({
            ...provided,
            display: "none",
          }),
          option: (provided: any, state: { isFocused: any }) => ({
            ...provided,
            background: state.isFocused ? "#F5F5F5" : "#ffffff",
            color: "#525252",
            fontSize: theme.fontSizes.small,
            ...optionStyles,
          }),
          container: (provided: any) => ({
            ...provided,
            height: h ? h : "1.5rem",
          }),
          control: (provided: any) => ({
            ...provided,
            border: "1px solid #757575",
            borderRadius: ".8rem",
            paddingLeft: "1rem",
            height: "100%",
            width: "100%",
            fontSize: theme.fontSizes.small,
            ...selectorStyles,
          }),
          downChevron: (provided: any) => ({
            ...provided,
            display: isHiddenChevron ? "none" : "box",
            color: "#A0A0A0",
          }),
          input: (provided: any) => ({
            ...provided,
            color: "#A0A0A0",
            ...inputStyles,
            fontSize: theme.fontSizes.small,
          }),
          singleValue: (provided: any) => ({
            ...provided,
            overflow: "visible",
          }),
          menu: (provided: any) => ({
            ...provided,
            overflow: "visible",
          }),
          menuList: (provided: any) => ({
            ...provided,
            height: "100%",
            width: "100%",
            minWidth: "unset",
            fontSize: theme.fontSizes.small,
          }),

          valueContainer: (provided: any) => ({
            ...provided,
            padding: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }),
        }}
        onChange={onChange}
      />

      {error && (
        <Text mt={"0.5rem"} variant="label" color="red">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default CustomSelect;
