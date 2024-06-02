export interface IBasket {
  id: number;
  title: string;
  size: {
    id: number;
    sizes: string;
  };
  color: {
    id: number;
    colors: string;
  };
  price: number;
  total: number;
  description: string;
  images1: string;
  count: number;
  discount: number;
}
