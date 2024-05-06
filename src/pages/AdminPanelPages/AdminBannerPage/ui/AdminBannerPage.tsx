import InputField from "@/shared/ui/Inputs/InputField";
import { useState } from "react";

export const AdminBannerPage = () => {
  const [bannerData, setBannerData] = useState({
    name: "",
    image: "",
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerData({ ...bannerData, name: e.target.value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBannerData({ ...bannerData, image: e.target.files[0] });
    } else {
      setBannerData({ ...bannerData, image: null });
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "85%", margin: "0 auto" }}>
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
        <label htmlFor="images1">{`Выберите фотографию`}</label>
        <InputField
          required={true}
          style="my-5"
          typeField=""
          type="file"
          name="images1"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
