export interface OrderMutation {
  firstname: string;
  lastname: string;
  location: string;
}

export interface OrderData extends OrderMutation {
  products: { product: number; color: string; size: string }[];
  price: number;
  paymentType: string;
  deliver: {
    type: string;
    location: string;
  };
}

export interface OrderMutationBtn {
  delivery: string;
  city: string;
  bank: string;
  nal: string;
  terminal: string;
}
