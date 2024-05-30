import { ProductType } from "@/entities/Product/model/types/product.types";

export interface Favourites {
  id: number;
  product: number;
  product_image: string;
}

interface Orders {
  color: {
    id: number;
    colors: string;
  };
  product: ProductType;
  size: {
    id: number;
    sizes: string;
  };
}

export interface OrderResponse {
  id: number;
  products: Orders[];
  price: number;
  types: string;
  location: string;
  delivery_date: string;
  status: string;
}

export interface PersonalUser {
  id: number;
  email: string;
  username: string;
  password?: string;
  phone_number: string;
}

export interface NewPassword {
  new_password: string;
  confirming_new_password: string;
}

export type PersonalUserMutation = Omit<PersonalUser, "id">;
