import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import InputField from "@/shared/ui/Inputs/InputField";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { getSingleBanner, updateBanner } from "../api/BannerThunk";
import {
  selectBannerAdmin,
  selectBannerAdminLoading,
} from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import Loader from "@/shared/ui/Loader/Loader";

export const AdminBannerPage = () => {
  const dispatch = useAppDispatch();
  const imageSelect = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");
  const [bannerData, setBannerData] = useState({
    name: "",
    images: "",
  });
  const banner = useAppSelector(selectBannerAdmin);
  const loading = useAppSelector(selectBannerAdminLoading);

  useEffect(() => {
    dispatch(getSingleBanner());
  }, [dispatch]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerData({ ...bannerData, name: e.target.value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setFilename(files[0].name);
      setBannerData((prevState) => ({ ...prevState, [name]: files[0] }));
    }
  };

  const selectImage = () => {
    if (imageSelect.current) {
      imageSelect.current.click();
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await dispatch(updateBanner(bannerData)).unwrap();
    await dispatch(getSingleBanner()).unwrap();
    setBannerData({
      name: "",
      images: "",
    });
    setFilename("");
  };

  const clearImageField = () => {
    setFilename("");
    setBannerData((prevState) => ({
      ...prevState,
      images: "",
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
      <form onSubmit={handleSubmit}>
        <InputField
          required={true}
          style="my-5"
          typeField=""
          name="title"
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
          <div className="flex gap-x-3">
            <input type="text" value={filename} />
            <button
              className="bg-red text-white px-3 py-2 rounded-[5px]"
              type="button"
              onClick={clearImageField}
            >
              clear
            </button>
          </div>
        ) : (
          <button
            onClick={selectImage}
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
            Изменить
          </button>
        </div>
      </form>
      <div>
        <p>
          Баннер
          <img src={banner?.images} alt="banner" />
        </p>
        <h2 className="text-[24px]">Название: {banner?.name}</h2>
      </div>
    </div>
  );
};
