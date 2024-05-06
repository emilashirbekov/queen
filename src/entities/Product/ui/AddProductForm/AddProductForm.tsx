/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SubCategory } from "@/features/Categories/ui/model/types/subCategory.types";
import { CharacteristicsTypes } from "@/features/Characteristics/ui/model/types/characteristics.types";
import {
  ColorTypes,
  SizesTypes,
} from "@/features/Colors&Sizes/ui/model/types/types";
import Button from "@/shared/ui/Buttons/Button";
import InputField from "@/shared/ui/Inputs/InputField";
import Select from "@/shared/ui/Select";
import React, { ChangeEvent } from "react";
import { ProductType } from "../../model/types/product.types";
import { CategorysTypes } from "@/entities/Product/model/types/categorys.types";

interface AddProductFormProps {
  availableSubCategories: SubCategory[] | undefined;
  availableCategories: CategorysTypes[] | undefined;
  handleSubmitFilters: (e: ChangeEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleMultiSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  productData: ProductType;
  characteristics: CharacteristicsTypes[] | undefined;
  colors: ColorTypes[] | undefined;
  sizes: SizesTypes[] | undefined;
  imageSelect: React.RefObject<HTMLInputElement>;
  imageSelect2: React.RefObject<HTMLInputElement>;
  imageSelect3: React.RefObject<HTMLInputElement>;
  selectImage: () => void;
  selectImage2: () => void;
  selectImage3: () => void;
  clearImage: () => void;
  clearImage2: () => void;
  clearImage3: () => void;
  filename: string;
  filename2: string;
  filename3: string;
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  characteristics,
  availableSubCategories,
  handleSubmitFilters,
  handleInputChange,
  handleMultiSelect,
  productData,
  handleFileChange,
  colors,
  sizes,
  imageSelect,
  imageSelect2,
  imageSelect3,
  selectImage,
  selectImage2,
  selectImage3,
  clearImage,
  clearImage2,
  clearImage3,
  filename,
  filename2,
  filename3,
}) => {
  const pathname = window.location.pathname;

  return (
    <form onSubmit={handleSubmitFilters}>
      <InputField
        required={true}
        style="my-5"
        typeField=""
        name="title"
        type="text"
        placeholder={`${pathname.includes("change") ? "Введите новое название" : "Введите название"}`}
        value={productData.title}
        onChange={handleInputChange}
      />
      <InputField
        required={true}
        placeholder={`${pathname.includes("change") ? "Введите новую цену" : "Введите цену"}`}
        style="my-5"
        typeField=""
        name="price"
        type="number"
        value={productData.price}
        onChange={handleInputChange}
      />
      <InputField
        required={true}
        style="my-5"
        typeField=""
        name="brand"
        type="text"
        placeholder={`${pathname.includes("change") ? "Введите новый брэнд" : "Введите брэнд"}`}
        value={productData.brand}
        onChange={handleInputChange}
      />
      <div className="flex flex-col gap-y-5 my-3">
        <label htmlFor="images1">
          {`${pathname.includes("change") ? "Выберите новую картинку" : "Выберите картинку(обязательно)"}`}
        </label>
        <input
          type="file"
          className="hidden"
          name="images1"
          ref={imageSelect}
          onChange={handleFileChange}
        />
        {filename.length === 0 ? (
          <button
            type="button"
            onClick={selectImage}
            className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
          >
            Photo 1
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
      <div className="flex flex-col gap-y-5 my-3">
        <label htmlFor="images2">
          {`${pathname.includes("change") ? "Выберите новую картинку" : "Выберите картинку(не обязательно)"}`}
        </label>
        <input
          type="file"
          className="hidden"
          name="images2"
          ref={imageSelect2}
          onChange={handleFileChange}
        />
        {filename2.length === 0 ? (
          <button
            type="button"
            onClick={selectImage2}
            className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
          >
            Photo 2
          </button>
        ) : (
          <div className="flex gap-x-3">
            <input type="text" value={filename2} />
            <button
              type="button"
              onClick={clearImage2}
              className="bg-red text-white px-3 py-2 rounded-[5px]"
            >
              clear
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-5 my-3">
        <label htmlFor="images3">
          {`${pathname.includes("change") ? "Выберите новую картинку" : "Выберите картинку(не обязательно)"}`}
        </label>
        <input
          type="file"
          className="hidden"
          name="images3"
          ref={imageSelect3}
          onChange={handleFileChange}
        />
        {filename3.length === 0 ? (
          <button
            type="button"
            onClick={selectImage3}
            className="text-blue-700 border-dashed font-semibold py-2 px-4 border border-black rounded"
          >
            Photo 3
          </button>
        ) : (
          <div className="flex gap-x-3">
            <input type="text" value={filename3} />
            <button
              type="button"
              onClick={clearImage3}
              className="bg-red text-white px-3 py-2 rounded-[5px]"
            >
              clear
            </button>
          </div>
        )}
      </div>

      <InputField
        required={true}
        style="my-5"
        typeField=""
        name="description"
        type="text"
        placeholder={`${pathname.includes("change") ? "Введите новое описание" : "Введите описание"}`}
        value={productData.description}
        onChange={handleInputChange}
      />
      <InputField
        placeholder={`${pathname.includes("change") ? "Введите новую скидку" : "Введите скидку"}`}
        style="my-5"
        typeField=""
        name="discount"
        type="number"
        value={productData.discount}
        onChange={handleInputChange}
      />
      <div className="flex gap-5 flex-wrap items-start">
        <select
          className="border rounded py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
          id="size"
          name="size"
          multiple
          //@ts-ignore
          value={productData.size}
          onChange={handleMultiSelect}
        >
          {sizes?.map((size) => (
            <option key={size.id} value={size.id}>
              {size.sizes}
            </option>
          ))}
        </select>
        <select
          className="border rounded py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
          id="color"
          name="color"
          multiple
          //@ts-ignore
          value={productData.color}
          onChange={handleMultiSelect}
        >
          {colors?.map((color) => (
            <option key={color.id} value={color.id}>
              {color.colors}
            </option>
          ))}
        </select>
        <select
          className="border rounded py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
          id="characteristics"
          name="characteristics"
          multiple
          //@ts-ignore
          value={productData.characteristics}
          onChange={handleMultiSelect}
        >
          {characteristics?.map((characteristic) => (
            <option key={characteristic.id} value={characteristic.id}>
              <>{characteristic.title}</>:<>{characteristic.value}</>
            </option>
          ))}
        </select>
        <Select
          multipleType={true}
          data={
            availableSubCategories &&
            availableSubCategories.map((filter) => filter)
          }
          name="subcategory"
          //@ts-ignore
          value={productData.subcategory}
          onChange={handleInputChange}
        >
          {productData.subcategory}
        </Select>
        {/*<Select*/}
        {/*  multipleType={true}*/}
        {/*  data={*/}
        {/*    availableCategories && availableCategories.map((filter) => filter)*/}
        {/*  }*/}
        {/*  name="subcategory"*/}
        {/*  //@ts-ignore*/}
        {/*  value={productData.subcategory}*/}
        {/*  onChange={handleInputChange}*/}
        {/*>*/}
        {/*  {productData.subcategory}*/}
        {/*</Select>*/}
      </div>

      <Button type="submit" typeButton="" style="admin-button !text-base ">
        {pathname.includes("change") ? "Изменить" : "Добавить"}
      </Button>
    </form>
  );
};

export default AddProductForm;
