import Slider from "../MainComponents/Slider";
// import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
// import { useEffect } from 'react';
// import { fetchCategories } from '@/features/FilterProductByCategory/model/services/fetchCategories';
// import { selectCategories } from '@/features/FilterProductByCategory/model/selectors/selectCategories/selectCategories';
// import { useGetCategoriesQuery } from "@/features/Categories/ui/model/services/categoriesAPI";
import { useGetSubcategoriesQuery } from "@/features/SubCategories/ui/services/apiSubCategories";

const CategorySection = () => {
  // const dispatch = useAppDispatch();
  // const data = useAppSelector(selectCategories);
  const { data } = useGetSubcategoriesQuery();

  // useEffect(() => {
  //     dispatch(fetchCategories());
  //     setTimeout(() => console.log(data), 5000);
  // }, [dispatch]);

  const click = () => {};

  return (
    <section>
      <div className="max-container">
        <h1 className="mb-[32px] text-[26px] font-semibold">Категории</h1>
      </div>
      <Slider
        slidesPerView={5}
        spaceBetween={30}
        className="h-full relative"
        slideClassName="h-full flex flex-col items-center gap-[16px] cursor-pointer relative"
        imageClassName="bg-white rounded-[10.9px] md:rounded-[20px] max-h-[310px] h-[110px] w-[110px] md:w-[200px] md:h-[200px] object-cover"
        textClassName="w-full text-center xl:text-left"
        onClick={click}
        category
        favorite={false}
        freeMode={true}
        data={data?.results}
        break0={3}
        break500={3}
        break768={3}
        break1024={4}
        break1366={6}
        break2560={6}
      />
    </section>
  );
};

export default CategorySection;
