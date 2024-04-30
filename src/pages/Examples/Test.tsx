import { useState } from "react";

const options = [
  { value: "china", label: "Китай", characteristic: "Страна" },
  { value: "italy", label: "Италия", characteristic: "Страна" },
  { value: "cotton", label: "Хлопок", characteristic: "Материал" },
  { value: "polyester", label: "Полиэстер", characteristic: "Материал" },
];

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    const index = selectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value,
    );
    if (index !== -1) {
      setSelectedOptions([
        ...selectedOptions.slice(0, index),
        ...selectedOptions.slice(index + 1),
      ]);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            checked={selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value,
            )}
            onChange={() => toggleOption(option)}
          />
          <label>{`${option.characteristic}: ${option.label}`}</label>
        </div>
      ))}
      <div>
        Выбранные характеристики:
        <ul>
          {selectedOptions.map((option) => (
            <li
              key={option.value}
            >{`${option.characteristic}: ${option.label}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
