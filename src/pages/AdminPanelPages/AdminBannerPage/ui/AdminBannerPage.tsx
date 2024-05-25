import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { useEffect } from "react";
import { getBanners } from "../api/BannerThunk";
import {
  selectBannerAdminLoading,
  selectBannersAdmin,
} from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import Loader from "@/shared/ui/Loader/Loader";
import { useNavigate } from "react-router-dom";

export interface BannerMutation {
  name: string;
  images?: File | null | string;
}

export const AdminBannerPage = () => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(selectBannersAdmin);
  const loading = useAppSelector(selectBannerAdminLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <div>
        {banners.map((banner) => (
          <div className="relative" key={banner.id}>
            <button
              type="button"
              onClick={() =>
                navigate(`/admin_panel_banner/submit/${banner.id}`)
              }
              className="absolute top-[15px] right-[25px] bg-green text-white border-dashed font-semibold py-3 px-4 border border-black rounded"
            >
              Изменить
            </button>
            <p className="text-3xl">
              Баннер{" "}
              {banner.id === 1
                ? "Главный"
                : banner.id === 2
                  ? "Коллекция 1"
                  : banner.id === 3
                    ? "Коллекция 2"
                    : banner.id === 4
                      ? "Коллекция 3"
                      : " "}
              <img src={banner.images} alt="banner" />
            </p>
            <h2 className="text-[24px]">Название: {banner.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
