import { FC } from "react";
import { paymentMethodItem } from "./paymentMethod.constants";

export const PaymentMethod: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-[100px] px-[70px]">
      <div className="w-[1300px] h-[331px] rounded-[30px] bg-[#FAF8F4] px-[50px] py-[40px]">
        <h1 className="font-montserrat text-2xl font-semibold leading-[39.01px] text-[#212121]">
          НЕСКОЛЬКО СПОСОБОВ ОПЛАТЫ ЗА ЗАКАЗ ТОВАРА
        </h1>
        <div className="pt-[40px]">
          <h3 className="font-montserrat text-base font-semibold leading-[24.38px] pb-[20px]">
            ОПЛАТА ЧЕКОМ
          </h3>
          {paymentMethodItem?.map((item) => (
            <p
              key={item.number}
              className="font-montserrat text-base font-medium leading-[32px] text-left text-[#000000CC]"
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
