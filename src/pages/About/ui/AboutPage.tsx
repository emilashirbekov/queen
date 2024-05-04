import { Link } from "react-router-dom";
import AboutHelmet from "./AboutHelmet";

const AboutPage = () => {
  return (
    <>
      <AboutHelmet />
      <section className="bg-tertiary h-auto">
        <header className="bg-secondary h-48 flexCenter text-center mb-[100px]">
          <h1 className="text-base leading-7 lg:text-3xl text-primary max-w-[1062px] font-[500] uppercase lg:leading-10">
            Интернет-магазин Queen: Ваш проводник в мир стильной и доступной
            женской одежды!
          </h1>
        </header>
        <div className="padding-container flexCenter mb-[150px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-w-[992px]">
            <ul className="max-w-[460px]">
              <li className="text-base lg:text-3xl leading-7 text-primary font-semibold uppercase lg:leading-10 mb-3">
                Мы с любовью подбираем для вас модные коллекции
              </li>
              <li className="text-primary font-medium text-base mb-12">
                отвечающие последним трендам, но при этом не теряющие своей
                индивидуальности.
              </li>
              <li>
                <Link to={"/"} className="about-button">
                  Начать
                </Link>
              </li>
            </ul>
            <div>
              <img
                loading="lazy"
                className="rounded-[30px]"
                src="/about-1.jpg"
                alt="girl image"
              />
            </div>
          </div>
        </div>
        <div className="flexCenter padding-container">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[60px] max-w-[992px]">
            <div>
              <img
                loading="lazy"
                className="rounded-[30px]"
                src="/about-2.jpg"
                alt="girl image"
              />
            </div>
            <ul className="max-w-[460px]">
              <li className="text-base lg:text-3xl leading-7  text-primary font-semibold uppercase lg:leading-10 mb-3">
                В Queen вы найдете идеальный образ на любой случай
              </li>
              <li className="text-primary font-medium text-base mb-12">
                от уютных платьев для дома до элегантных костюмов для работы.
              </li>
              <li>
                <Link to={"/catalog"} className="about-button">
                  Найти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
