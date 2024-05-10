import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

const CatalogHelmet: React.FC = () => {
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{"Каталог | Магазин женской одежды Queen"}</title>
        <meta
          name="description"
          content="Откройте двери в мир стиля и моды с каталогом Queen Shops - вашим гидом по самым актуальным трендам в женской одежде.
          Исследуйте наш разнообразный ассортимент, где каждая деталь представляет собой искусно созданный образ высокого качества и стиля.В нашем каталоге вы найдете все,
           что нужно для создания неповторимого образа - от повседневных вариантов до вечерних нарядов, от базовых элементов до элегантных аксессуаров.
            Погрузитесь в мир моды с Queen Shops и обновите свой гардероб уже сегодня!"/>
        <meta
          name="keywords"
          content={
            "queen,queen shops,кюин,кюин шоп женская одежда, магазин женской одежды, одежда, интернет магазин, магазин,купить женскую одежду, купить одежду женскую,женская одежда каталог магазин бишкек,кюин женская одежда,купить в бишкеке женских одежд queen"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={"Каталог Queen"} />
        <meta property="og:description"
          content="Откройте двери в мир стиля и моды с каталогом Queen Shops - вашим идеальным партнером в мире женской одежды в Бишкеке, Кыргызстане.
          В нашем магазине вы найдете широкий выбор модных трендов, созданных для того, чтобы подчеркнуть вашу индивидуальность и стиль. От повседневных нарядов
           до вечерних образов, наши товары отличаются высоким качеством и акцентируют внимание на каждой детали. Наслаждайтесь удобной доставкой по всему Кыргызстану
            и обновите свой гардероб с Queen Shops уже сегодня!"/>
        <meta property="og:url" content={"https://queen-shops.com/catalog"} />
      </Helmet>
    </HelmetProvider>
  );
};

export default CatalogHelmet;
