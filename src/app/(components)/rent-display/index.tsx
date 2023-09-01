import { Box, Flex, Textarea, useMediaQuery } from "@/components/chakra-provider/index";
import AppButton from "@/components/app-button";
import AppInput from "@/components/app-input";
import Popup from "@/components/pop-up";

interface PropType {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

function RentDisplay({ openModal, setOpenModal }: PropType) {
  const [isLowerThan1200] = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Popup
        maxW={isLowerThan1200 ? "90%" : "50%"}
        popupOpen={openModal}
        setPopupOpen={setOpenModal}
        closeIcon
        closeIconClick={() => setOpenModal(false)}
        description="Rent your home from us"
      >
        <Box py={{ base: "1rem", lg: "5rem" }} px={{ base: ".5rem", lg: "2rem" }}>
          <Box mt={{ base: ".5rem", lg: "3rem" }} bg={"#fff"} p={"1.5rem"}>
            <form>
              <Flex gap={3} mb={"1rem"}>
                <AppInput placeholder={"First Name"} mr={"1rem"} />
                <AppInput placeholder={"Last Name"} />
              </Flex>

              <Box mb={"1rem"}>
                <AppInput placeholder={"Email"} />
              </Box>

              <Box mb={"1rem"}>
                <Textarea placeholder={"Comments or Questions"} />
              </Box>

              <Flex justifyContent={"center"}>
                <AppButton w={{ base: "70%", lg: "30%" }} variant={"primary"}>
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

export default RentDisplay;
