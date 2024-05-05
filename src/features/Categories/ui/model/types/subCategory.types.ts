export interface SubCategory {
  id?: string;
  title: string;
  image: string;
  category: string;
  category_title: string;
  image1?: string;
  images1?: string;
  name?: string;
  price?: string;
  is_favorite: { id: number; user: number }[];
}

export interface SubCategoryApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubCategory[];
}
