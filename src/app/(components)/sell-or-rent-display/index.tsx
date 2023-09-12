import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Flex,
  Textarea,
  useMediaQuery,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  RadioGroup,
  Radio,
  Stack,
  Text,
} from "@/components/chakra-provider/index";
import AppButton from "@/components/app-button";
import Popup from "@/components/pop-up";
import { useCreatePropertyMutation } from "@/services/mutations/properties";

import { RentOrSellSchema } from "@/utils/schema";
import AppInput from "@/components/app-input";
import toast from "react-hot-toast";

interface PropType {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

function SellOrRentDisplay({ openModal, setOpenModal }: PropType) {
  const [isLowerThan1200] = useMediaQuery("(max-width: 1200px)");
  const { mutateAsync: createProperty, isLoading } = useCreatePropertyMutation();

  const formHook = useForm({
    resolver: yupResolver(RentOrSellSchema),
    defaultValues: {
      name: "",
      firstName: "",
      lastName: "",
      price: 0,
      rentOrSale: "",
      email: "",
      location: "",
      description: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formHook;

  const submit = async (data: any) => {
    if (!data.image.length) {
      return toast.error("Kindly upload an image!");
    } else {
      const cleanedData = {
        ...data,
        image: data.image[0],
        ...(data.rentOrSale === "For Rent" && { forRent: true }),
        ...(data.rentOrSale === "For Sale" && { forSale: true }),
        ...(data.location && { location: data.location.toLowerCase() }),
      };
      delete cleanedData.rentOrSale;
      const result = await createProperty(cleanedData);
      if (result.length) {
        await fetch("/api/buy-rent", {
          method: "POST",
          body: JSON.stringify(data),
        });
        reset();
        setOpenModal(false);
      }
    }
  };

  return (
    <>
      <Popup
        maxW={isLowerThan1200 ? "95%" : "50%"}
        popupOpen={openModal}
        setPopupOpen={setOpenModal}
        closeIcon
        closeIconClick={() => setOpenModal(false)}
        description="Sell or Rent your property with us"
      >
        <Box py={{ base: "1rem", lg: "1.5rem" }} px={{ base: ".5rem", lg: "2rem" }}>
          <Box mt={{ base: ".5rem", lg: "1.5rem" }} bg={"#fff"} p={"1.5rem"}>
            <form onSubmit={handleSubmit(submit)}>
              <Box mb={"1rem"}>
                <AppInput
                  placeholder={"Property Name"}
                  mr={"1rem"}
                  register={register("name")}
                  errorMessage={errors.name?.message}
                />
              </Box>
              <Flex gap={3} mb={"1rem"}>
                <AppInput
                  placeholder={"Your First Name"}
                  mr={"1rem"}
                  register={register("firstName")}
                  errorMessage={errors.firstName?.message}
                />
                <AppInput
                  placeholder={"Your Last Name"}
                  register={register("lastName")}
                  errorMessage={errors.lastName?.message}
                />
              </Flex>

              <Box mb={"1rem"}>
                <NumberInput>
                  <NumberInputField placeholder={"Enter Price in ₦"} {...register("price", { required: true })} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                {errors.price && (
                  <Text mt={"1rem"} color={"red"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                    {errors.price.message}
                  </Text>
                )}
              </Box>

              <Box mb={"1rem"}>
                <AppInput placeholder={"Email"} register={register("email")} errorMessage={errors.email?.message} />
              </Box>

              <Box mb={"1rem"}>
                <RadioGroup>
                  <Stack direction="row">
                    <Radio colorScheme={"purple"} value="For Rent" {...register("rentOrSale", { required: true })}>
                      For Rent
                    </Radio>
                    <Radio colorScheme={"purple"} value="For Sale" {...register("rentOrSale", { required: true })}>
                      For Sale
                    </Radio>
                  </Stack>
                </RadioGroup>

                {errors.rentOrSale && (
                  <Text mt={"1rem"} color={"red"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                    {errors.rentOrSale.message}
                  </Text>
                )}
              </Box>

              <Box mb={"1rem"}>
                <AppInput
                  placeholder={"Location"}
                  register={register("location")}
                  errorMessage={errors.location?.message}
                />
              </Box>

              <Box mb={"1rem"}>
                <Textarea placeholder={"Description"} {...register("description", { required: true })} />

                {errors.description && (
                  <Text mt={"1rem"} color={"red"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                    {errors.description.message}
                  </Text>
                )}
              </Box>

              <Flex
                mb={"1rem"}
                bg={"#4A60A1"}
                color={"#fff"}
                alignItems={"center"}
                direction={"column"}
                p="1rem"
                borderRadius="8px"
                justifyContent="center"
                cursor="pointer"
                _hover={{
                  bg: "#334f91",
                  cursor: "pointer",
                }}
              >
                <Input
                  type="file"
                  id="fileInput"
                  opacity="0"
                  position="absolute"
                  zIndex="-1"
                  {...register("image", { required: true })}
                />
                <label htmlFor="fileInput">
                  <Text fontSize="md" fontWeight="bold">
                    Upload Image
                  </Text>
                </label>

                {errors.image && (
                  <Text mt={"1rem"} color={"red"}>
                    {errors.image.message}
                  </Text>
                )}
              </Flex>

              <Flex justifyContent={"center"}>
                <AppButton w={{ base: "70%", lg: "30%" }} variant={"primary"} type="submit" loading={isLoading}>
                  Submit
                </AppButton>
              </Flex>
            </form>
          </Box>
        </Box>
      </Popup>
    </>
  );
}

export default SellOrRentDisplay;
