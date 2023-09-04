import { SingleValue } from "chakra-react-select";

export type SelectorOptionValue = SingleValue<{
  value?: string;
  label: string;
}>;

export interface PropertiesFilter {
  location: string;
  propertyType: string;
  priceRange: string;
  order: string;
}

export interface PropertiesType {
  id?: number;
  createdAt?: string;
  name: string;
  image: any;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  isFeatured?: boolean;
  forRent?: boolean;
  forSale?: boolean;
  location: string;
  inGallery?: boolean;
  price: string;
  rentOrSale?: string;
}
