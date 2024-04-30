import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

const CatalogHelmet: React.FC = () => {
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    return (
        <HelmetProvider>
            <Helmet>
                <title>{'Каталог | Магазин женской одежды Queen'}</title>
                <meta
                    name="description"
                    content={
                        'Изучайте стильные новинки женской одежды в нашем каталоге! От классических базовых вещей до ярких трендов сезона – у нас вы найдете все для создания идеального образа. Погрузитесь в мир моды и выберите лучшее для себя!'
                    }
                />
                <meta
                    name="keywords"
                    content={
                        'queen,queen shops,кюин,кюин шоп женская одежда, магазин женской одежды, одежда, интернет магазин, магазин,купить женскую одежду, купить одежду женскую,женская одежда каталог магазин бишкек,кюин женская одежда,купить в бишкеке женских одежд queen'
                    }
                />
                <link rel="canonical" href={canonicalUrl}/>
                <meta property="og:title" content={'Каталог Queen'}/>
                <meta
                    property="og:description"
                    content={'Большой выбор женской одежды в магазине Queen'}
                />
                <meta property="og:url" content={'https://queen-shops.com/catalog'}/>
                <meta property="og:site_name" content="https://queen-shops.com/catalog"/>
            </Helmet>
        </HelmetProvider>
    );
};

export default CatalogHelmet;
