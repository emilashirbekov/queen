import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectBannersAdmin } from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import { useEffect } from "react";
import { getBanners } from "@/pages/AdminPanelPages/AdminBannerPage/api/BannerThunk";
import { BASE_URL } from "@/app/constants/contants";

const HeroSections = () => {
  const banners = useAppSelector(selectBannersAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <section className=" mt-[50px]">
      <div
        className="flex flex-col items-start justify-end gap-[8px] md:gap-[16px] md:h-[577px] h-[286px] rounded-[15px] md:rounded-[30px] p-[20px] md:p-[50px]  bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${BASE_URL + banners.find((banner) => banner.id === 1)?.images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="max-w-[286px] md:max-w-[472px] text-[22px] md:text-[32px] font-bold text-white">
          {banners ? banners.find((banner) => banner.id === 1)?.name : "title"}
        </h1>
        <Link
          to="/catalog/all"
          className="text-white text-[12px] md:text-[20px] rounded-[10px] px-[16px] md:px-[24px] py-[10px] md:py-[14px] bg-white/30 backdrop-blur-xl"
        >
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
};

export default HeroSections;
