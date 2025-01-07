import Head from "next/head";
import { product_categories } from "../../components/global_variables";
import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PortfolioHome from "../../components/PortfolioHome";
import Link from 'next/link';
import { fetchAPI } from "../../lib/api";




const Products = ({t, products }) => {
  
  // const jsxProducts = products.map((product) => {
    
  //   return (
  //     <>
  //       <Product product={product} key={product.slug} />
  //     </>
  //   );
  // });

  return (
    <>
      <Head>
        <title>Ndrico2010 | {t('Produkte')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t(`Ndrico 2010 është një kompani e njohur për aktivitetin e saj në gurore, ku merret me nxjerrjen, përpunimin dhe tregtimin e gurit natyral. Gurë dekorativ në Gjirokastër e Dropull.`)} />
        <meta name="keywords" content={t(`ndrico, ndritso, dervicjan, goranxi, guri, gur, gurore, gurë natyral, dervican, dropull`)} />
        <meta name="image" content={`https://www.ndrico2010.com/img/logoblack.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="container-fluid p-0" style={{background: `#212121`}}>
          <div class="row">
            <div className="col-md-12">
              <div className="p-5">
                  <h1 className="display-4 text-white mb-md-4">{t("Produkte")}
                  </h1>
              </div>
            </div>
          </div>          
      </div>
      <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="right-content">
                        <div className="row">
                          {products && products.map((product) => {
                              return (
                                  // <></>
                                  <div className="col-lg-4">
                                      <div className="right-first-image">
                                          <div className="thumb">
                                              <div className="inner-content">
                                                  <h4>{product.attributes.title}</h4>
                                              
                                              </div>
                                              <div className="hover-content">
                                                  <div className="inner">
                                                      <h4>{product.attributes.title}</h4>
                                                      
                                                      <div className="main-border-button">
                                                          <Link legacyBehavior  href={`/products/${product.attributes.slug}`}>
                                                              <a className="" key={'/'}>
                                                                  {t("Μë shumë")}
                                                              </a>
                                                          </Link>
                                                      </div>
                                                      
                                                  </div>
                                              </div>
                                              <img src={`https://ndrico2010.ovh${product.attributes.main_image.data.attributes.url}`} alt="website template image" />
                                          </div>
                                      </div>
                                  </div>
                                )
                          })}
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  const locales = {'el': 'el', 'sq': 'sq'};
 

  const productsRes = await fetchAPI("/products", {
    populate: '*',
    locale: locales[locale]
  });

  return {
    props: {
      products: productsRes.data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1, // In seconds
  };
}

export default withTranslation()(Products)