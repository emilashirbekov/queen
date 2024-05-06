import { useAppDispatch } from "@/app/providers/StoreProvider/config/hooks";
import InputField from "@/shared/ui/Inputs/InputField";
import { useState } from "react";
import { postBanner } from "../api/BannerThunk";

export const AdminBannerPage = () => {
  const dispatch = useAppDispatch();
  const [bannerData, setBannerData] = useState({
    name: "",
    images: "",
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerData({ ...bannerData, name: e.target.value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file[0]) {
      setBannerData((prev) => ({...prev, images: files[0] }));
    }
  };

  const onSubmit = () => {
    dispatch(postBanner(bannerData))
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "100%" }}>
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
          onChange={handleImageChange}
          className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
        />
        <div className="py-5">
          <button
            onClick={onSubmit}
            className="text-blue-700 border-dashed font-semibold py-3 px-4 border border-black rounded"
          >
            selectImage
          </button>
        </div>
      </div>
    </div>
  );
};
