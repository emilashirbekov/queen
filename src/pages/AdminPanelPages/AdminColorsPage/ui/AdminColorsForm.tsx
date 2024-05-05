import { useCreateColorMutation } from "@/features/Colors&Sizes/ui/model/services/colorsApi";
import Button from "@/shared/ui/Buttons/Button";
import InputField from "@/shared/ui/Inputs/InputField";
import SuccessErrorMessage from "@/shared/ui/SuccessErrorMessage";
import { ChangeEvent, FormEvent, useState } from "react";

const AdminColorsForm = () => {
  const [createColor, { isSuccess, error: colorError }] =
    useCreateColorMutation();
  const [color, setColor] = useState({
    colors: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor({ ...color, colors: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    if (color.colors.includes(" ")) {
      setError("Недопустимые пробелы в названии!");
    } else {
      //@ts-ignore
      createColor(color);
      setColor({ colors: "" });
    }
  };
  setTimeout(() => setError(""), 4000);

  return (
    <div className="mb-5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-5 flex-wrap"
      >
        <InputField
          required
          value={color.colors}
          placeholder="Добавить цвет"
          type="text"
          typeField=""
          onChange={handleChange}
        />
        <span className="text-red font-bold">{error}</span>
        <Button type="submit" typeButton="" style="admin-button text-base">
          Добавить
        </Button>
        <span className="text-base font-bold text-primary">
          Цвета должны быть на английском языке !
        </span>
      </form>
      <SuccessErrorMessage
        text="Цвет удачно добавлен !"
        isSuccess={isSuccess}
        error={colorError}
      />
    </div>
  );
};

export default AdminColorsForm;
