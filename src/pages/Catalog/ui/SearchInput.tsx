import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

interface SearchInput {
  text: string;
}

const SearchInput = () => {
  const [state, setState] = useState<SearchInput>({
    text: "",
  });
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div className="max-container padding-container mt-14">
      <div className="max-w-[730px] flex rounded-[10px] mb-8">
        <input
          className="border-[1px] justify-between items-center rounded-tl-[10px] rounded-bl-[10px] bg-white ps-[16px] lg:pe-[540px] h-[52px] md:pe-[400px] sm:pe-[200px]"
          name="text"
          type="text"
          onChange={inputChangeHandler}
          placeholder="Найти одежду..."
          value={state.text}
          style={{ outline: "none" }}
        />
        <button className="px-[20px] bg-black border-[1px] rounded-tr-[10px] rounded-br-[10px]">
          <MagnifyingGlass size={24} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
