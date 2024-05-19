import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import InputField from "@/shared/ui/Inputs/InputField";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { getBanners, updateBanner } from "../api/BannerThunk";
import {
  selectBannerAdminLoading,
  selectBannersAdmin,
} from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import Loader from "@/shared/ui/Loader/Loader";

export interface BannerMutation {
  name: string;
  images: File | null | string;
}

export const AdminBannerPage = () => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(selectBannersAdmin);
  const [imageData, setImageData] = useState("");
  const imageSelect = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");
  const [bannerData, setBannerData] = useState<BannerMutation>({
    name: "",
    images: null,
  });
  const [status, setStatus] = useState(false);
  const loading = useAppSelector(selectBannerAdminLoading);

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  const changeBannerHandle = async (index: number) => {
    setBannerData((prevState) => ({
      ...prevState,
      ...banners[index],
    }));
    setFilename(banners[index].images);
    setImageData(banners[index].images);
    setStatus((prevState) => !prevState);
  };

  console.log(bannerData);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerData({ ...bannerData, name: e.target.value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setFilename(files[0].name);
      const imageUrl = URL.createObjectURL(files[0]);
      setImageData(imageUrl);
      setBannerData((prevState) => ({ ...prevState, [name]: files[0] }));
    }
  };

  const selectImage = () => {
    if (imageSelect.current) {
      imageSelect.current.click();
    }
  };

  const handleSubmit = async (event: FormEvent, id: number) => {
    event.preventDefault();
    await dispatch(updateBanner({ id, banner: bannerData })).unwrap();
    await dispatch(getBanners()).unwrap();
    setBannerData({
      name: "",
      images: null,
    });
    setImageData("");
    setFilename("");
    setStatus((prevState) => !prevState);
  };

  const clearImageField = () => {
    setFilename("");
    setImageData("");
    setBannerData((prevState) => ({
      ...prevState,
      images: null,
    }));
    if (imageSelect.current) {
      imageSelect.current.value = "";
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <div>
        {banners.map((banner, index) => (
          <div className="relative" key={banner.id}>
            {status ? null : (
              <button
                type="button"
                onClick={() => changeBannerHandle(index)}
                className="absolute top-[15px] right-[25px] text-blue-700 border-dashed font-semibold py-3 px-4 border border-black rounded"
              >
                Изменить
              </button>
            )}
            {status ? (
              <>
                <form
                  onSubmit={(event: FormEvent) =>
                    handleSubmit(event, banner.id)
                  }
                >
                  <InputField
                    required={true}
                    style="my-5"
                    typeField=""
                    name="name"
                    type="text"
                    placeholder={`Введите название банера`}
                    value={bannerData.name}
                    onChange={handleTextChange}
                  />
                  <input
                    type="file"
                    name="images"
                    ref={imageSelect}
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {filename.length !== 0 ? (
                    <div className="flex gap-x-3 relative">
                      <img src={imageData} alt="file" />
                      <button
                        className="bg-red absolute top-[15px] right-[25px] text-white px-3 py-2 rounded-[5px]"
                        type="button"
                        onClick={clearImageField}
                      >
                        clear
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={selectImage}
                      type="button"
                      className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
                    >
                      Photo
                    </button>
                  )}
                  <div className="py-5">
                    <button
                      type="submit"
                      className="text-blue-700 border-dashed font-semibold py-3 px-4 border border-black rounded"
                    >
                      Сохранить
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <p>
                  Баннер
                  <img src={banner.images} alt="banner" />
                </p>
                <h2 className="text-[24px]">Название: {banner.name}</h2>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
