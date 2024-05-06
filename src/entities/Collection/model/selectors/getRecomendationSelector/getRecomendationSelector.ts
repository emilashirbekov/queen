import { RootState } from "@/app/providers/StoreProvider/config/store";

export const recomendationSelector = (state: RootState) => state.products.products;
