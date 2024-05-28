import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectBannersAdmin } from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import { useEffect } from "react";
import { getBanners } from "@/pages/AdminPanelPages/AdminBannerPage/api/BannerThunk";

const OfferSection = () => {
  const banners = useAppSelector(selectBannersAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <section className="flex flex-col md:flex-row justify-between gap-[50px]">
      <div
        className="flex flex-col justify-end p-[34px] bg-center bg-no-repeat bg-cover rounded-[30px] w-full md:w-[50%] h-[415px]"
        style={{
          backgroundImage: `url('${banners ? banners.find((banner) => banner.id === 2)?.images : ""}')`,
        }}
      >
        <div className="flex flex-col gap-[16px] max-w-[400px]">
          <h2 className="text-[22px] md:text-[32px] font-bold text-white">
            {banners
              ? banners.find((banner) => banner.id === 2)?.name
              : "Title"}
          </h2>
          <Link
            to={"/catalog/all"}
            className="max-w-[172px] md:max-w-[250px] text-white text-[12px] md:text-[20px] rounded-[10px] px-[16px] md:px-[24px] py-[10px] md:py-[14px] bg-white/30 backdrop-blur-xl"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col justify-end p-[34px] bg-center bg-no-repeat bg-cover rounded-[30px] w-full md:w-[50%] h-[415px]"
        style={{
          backgroundImage: `url('${banners ? banners.find((banner) => banner.id === 3)?.images : ""}')`,
        }}
      >
        <div className="flex flex-col gap-[16px] max-w-[400px]">
          <h2 className="text-[22px] md:text-[32px] font-bold text-white">
            {banners
              ? banners.find((banner) => banner.id === 3)?.name
              : "Title"}
          </h2>
          <Link
            to="/catalog/all"
            className="max-w-[172px] md:max-w-[250px] text-white text-[12px] md:text-[20px] rounded-[10px] px-[16px] md:px-[24px] py-[10px] md:py-[14px] bg-white/30 backdrop-blur-xl"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
