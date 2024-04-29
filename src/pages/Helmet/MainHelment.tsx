import {HelmetProvider} from "react-helmet-async";
import {Helmet} from "react-helmet";

const MainHelmet = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description"
                      content="Добро пожаловать в наш интернет-магазин женской одежды!
                       У нас вы найдете стильные и модные вещи для любого случая.
                       От классических повседневных нарядов до элегантных вечерних нарядов,
                        у нас есть все, чтобы подчеркнуть вашу индивидуальность и стиль.
                         Мы предлагаем широкий выбор размеров, цветов и фасонов,
                         чтобы каждая женщина могла найти что-то по своему вкусу.
                         Покупайте с удовольствием и легкостью, благодаря простому
                          интерфейсу и быстрой доставке прямо к вам домой.
                          Подчеркните свою красоту и уверенность вместе с нами!"/>
                <meta name="keywords"
                      content="queen,queen shops,кюин,кюин шоп,женская одежда queen, магазин женской одежды бишкек, женская одежда
          интернет кыргызстан, интернет магазин женской одежды queen shops, большая женская одежда бишкек, каталог женской одежды
          кыргызстан, сайт женской одежды queen shops, женская одежда официальный сайт бишкек, купить женскую одежду кыргызстан,
          женская одежда каталог магазин queen-shops, модная женская одежда бишкек, женская одежда кыргызстан, магазин женской
          одежды queen shops, женская одежда интернет бишкек, интернет магазин женской одежды кыргызстан, большая женская одежда
          queen shops, каталог женской одежды бишкек, сайт женской одежды кыргызстан, женская одежда официальный сайт queen shops, купить
          женскую одежду бишкек, женская одежда каталог магазин кыргызстан, модная женская одежда queen shops, женская одежда
          бишкек, магазин женской одежды кыргызстан, женская одежда интернет queen shops, интернет магазин женской одежды
          бишкек, большая женская одежда кыргызстан, каталог женской одежды queen shops, сайт женской одежды бишкек, женская
          одежда официальный сайт кыргызстан, купить женскую одежду queen shops,
          модная женская одежда кыргызстан"/>
                <meta name="url" content="https://queen-shops.com"/>
                <meta property="yandex_recommendations_title" content="Магазин женской одежды Queen"/>


                <meta name="og:title" content="Магазин женской одежды Queen"/>
                <meta name="og:decription" content="Добро пожаловать в наш интернет-магазин женской одежды! У нас вы найдете стильные и модные вещи для любого случая.
                       От классических повседневных нарядов до элегантных вечерних нарядов,у нас есть все, чтобы подчеркнуть вашу индивидуальность и стиль.Мы предлагаем широкий выбор размеров, цветов и фасонов,
                         чтобы каждая женщина могла найти что-то по своему вкусу.
                         Покупайте с удовольствием и легкостью, благодаря простому
                          интерфейсу и быстрой доставке прямо к вам домой.
                          Подчеркните свою красоту и уверенность вместе с нами!"/>
                <meta name="og:url" content="https://queen-shops.com"/>
                <meta property="og:site_name" content="https://queen-shops.com"/>

                <link rel="canonical" href="https://queen-shops.com"/>
            </Helmet>
        </HelmetProvider>
    );
};

export default MainHelmet;