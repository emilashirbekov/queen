import { Link } from "react-router-dom";
import Slider from "../MainComponents/Slider";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectCollections } from "@/entities/Collection/model/slice/collectionSlice";
import { useEffect } from "react";
import { fetchCollection } from "@/entities/Collection/model/services/fetchCollection";
import { selectBannersAdmin } from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import { getBanners } from "@/pages/AdminPanelPages/AdminBannerPage/api/BannerThunk";
const CollectionSection = () => {
  // const { data } = useGetCollectionQuery();
  // // @ts-ignore
  // const collection = data?.results[0]?.products;
  const collectionsData = useAppSelector(selectCollections);
  const banners = useAppSelector(selectBannersAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
    dispatch(getBanners());
  }, [dispatch]);

  const click = () => {
    console.log(1);
  };
  return (
    <section className="flex flex-col md:flex-row gap-[30px]">
      <div
        className="flex flex-col justify-end p-[50px] bg-center bg-no-repeat bg-cover md:max-w-[570px] w-full h-[672px] rounded-[30px]"
        style={{
          backgroundImage: `url('${banners.find((banner) => banner.id === 4)?.images}')`,
        }}
      >
        <div className="flex flex-col gap-[16px] max-w-[400px]">
          <h2 className="text-[32px] font-bold text-white">
            {banners
              ? banners.find((banner) => banner.id === 4)?.name
              : "Title"}
          </h2>
          <Link
            to="/catalog/all"
            className="max-w-[250px] text-white text-[20px] rounded-[10px] px-[24px] py-[14px] bg-white/30 backdrop-blur-xl"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
      <div className="flex items-center md:px-[38px] rounded-[30px] md:bg-white w-full md:w-[55%]">
        <Slider
          slidesPerView={2}
          spaceBetween={30}
          className=" w-full items-center h-max relative"
          slideClassName="h-max flex flex-col items-center gap-[16px] cursor-pointer relative"
          imageClassName="w-[302px] h-[302px] bg-white rounded-[20px] object-cover"
          textClassName="w-full"
          onClick={click}
          favorite={true}
          data={
            //@ts-ignore
            collectionsData.results ? collectionsData.results[0].products : []
          }
          break0={1}
          break1024={2}
          break1366={2}
          break1920={2}
          break2560={2}
        />
      </div>
    </section>
  );
};

export default CollectionSection;
