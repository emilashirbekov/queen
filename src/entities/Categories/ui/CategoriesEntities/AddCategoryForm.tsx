import Button from "@/shared/ui/Buttons/Button";
import InputField from "@/shared/ui/Inputs/InputField";
import { ChangeEvent, FC, memo } from "react";

interface AddCategoryFormProps {
  handleSubmitCategories: (e: ChangeEvent<HTMLFormElement>) => void;
  categoryValue: { title: string; image: string };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation: string;
}

export const AddCategoryForm: FC<AddCategoryFormProps> = memo((props) => {
  const {
    handleInputChange,
    handleSubmitCategories,
    categoryValue,
    handleFileChange,
    validation,
  } = props;
  return (
    <>
      <form onSubmit={handleSubmitCategories} encType="multipart/form-data">
        <InputField
          required
          style="my-5"
          typeField=""
          name="title"
          type="text"
          placeholder="Введите название"
          value={categoryValue.title}
          onChange={handleInputChange}
        />
        <InputField
          required
          style="my-5"
          typeField=""
          type="file"
          name="image"
          onChange={handleFileChange}
        />
        <span className="text-red text-base">{validation}</span>
        <Button style="admin-button text-base" typeButton="" type="submit">
          Добавить категорию
        </Button>
      </form>
    </>
  );
});
