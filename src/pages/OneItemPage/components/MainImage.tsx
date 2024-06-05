import { Heart } from "@phosphor-icons/react";
import { IProductDetail } from "@/pages/OneItemPage/types/IProductDetail";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import {
  createFavourite,
  deleteFavouriteMain,
} from "@/pages/MyRoomPage/api/personalThunk";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";
import { useCallback } from "react";
import { axiosApi } from "@/app/providers/http/axiosApi";
import { useParams } from "react-router-dom";

interface IMainImg {
  product: IProductDetail;
  mainImage: string;
  refreshProduct: (prod: IProductDetail) => void;
}

const MainImage = ({ product, mainImage, refreshProduct }: IMainImg) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const fetchOneProduct = useCallback(async () => {
    try {
      const response = await axiosApi.get<IProductDetail>(
        `/products/list/one/product/${id}/`,
      );
      refreshProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createHandle = async (id: number) => {
    await dispatch(createFavourite(id)).unwrap();
    await fetchOneProduct();
  };

  const deleteHandle = async (id: number) => {
    await dispatch(deleteFavouriteMain(id)).unwrap();
    await fetchOneProduct();
  };

  return (
    <div className="bg-secondary lg:bg-auto  relative max-w-[335px] sm:w-[500px] sm:max-h-[500px] rounded-[50px] border-amber-[rgba(207, 224, 250, 1)] border-[1px] border-solid overflow-hidden">
      <img
        className="mix-blend-darken"
        src={
          mainImage !== "https://back.queen-shops.com"
            ? mainImage
            : `https://back.queen-shops.com${product.images1}`
        }
        alt="item"
      />
      {product.is_favorite.some((userFa) => userFa.user === user?.user_id) ? (
        <button
          className="absolute bg-tertiary rounded-[42px] p-[6px] top-5 right-4 mt-2 mr-2"
          onClick={() => deleteHandle(product.id)}
        >
          <Heart size={30} color="red" weight="fill" />
        </button>
      ) : (
        <button
          className="absolute bg-tertiary rounded-[42px] p-[6px] top-5 right-4 mt-2 mr-2"
          onClick={() => createHandle(product.id)}
        >
          <Heart size={30} color="red" weight="regular" />
        </button>
      )}
    </div>
  );
};

export default MainImage;
