import { CategorysTypes } from "@/entities/Product/model/types/categorys.types";
import Button from "@/shared/ui/Buttons/Button";
import InputField from "@/shared/ui/Inputs/InputField";
// import Select from "@/shared/ui/Select";
import React, { ChangeEvent, FC, memo } from "react";

interface AddSubCategoryFormProps {
  handleSubmitCategories: (e: ChangeEvent<HTMLFormElement>) => void;
  subCategoryValue: { title: string; image: string; category: string };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  categories: CategorysTypes[] | undefined;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSelect: React.RefObject<HTMLInputElement>;
  filename: string;
  selectImage: () => void;
  clearImage: () => void;
}

export const AddSubCategoryForm: FC<AddSubCategoryFormProps> = memo((props) => {
  const {
    handleInputChange,
    handleSubmitCategories,
    // categories,
    subCategoryValue,
    handleFileChange,
    imageSelect,
    filename,
    selectImage,
    clearImage,
  } = props;

  return (
    <>
      <form onSubmit={handleSubmitCategories} encType="multipart/form-data">
        <InputField
          style="my-5"
          typeField=""
          name="title"
          type="text"
          placeholder="Введите название"
          value={subCategoryValue.title}
          onChange={handleInputChange}
        />
        <div className="flex flex-col gap-y-5 my-3">
          <input
            type="file"
            className="hidden"
            name="image"
            ref={imageSelect}
            onChange={handleFileChange}
          />
          {filename.length === 0 ? (
            <button
              type="button"
              onClick={selectImage}
              className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
            >
              Photo
            </button>
          ) : (
            <div className="flex gap-x-3">
              <input type="text" value={filename} />
              <button
                onClick={clearImage}
                type="button"
                className="bg-red text-white px-3 py-2 rounded-[5px]"
              >
                clear
              </button>
            </div>
          )}
        </div>

        {/*<Select*/}
        {/*  data={categories && categories.map((category) => category)}*/}
        {/*  value={subCategoryValue.category}*/}
        {/*  onChange={handleInputChange}*/}
        {/*  name="category"*/}
        {/*>*/}
        {/*  {subCategoryValue.category}*/}
        {/*</Select>*/}
        <Button style="admin-button text-base" typeButton="" type="submit">
          Добавить под категорию
        </Button>
      </form>
    </>
  );
});
