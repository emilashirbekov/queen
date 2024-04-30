export interface CategorysTypes {
  id: number;
  title: string;
  name?: string;
  price?: number;
  image: string;
  image1?: string;
  images1?: string;
  is_favorite: { id: number; user: number }[];
}

export interface CategoriesApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CategorysTypes[];
}
