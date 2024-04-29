import React from "react";
import deliveryImg from "../../../../public/deliveryImage.svg";
import deliveryImgSecond from "../../../../public/deliveryImgSecond.svg";
import Button from "@/shared/ui/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const DeliveryPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-center pt-[100px]">
        <img src={deliveryImg} alt="delivery" />
      </div>
      <div className="px-[265px] pt-[50px] pb-[114px]">
        <div className="w-full flex flex-col gap-[8px] pb-[30px]">
          <h3 className="font-montserrat text-2xl font-bold leading-10 text-left">
            КАК ОФОРМИТЬ ДОСТАВКУ?
          </h3>
          <p className="font-montserrat text-base font-medium leading-[32px] text-left">
            Вам нужно выбрать товар и нажать на кнопку заказать, далее зайти в
            главную
            <br /> страницу и найти корзину, войдя вам выходит, то что вы хотели
            заказать.
            <br /> Далее вам необходимо ввести свои данные и воспроизвести
            оплату, ваш заказ
            <br /> подтвердят и вы получаете свой заказ
          </p>
        </div>
        <div className="w-full flex flex-col gap-[8px] pb-[50px]">
          <h3 className="font-montserrat text-2xl font-bold leading-10 text-left">
            ДЛИТЕЛЬНОСТЬ ДОСТАВКИ
          </h3>
          <p className="font-montserrat text-base font-medium leading-[32px] text-left">
            Доставка осуществляется через курьерские службы и Яндекс такси, для
            вашего
            <br /> удобства мы пытаемся совершить доставку в ближайшее вас время
            и заранее
            <br /> уточняем у вас во сколько вам удобно
          </p>
        </div>
        <div className="flex gap-[48px] items-center">
          <div className="w-[90%]">
            <img src={deliveryImgSecond} alt="delivery" />
          </div>
          <div>
            <h3 className="font-montserrat text-2xl font-semibold leading-10 text-left">
              КАК СОВЕРШИТЬ
              <br /> ДОСТАВКУ
            </h3>
            <p className="w-[356px] pt-[10px] pb-[38px] font-montserrat text-base font-medium leading-[32px] text-left">
              Ваш нужно перейти на страницы
              <br /> наши рекомендации, на каталог,
              <br /> где вы найдёте наши товары.
              <br /> Далее вы можете просматривать
              <br /> все наши товары.
            </p>
            <Button
              typeButton="primary"
              type="button"
              style="w-[358px]"
              onClick={() => navigate("/orders")}
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
