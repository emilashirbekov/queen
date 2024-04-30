import { BurgerMenu } from "@/widgets/BurgerMenu";
import { UserPanel } from "@/widgets/UserPanel";
import {
  CaretDown,
  Heart,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import {useState} from "react";
import { Link } from "react-router-dom";
import openList from "../../../public/Icons/openBurgerMenu.svg";
import logo from "../../../public/logo.svg";
import cls from "./header.module.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const closeModal = ()=>{
    setMenu(false)
  }
  return (
    <div className={cls.header + " text-white py-5"}>
      <div className="max-w-[1270px] mx-auto px-[15px]">
        <div className="flex justify-between gap-[24px] items-center">
          <Link onClick={closeModal} to="/" className="logo ">
            <img
              src={logo}
              alt="Queen"
              className="w-[87px] h-[26px] sm:w-[121px] sm:h-[38px]"
              onClick={() => setBurgerMenu(false)}
            />
          </Link>
          <nav className="ms-[54px] hidden md:flex">
            <ul className="flex flex-wrap">
              <li className="flex flex-row">
                <Link onClick={closeModal} to="/catalog" className="px-4">
                  Каталог
                </Link>
                <CaretDown size={24} />
              </li>
              <li>
                <Link onClick={closeModal} to="/" className="py-3 px-4">
                  Главная
                </Link>
              </li>
              <li>
                <Link onClick={closeModal} to="/delivery" className="py-3 px-4">
                  Доставка
                </Link>
              </li>
              <li>
                <Link onClick={closeModal} to="/faq" className="py-3 px-4">
                  Оплата
                </Link>
              </li>
              <li>
                <Link onClick={closeModal} to="/about" className="py-3 px-4">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/faq" className="py-3 px-4">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center text-center" onClick={() => setBurgerMenu(false)}>
            <div>
              <button onClick={closeModal} className="flex w-[80px] h-[19px] sm:w-[145px] sm:h-[42px] sm:ps-[14px] sm:pe-[10px] sm:pt-[11px] sm:pb-[8px] rounded-[10px] border border-gray-300 mr-4">
                <MagnifyingGlass
                  size={24}
                  className="mx-[5px] pb-[5px] sm:me-[31px] sm:pb-0 sm:mx-0"
                />
                <span className="mb=[10px] text-xs sm:text-base pe-[16px] block">
                  Поиск
                </span>
              </button>
            </div>
            <div className="flex items-center">
              <div className="relative  md:block">
                <User
                  onClick={() => setMenu((prevState) => !prevState)}
                  className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] cursor-pointer"
                />
                {menu ? (
                  <div className="absolute  min-w-[274px] box-border top-[60px] left-[-230px] z-100">
                    <UserPanel
                      onClose={() => setMenu((prevState) => !prevState)}
                    />
                  </div>
                ) : null}
              </div>
              <Link onClick={closeModal} to="/my-room#3" className="ml-4">
                <Heart className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
              </Link>
              <Link onClick={closeModal} to="/basket" className="ml-4 relative">
                <ShoppingCartSimple className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
              </Link>
            </div>
          </div>
          {burgerMenu ? (
            <img
              src={openList}
              alt="open list"
              className="md:hidden cursor-pointer"
              onClick={() => setBurgerMenu((prevState) => !prevState)}
            />
          ) : (
            <List
              className="md:hidden cursor-pointer"
              size={24}
              onClick={() => setBurgerMenu((prevState) => !prevState)}
            />
          )}
          {burgerMenu ? (
            <div className="md:hidden absolute w-full h-full box-border top-[66px] right-[0] z-100">
              <BurgerMenu onClose={() => setBurgerMenu((prevState) => !prevState)} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
