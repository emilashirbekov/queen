import {
  useAppDispatch,
  useAppSelector,
} from "@/app/providers/StoreProvider/config/hooks";
import { selectProducts } from "@/entities/Product/model/slice/productsSlice";
import {
  fetchCollection,
  updateCollection,
} from "@/entities/Collection/model/services/fetchCollection";
import { useEffect, useState } from "react";
import {
  selectCollections,
  selectCollectionsLoading,
} from "@/entities/Collection/model/slice/collectionSlice";
import { fetchProducts } from "@/entities/Product";
import { Link } from "react-router-dom";
import Loader from "@/shared/ui/Loader/Loader";

export const AdminCollectionPage = () => {
  const [collections, setCollections] = useState<number[]>([]);
  const products = useAppSelector(selectProducts);
  const collectionsData = useAppSelector(selectCollections);
  const status = useAppSelector(selectCollectionsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCollection());
  }, [dispatch]);

  const addToCollection = (id: number) => {
    setCollections((prevState) => [...prevState, id]);
  };

  const deleteFromCollection = (id: number) => {
    setCollections((prevState) => {
      const oldCollections = [...prevState];

      return oldCollections.filter((idColl) => idColl !== id);
    });
  };

  const refreshCollections = async () => {
    await dispatch(updateCollection({ id: 1, product: collections })).unwrap();
    await dispatch(fetchCollection()).unwrap();
    setCollections([]);
  };

  const clearCollections = async () => {
    await dispatch(updateCollection({ id: 1, product: [] })).unwrap();
    await dispatch(fetchCollection()).unwrap();
    setCollections([]);
  };

  if (status === "loading") {
    return <Loader />;
  }

  // @ts-ignore
  return (
    <div className="container mx-auto flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold">Товары</h2>
        <button
          className="admin-button"
          disabled={collections.length === 0}
          onClick={refreshCollections}
        >
          Обновить Коллекцию
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-24 justify-items-center">
        {products?.map((product) => (
          <li
            key={product.id}
            className="full-width flex flex-col items-center text-primary cursor-pointer"
          >
            <Link className="relative" to={`/catalog/one_item/${product.id}`}>
              <img
                src={product.images1}
                alt={product.title}
                className="h-[302px] w-[302px] object-cover rounded-3xl mb-4"
              />
              <p className="text-xl font-semibold mb-2">
                <span>Название</span> {product.title}
              </p>
            </Link>

            <div className="flexCenter gap-5">
              {!collections.includes(product.id) ? (
                <button
                  className="admin-button"
                  onClick={() => addToCollection(product.id)}
                >
                  добавить в коллекцию
                </button>
              ) : (
                <button
                  className="admin-button text-base"
                  onClick={() => deleteFromCollection(product.id)}
                >
                  удалить из коллекции
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold">Коллекция в главном меню</h2>
        <button className="admin-button" onClick={clearCollections}>
          очистить коллекцию
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-24 justify-items-center">
        {
          //@ts-ignore
          collectionsData.results &&
            //@ts-ignore
            collectionsData.results[0].products.map((product) => (
              <li
                key={product.id}
                className="full-width flex flex-col items-center text-primary cursor-pointer"
              >
                <Link
                  className="relative"
                  to={`/catalog/one_item/${product.id}`}
                >
                  <img
                    src={product.images1}
                    alt={product.title}
                    className="h-[302px] w-[302px] object-cover rounded-3xl mb-4"
                  />
                  <p className="text-xl font-semibold mb-2">
                    <span>Название</span> {product.title}
                  </p>
                </Link>

                {/*<div className="flexCenter gap-5">*/}
                {/*  {!collections.includes(product.id) ? (*/}
                {/*    <button*/}
                {/*      className="admin-button"*/}
                {/*      onClick={() => addToCollection(product.id)}*/}
                {/*    >*/}
                {/*      добавить в коллекцию*/}
                {/*    </button>*/}
                {/*  ) : (*/}
                {/*    <button*/}
                {/*      className="admin-button text-base"*/}
                {/*      onClick={() => deleteFromCollection(product.id)}*/}
                {/*    >*/}
                {/*      удалить из коллекции*/}
                {/*    </button>*/}
                {/*  )}*/}
                {/*</div>*/}
              </li>
            ))
        }
      </ul>
    </div>
  );
};
