import * as Yup from "yup";

export const RentOrSellSchema = Yup.object().shape({
  name: Yup.string().trim().required("Property name is required"),
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  price: Yup.string().trim().required("Price is required"),
  email: Yup.string().trim().email("Invalid email").required("Email is required"),
  location: Yup.string().trim().required("Please provide a valid location"),
  description: Yup.string().trim().required("Please provide a description"),
  image: Yup.mixed().test("required", "Please provide an image", (value) => {
    return value !== null && value !== undefined;
  }),
  rentOrSale: Yup.string().trim().required("Please select one option"),
});
