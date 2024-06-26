import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { ProductList } from "@/entities/Product";
import { mapProductSubCategory } from "@/features/Categories/ui/utils/mapObject";
import {
  ProductFilterMobile,
  ProductFilters,
  clearFilter,
  filterProducts,
  selectFilter,
} from "@/features/FilterProductByCategory";
import { selectCategories } from "@/features/FilterProductByCategory/model/selectors/selectCategories/selectCategories";
import { setSelectedCategory } from "@/features/FilterProductByCategory/model/slice/ProductCategorySlice";
import { useGetProductsQuery } from "@/features/Product/ui/model/services/productAPI";
import {
  SortProducts,
  selectSort,
  sortProducts,
} from "@/features/SortProducts";
import { useGetSubcategoriesQuery } from "@/features/SubCategories/ui/services/apiSubCategories";
import SearchInput from "@/pages/Catalog/ui/SearchInput";
import Pagination from "@/shared/ui/Pagination";
import RequestProcessing from "@/widgets/RequestProcessing/RequestProcessing";
import { SelectedFilter } from "@/widgets/SelectedFilter";
import { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CatalogHelmet from "./CatalogHelmet";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);
  const selectedCategories = useAppSelector(selectCategories);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useGetProductsQuery(currentPage);
  const products = data?.results;
  const { data: subCategories } = useGetSubcategoriesQuery();
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const { category } = useParams();
  const path = useParams() as { category: string };

  const searchProducts = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const productsWithCategories = useMemo(() => {
    return mapProductSubCategory(products || [], subCategories?.results || []);
  }, [products, subCategories]);

  const sortedProductsList = useMemo(() => {
    return sortProducts(productsWithCategories, sort);
  }, [productsWithCategories, sort]);

  const filteredProducts = useMemo(() => {
    let filtered = sortedProductsList;

    filtered = filterProducts(filtered, category);
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    return filtered;
  }, [sortedProductsList, selectedCategories, searchText]);

  const handleSelectFilter = useCallback(
    (filterTypes: string[]) => {
      const newSelectedFilter = selectFilter(selectedCategories, filterTypes);
      dispatch(setSelectedCategory(newSelectedFilter));
      navigate(`/catalog/${newSelectedFilter}`);
    },
    [selectedCategories, dispatch],
  );

  const clearFilterType = useCallback(
    (item: string) => {
      const newSelectedFilter = clearFilter(selectedCategories, item);
      dispatch(setSelectedCategory(newSelectedFilter));
      const result = path.category
        ?.split(",")
        .filter((itemRemove) => itemRemove !== item);
      if (result.length === 0) {
        navigate(`/catalog/all`);
      } else {
        navigate(`/catalog/${result}`);
      }
    },
    [selectedCategories, dispatch],
  );

  return (
    <>
      <CatalogHelmet />
      <section className="max-container padding-container mt-14 relative">
        <SearchInput onSearch={searchProducts} />
        <main className="flexBetween mb-10 gap-7">
          <ProductFilters handleSelectFilter={handleSelectFilter} />
          <div className="self-baseline full-width">
            <header className="flexCenter lg:flexBetween gap-2 text-center flex-wrap mb-9">
              <h1 className="full-width lg:w-auto text-xl whitespace-nowrap sm:text-3xl text-primary uppercase font-bold mb-8 md:mb-0">
                Все
              </h1>
              <ProductFilterMobile handleSelectFilter={handleSelectFilter} />
              <SortProducts sort={sort} />
            </header>
            <RequestProcessing isLoading={isLoading} error={error} />
            <SelectedFilter
              clearFilterType={clearFilterType}
              //@ts-ignore
              selectedFilter={selectedCategories}
            />
            {filteredProducts.length !== 0 ? (
              <ProductList currentProducts={filteredProducts} />
            ) : (
              <h1 className="text-3xl font-bold text-center text-primary opacity-70">
                Нет Товаров
              </h1>
            )}
          </div>
        </main>
        {filteredProducts.length !== 0 ? (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            data={data}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default CatalogPage;
