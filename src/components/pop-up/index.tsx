import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalContentProps, Text } from "@chakra-ui/react";

export interface PopupPropType {
  setPopupOpen: (popupOpen: boolean) => void;
  popupOpen: boolean;
  children: JSX.Element | JSX.Element[];
  maxW?: string;
  height?: string;
  description?: string;
  closeIcon?: boolean;
  closeIconClick?: () => void;
  closeOnOverlayClick?: boolean;
  contentProps?: ModalContentProps;
  onCloseComplete?: () => void;
}

const Popup = ({
  setPopupOpen,
  popupOpen,
  maxW,
  children,
  closeIcon,
  height,
  closeIconClick,
  description,
  closeOnOverlayClick,
  contentProps,
  onCloseComplete,
}: PopupPropType) => {
  const closePopup = () => {
    setPopupOpen?.(false);
  };

  return (
    <Modal
      isOpen={popupOpen}
      closeOnOverlayClick={closeOnOverlayClick || false}
      onClose={closePopup}
      onCloseComplete={onCloseComplete}
      onOverlayClick={closePopup}
    >
      <ModalOverlay />
      <ModalContent
        maxWidth={maxW}
        height={height}
        width="100%"
        position="relative"
        background={"#fff"}
        py={{ base: "1rem", md: "4.8rem" }}
        px={{ base: ".1rem", md: "2.2rem" }}
        {...contentProps}
        color={"#0D1117"}
      >
        {closeIcon && (
          <ModalCloseButton
            width="1rem"
            height="1rem"
            position="absolute"
            top="2.4rem"
            right="2.4rem"
            outline="none"
            onClick={closeIconClick}
          />
        )}
        {description && (
          <Text fontWeight="bold" fontSize={{ base: "18px", lg: "28px" }} color={"#0D1117"}>
            {description}
          </Text>
        )}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default Popup;
