/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AddSubCategoryForm } from "@/entities/Categories";
import { useCreateSubcategoryMutation } from "@/features/SubCategories/ui/services/apiSubCategories";
import { ChangeEvent, useRef, useState } from "react";
import { useGetCategoriesQuery } from "../model/services/categoriesAPI";
import SuccessErrorMessage from "@/shared/ui/SuccessErrorMessage";
import RequestProcessing from "@/widgets/RequestProcessing/RequestProcessing";

export const AddSubCategory = () => {
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  const [createSubcategory, { isSuccess, error: subcategoryError }] =
    useCreateSubcategoryMutation();
  const [subCategoryValue, setSubCategoryValue] = useState({
    title: "",
    image: "",
    category: "",
  });
  const imageSelect = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSubCategoryValue({ ...subCategoryValue, [name]: value });
  };

  const selectImage = () => {
    if (imageSelect.current) {
      imageSelect.current.click();
    }
  };

  const changeImageFiled = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setFilename(files[0].name);
      setSubCategoryValue((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const clearImageField = () => {
    setFilename("");
    setSubCategoryValue((prevState) => ({
      ...prevState,
      image: "",
    }));
    if (imageSelect.current) {
      imageSelect.current.value = "";
    }
  };

  const handleSubmitCategories = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", subCategoryValue.title);
    formData.append("image", subCategoryValue.image);
    // formData.append("category", subCategoryValue.category);
    //@ts-ignore
    createSubcategory(formData);
    setFilename("");
    if (imageSelect.current) {
      imageSelect.current.value = "";
    }
    setSubCategoryValue({
      title: "",
      image: "",
      category: "Выберите категорию",
    });
  };

  return (
    <>
      <AddSubCategoryForm
        categories={categories?.results}
        subCategoryValue={subCategoryValue}
        handleFileChange={changeImageFiled}
        handleInputChange={handleInputChange}
        handleSubmitCategories={handleSubmitCategories}
        imageSelect={imageSelect}
        filename={filename}
        selectImage={() => selectImage()}
        clearImage={() => clearImageField()}
      />
      <RequestProcessing isLoading={isLoading} error={error} />
      <SuccessErrorMessage
        text="Под категория успешно добавлена !"
        error={subcategoryError}
        isSuccess={isSuccess}
      />
    </>
  );
};
