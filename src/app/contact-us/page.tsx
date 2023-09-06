"use client";

import { Box, Flex, Heading, Text, Textarea } from "@/components/chakra-provider/index";
import AppButton from "@/components/app-button";
import AppInput from "@/components/app-input";
import { ContactSchema } from "@/utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

function Contact() {
  const formHook = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = formHook;

  const submit = async (data: any) => {
    const result = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const res = await result.json();
    if (res.status === "success") {
      toast.success("Message sent successfully!");
      reset();
      return res;
    } else {
      return toast.error("An error occurred, please try again!");
    }
  };

  return (
    <Box as="section">
      <Box
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/joel-filipe-RFDP7_80v5A-unsplash.jpg')"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        textAlign={"center"}
        color={"#fff"}
        py={"5rem"}
      >
        <Heading fontSize={{ base: "1.25rem", lg: "1.875rem" }} mb={"2rem"}>
          {" "}
          Contact us
        </Heading>
        <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"3rem"}>
          Contact Us Today and Let&apos;s Begin the Conversation About Your Real Estate Goals. Our Expert Team Is Ready
          to Provide You with Personalized Solutions and Unmatched Support.
        </Text>
      </Box>

      <Box py={"2rem"} px={{ base: ".5rem", lg: "2rem" }} as="section" bg={"#EDEFF6"}>
        <Box mt={"3rem"} w={{ base: "100%", lg: "50%" }} mx={"auto"} bg={"#fff"} p={"1.5rem"}>
          <form onSubmit={handleSubmit(submit)}>
            <Text
              fontSize={{ base: ".725rem", lg: "1rem" }}
              as={"h3"}
              mb={"1rem"}
              color={"#1E2640"}
              fontWeight={"bold"}
            >
              Enquiry Form
            </Text>

            <Text fontSize={{ base: ".725rem", lg: "1rem" }} mb={"1rem"} color={"#889099"}>
              Are you looking for details about a certain property? Ask us a question using the form below.
            </Text>

            <Flex gap={3} mb={"1rem"}>
              <AppInput
                placeholder={"First Name"}
                mr={"1rem"}
                register={register("firstName")}
                errorMessage={errors.firstName?.message}
              />
              <AppInput
                placeholder={"Last Name"}
                register={register("lastName")}
                errorMessage={errors.lastName?.message}
              />
            </Flex>

            <Box mb={"1rem"}>
              <AppInput placeholder={"Email"} register={register("email")} errorMessage={errors.email?.message} />
            </Box>

            <Box mb={"1rem"}>
              <Textarea placeholder={"Comments or Questions"} {...register("message", { required: true })} />

              {errors.message && (
                <Text mt={"1rem"} color={"red"} fontSize={{ base: ".725rem", lg: "1rem" }}>
                  {errors.message.message}
                </Text>
              )}
            </Box>

            <Flex justifyContent={"center"}>
              <AppButton w={"30%"} variant={"primary"} type="submit" isLoading={isSubmitting}>
                Submit
              </AppButton>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
