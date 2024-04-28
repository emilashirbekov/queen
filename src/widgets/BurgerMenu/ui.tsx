import { Link } from "react-router-dom";
import React from "react";
import { BurgerMenuModel } from "@/widgets/BurgerMenu/model";

export const BurgerMenu: React.FC<BurgerMenuModel> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full bg-secondary p-[10px] gap-y-[24px] pt-[24px]">
      <Link
        to="/faq"
        onClick={onClose}
        className="flex w-full gap-x-[16px] py-[14px] px-[24px] hover:bg-thirsty border-b-[0.5px] border-[#0000002E]"
      >
        <p className="text-[16px] font-semibold text-primary">Каталог</p>
      </Link>
      <Link
        to="/"
        onClick={onClose}
        className="flex w-full gap-x-[16px] py-[14px] px-[24px] hover:bg-thirsty border-b-[0.5px] border-[#0000002E]"
      >
        <p className="text-[16px] font-semibold text-primary">Главная</p>
      </Link>
      <Link
        to="/faq"
        onClick={onClose}
        className="flex w-full gap-x-[16px] py-[14px] px-[24px] hover:bg-thirsty border-b-[0.5px] border-[#0000002E]"
      >
        <p className="text-[16px] font-semibold text-primary">Доставка</p>
      </Link>
      <Link
        to="/faq"
        onClick={onClose}
        className="flex w-full gap-x-[16px] py-[14px] px-[24px] hover:bg-thirsty border-b-[0.5px] border-[#0000002E]"
      >
        <p className="text-[16px] font-semibold text-primary">Оплата</p>
      </Link>
      <Link
        to="/faq"
        onClick={onClose}
        className="flex w-full gap-x-[16px] py-[14px] px-[24px] hover:bg-thirsty border-b-[0.5px] border-[#0000002E]"
      >
        <p className="text-[16px] font-semibold text-primary">О нас</p>
      </Link>
    </div>
  );
};
