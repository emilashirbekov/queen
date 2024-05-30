import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectBannerAdmin } from "@/pages/AdminPanelPages/AdminBannerPage/model/slice/BannerSlice";
import { BannerMutation } from "@/pages/AdminPanelPages/AdminBannerPage/ui/AdminBannerPage";
import {
  getBanners,
  getSingleBanner,
  postBanner,
  updateBanner,
} from "@/pages/AdminPanelPages/AdminBannerPage/api/BannerThunk";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "@/shared/ui/Inputs/InputField";

export const AdminBannerForm = () => {
  const dispatch = useAppDispatch();
  const banner = useAppSelector(selectBannerAdmin);
  const [imageData, setImageData] = useState("");
  const imageSelect = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");
  const [bannerData, setBannerData] = useState<BannerMutation>({
    name: "",
    images: null,
  });
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getSingleBanner(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && banner) {
      setBannerData((prevState) => ({
        ...prevState,
        ...banner,
      }));
      setFilename(banner.images);
      setImageData(banner.images);
    }
  }, [id, banner]);

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!id) {
      await dispatch(postBanner(bannerData));
    } else {
      if (filename === imageData) {
        await dispatch(
          updateBanner({ id, banner: { name: bannerData.name } }),
        ).unwrap();
      } else {
        await dispatch(updateBanner({ id, banner: bannerData })).unwrap();
      }
    }
    await dispatch(getBanners()).unwrap();
    setBannerData({
      name: "",
      images: null,
    });
    setImageData("");
    setFilename("");
    navigate("/admin_panel_banner");
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

  return (
    <form onSubmit={handleSubmit}>
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
          {id ? "Сохранить" : "Создать"}
        </button>
      </div>
    </form>
  );
};
