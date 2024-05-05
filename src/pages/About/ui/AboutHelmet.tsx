import React from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

const AboutHelmet: React.FC = () => {
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{"О нас | Магазин женской одежды Queen"}</title>
        <meta
          name="description"
          content={
            "Интернет-магазин Queen: Ваш проводник в мир стильной и доступной женской одежды! Мы с любовью подбираем для вас модные коллекции отвечающие последним трендам, но при этом не теряющие своей индивидуальности."
          }
        />
        <meta
          name="keywords"
          content={
            "queen,queen shops,кюин,кюин шоп женская одежда, магазин женской одежды, одежда, интернет магазин, магазин,купить женскую одежду, купить одежду женскую,женская одежда каталог магазин бишкек,кюин женская одежда,купить в бишкеке женских одежд queen"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={"О нас | Queen"} />
        <meta
          property="og:description"
          content={"Большой выбор женской одежды в магазине Queen"}
        />
        <meta property="og:url" content={"https://queen-shops.com/about"} />
        <meta property="og:site_name" content="https://queen-shops.com/about" />
      </Helmet>
    </HelmetProvider>
  );
};

export default AboutHelmet;
