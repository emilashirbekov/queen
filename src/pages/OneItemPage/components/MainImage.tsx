import { Heart } from "@phosphor-icons/react";
import { IProductDetail } from "@/pages/OneItemPage/types/IProductDetail";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import {
  createFavourite,
  deleteFavourite,
} from "@/pages/MyRoomPage/api/personalThunk";
import { selectUser } from "@/pages/AuthPage/model/slice/authSlice";

interface IMainImg {
  product: IProductDetail;
  mainImage: string;
}

const MainImage = ({ product, mainImage }: IMainImg) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  console.log(product);

  return (
    <div className="bg-secondary lg:bg-auto  relative max-w-[335px] max-h-[335px] sm:w-[500px] sm:max-h-[500px] rounded-[50px] border-amber-[rgba(207, 224, 250, 1)] border-[1px] border-solid overflow-hidden">
      <img
        className="mix-blend-darken"
        src={
          mainImage !== "https://back.queen-shops.com"
            ? mainImage
            : `https://back.queen-shops.com${product.images1}`
        }
        alt="item"
      />
      {product.is_favorite.some((userFa) => userFa.id === user?.user_id) ? (
        <button
          className="absolute bg-tertiary rounded-[42px] p-[6px] top-5 right-4 mt-2 mr-2"
          onClick={() => dispatch(deleteFavourite(product.id))}
        >
          <Heart size={30} color="red" weight="fill" />
        </button>
      ) : (
        <button
          className="absolute bg-tertiary rounded-[42px] p-[6px] top-5 right-4 mt-2 mr-2"
          onClick={() => dispatch(createFavourite(product.id))}
        >
          <Heart size={30} color="red" weight="regular" />
        </button>
      )}
    </div>
  );
};

export default MainImage;
