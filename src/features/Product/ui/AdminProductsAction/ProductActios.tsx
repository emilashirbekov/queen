/* eslint-disable @typescript-eslint/ban-ts-comment */
import AddProductForm from "@/entities/Product/ui/AddProductForm/AddProductForm";
import { useGetCharacteristicsQuery } from "@/features/Characteristics/ui/model/services/characteristicsAPI";
import { useGetColorsQuery } from "@/features/Colors&Sizes/ui/model/services/colorsApi";
import { useGetSizesQuery } from "@/features/Colors&Sizes/ui/model/services/sizesApi";
import { useGetSubcategoriesQuery } from "@/features/SubCategories/ui/services/apiSubCategories";
import SuccessErrorMessage from "@/shared/ui/SuccessErrorMessage";
import RequestProcessing from "@/widgets/RequestProcessing/RequestProcessing";
import { ChangeEvent, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../model/services/productAPI";
import { useGetCategoriesQuery } from "@/features/Categories/ui/model/services/categoriesAPI";
import Loader from "@/shared/ui/Loader/Loader";

const ProductAction = () => {
  const { data: subCategories, isLoading, error } = useGetSubcategoriesQuery();
  const { data: categories } = useGetCategoriesQuery();
  const {
    data: colors,
    isLoading: colorsLoading,
    error: colorError,
  } = useGetColorsQuery();
  const {
    data: sizes,
    isLoading: sizesLoading,
    error: sizeError,
  } = useGetSizesQuery();
  const { data: characteristics } = useGetCharacteristicsQuery();

  const [createProduct, { isSuccess, error: productError }] =
    useCreateProductMutation();
  const [updateProduct, { isSuccess: updateSuccess, error: updateError }] =
    useUpdateProductMutation();

  const pathname = window.location.pathname;
  const { id } = useParams();
  const [productData, setProductData] = useState({
    subcategory: "Выберите категорию",
    title: "",
    price: "",
    description: "",
    brand: "",
    characteristics: [],
    images1: "",
    images2: "",
    images3: "",
    color: [],
    size: [],
    discount: "",
  });
  const imageSelect = useRef<HTMLInputElement>(null);
  const imageSelect2 = useRef<HTMLInputElement>(null);
  const imageSelect3 = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState("");
  const [filename2, setFilename2] = useState("");
  const [filename3, setFilename3] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleMultiSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setProductData({ ...productData, [name]: selectedValues });
  };

  const changeImageFiled = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      if (name === "images1") {
        setFilename(files[0].name);
      }
      if (name === "images2") {
        setFilename2(files[0].name);
      }
      if (name === "images3") {
        setFilename3(files[0].name);
      }
      setProductData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleSubmitFilters = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subcategory", productData.subcategory);
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("brand", productData.brand);
    productData.characteristics.forEach((characteristics) =>
      //@ts-ignore
      formData.append("characteristics", characteristics.toString()),
    );
    formData.append("images1", productData.images1);
    if (productData.images2) {
      formData.append("images2", productData.images2);
    }
    if (productData.images3) {
      formData.append("images3", productData.images3);
    }
    productData.color.forEach((color) =>
      //@ts-ignore
      formData.append("color", color.toString()),
    );
    productData.size.forEach((size) =>
      //@ts-ignore
      formData.append("size", size.toString()),
    );
    formData.append("discount", productData.discount);
    pathname.includes("change")
      ? updateProduct({ id: Number(id), updatedProduct: formData })
      : //@ts-ignore
        createProduct(formData);

    setFilename("");
    setFilename2("");
    setFilename3("");

    setProductData({
      subcategory: "Выберите категорию",
      title: "",
      price: "",
      description: "",
      brand: "",
      characteristics: [],
      images1: "",
      images2: "",
      images3: "",
      color: [],
      size: [],
      discount: "",
    });
  };

  const selectImage = () => {
    if (imageSelect.current) {
      imageSelect.current.click();
    }
  };

  const selectImage2 = () => {
    if (imageSelect2.current) {
      imageSelect2.current.click();
    }
  };

  const selectImage3 = () => {
    if (imageSelect3.current) {
      imageSelect3.current.click();
    }
  };

  const clearImageField = () => {
    setFilename("");
    setProductData((prevState) => ({
      ...prevState,
      images1: "",
    }));
    if (imageSelect.current) {
      imageSelect.current.value = "";
    }
  };

  const clearImage2Field = () => {
    setFilename2("");
    setProductData((prevState) => ({
      ...prevState,
      images2: "",
    }));
    if (imageSelect2.current) {
      imageSelect2.current.value = "";
    }
  };

  const clearImage3Field = () => {
    setFilename3("");
    setProductData((prevState) => ({
      ...prevState,
      images3: "",
    }));
    if (imageSelect3.current) {
      imageSelect3.current.value = "";
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  // @ts-ignore
  return (
    <>
      <AddProductForm
        colors={colors?.results}
        sizes={sizes?.results}
        filename={filename}
        filename2={filename2}
        filename3={filename3}
        imageSelect={imageSelect}
        imageSelect2={imageSelect2}
        imageSelect3={imageSelect3}
        characteristics={characteristics?.results}
        //@ts-ignore
        productData={productData}
        handleSubmitFilters={handleSubmitFilters}
        availableCategories={categories?.results}
        availableSubCategories={subCategories?.results}
        handleInputChange={handleInputChange}
        handleMultiSelect={handleMultiSelect}
        handleFileChange={changeImageFiled}
        selectImage={() => selectImage()}
        selectImage2={() => selectImage2()}
        selectImage3={() => selectImage3()}
        clearImage={() => clearImageField()}
        clearImage2={() => clearImage2Field()}
        clearImage3={() => clearImage3Field()}
      />
      <RequestProcessing
        isLoading={isLoading || colorsLoading || sizesLoading}
        error={error || colorError || sizeError}
      />
      <SuccessErrorMessage
        isSuccess={pathname.includes("change") ? updateSuccess : isSuccess}
        error={pathname.includes("change") ? updateError : productError}
        text={
          pathname.includes("change")
            ? "Товар успешно изменен !"
            : "Товар успешно добавлен !"
        }
      />
    </>
  );
};

export default ProductAction;
