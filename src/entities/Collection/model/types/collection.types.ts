export interface CollectionTypes {
  results: CollectionItems;
}

export interface CollectionItems {
  id: number;
  title: string;
  name?: string;
  price: number;
  image?: string;
  image1: string;
  images1?: string;
  image2: string;
  image3: string;
  is_favorite: { id: number; user: number }[];
}
