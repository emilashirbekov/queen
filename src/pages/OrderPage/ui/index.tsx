import { useNavigate, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import {
  selectOrder,
  selectOrdersLoading,
} from "@/pages/MyRoomPage/model/slice/PersonalSlice";
import Loader from "@/shared/ui/Loader/Loader";
import { useEffect } from "react";
import { getSingleOrder } from "@/pages/MyRoomPage/api/personalThunk";
import dayjs from "dayjs";
import { BASE_URL } from "@/app/constants/contants";

export const OrderPage = () => {
  const { id } = useParams() as { id: string };
  const order = useAppSelector(selectOrder);
  const loading = useAppSelector(selectOrdersLoading);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleOrder(parseInt(id)));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (!order) {
    return <h2>Not found!</h2>;
  }

  const discount = order.products.reduce((sum, product) => {
    return sum + product.discount;
  }, 0);

  return (
    <div className="w-[90%] md:container mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mt-[123px] w-full rounded-[5px] p-[12px] bg-secondary md:hidden"
      >
        back
      </button>
      <div className="bg-secondary flex flex-col gap-y-[40px] py-[40px] px-[50px] my-[40px] rounded-[30px]">
        <div className="flex items-center justify-between md:justify-normal">
          <h2 className="uppercase text-[32px] font-semibold">
            заказ {order.id}
          </h2>
          {order.delivery_date !== null ? (
            <p className="font-semibold text-[16px] text-[#0246AC] md:hidden">
              Доставлен {dayjs(order.delivery_date).format("DD.MM.YYYY")}
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-5">
          <div className="col-span-2 grid gap-y-[40px] order-last md:order-first">
            {order.delivery_date !== null ? (
              <p className="font-semibold text-[16px] text-[#0246AC] hidden md:block">
                Доставлен {dayjs(order.delivery_date).format("DD.MM.YYYY")}
              </p>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px]">
              <div className="grid grid-cols-1 col-span-1 gap-y-10 md:grid-cols-2 md:col-span-2">
                <div className="flex flex-col gap-y-[12px]">
                  <h4 className="font-semibold text-primary">Пункт выдачи</h4>
                  <p className="w-full border-b pb-[25px] border-primary border-opacity-20 md:border-0 md:pb-0 md:max-w-[211px] text-primary font-normal text-[14px]">
                    {order.location}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[12px]">
                  <h4 className="font-semibold">Способ оплаты</h4>
                  <p className="w-full border-b pb-[25px] border-primary border-opacity-20 md:border-0 md:pb-0 text-primary font-normal text-[14px]">
                    {order.types}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 col-span-2">
                <div className="flex flex-col gap-y-[16px]">
                  <p className="text-[24px] text-primary font-semibold">
                    Скидка
                  </p>
                  <p className="text-[28px] text-red font-medium">
                    -{discount ? discount + " сом" : "Нет"}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[16px]">
                  <p className="text-[24px] text-primary font-semibold">
                    Итого
                  </p>
                  <p className="text-[28px] text-primary font-medium">
                    {order.price} сом
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex gap-x-[18px] flex-wrap gap-y-3">
              {order.products.map((product) => (
                <img
                  key={product.id}
                  className="bg-secondary border border-thirsty w-[65px] md:w-[124px] rounded-[5px] md:rounded-[25px]"
                  src={BASE_URL + product.images1}
                  alt="item"
                />
              ))}
            </div>
          </div>
          {/*<div className="mt-[30px]">*/}
          {/*  <h4 className="text-2xl">Детали заказа</h4>*/}
          {/*  {order.products.map((product) => (*/}
          {/*    <div>*/}
          {/*      <p>Название - {product.title}</p>*/}
          {/*      <p>Цена - {product.price}</p>*/}
          {/*      <p>*/}
          {/*        Размер -{" "}*/}
          {/*        {*/}
          {/*          //@ts-ignore*/}
          {/*          product.size[0].sizes*/}
          {/*        }*/}
          {/*      </p>*/}
          {/*      <p>*/}
          {/*        Цвет -{" "}*/}
          {/*        {*/}
          {/*          //@ts-ignore*/}
          {/*          product.color[0].colors*/}
          {/*        }*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};
