// /posts/[slug].js
import Head from "next/head";
import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { product_categories } from '../../components/global_variables';
import Gallery from '../../components/gallery';
import { fetchAPI } from "../../lib/api";

const ProductPage = ({ product }) => {
  // console.log('post', product.attributes.photos)
  const { t } = useTranslation();


  return (
    <>

      <Head>
        <title>{product.attributes.title} | Ndrico2010 </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t(`Ndrico 2010 është një kompani e njohur për aktivitetin e saj në gurore, ku merret me nxjerrjen, përpunimin dhe tregtimin e gurit natyral. Gurë dekorativ në Gjirokastër e Dropull.`)} />
        <meta name="keywords" content={`${product.attributes.title}, ${t(`ndrico, ndritso, dervicjan, goranxi, guri, gur, gurore, gurë natyral, dervican, dropull`)}`} />
        <meta name="image" content={`https://www.ndrico2010.com/img/logoblack.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="container-fluid p-0" style={{background: `#212121`}}>
          <div class="row">
            <div className="col-md-12">
              <div className="p-5">
                  <h1 className="display-4 text-white mb-md-4">{product.attributes.title}
                  </h1>
              </div>
            </div>
          </div>          
      </div>
      <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Gallery photos={product.attributes.photos} />
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const productRes = await fetchAPI("/products", { fields: ["slug"] })

  return {
    paths: productRes.data.map((product) => ({
      params: {
        slug: product.attributes.slug,
      },
    })),
    fallback: "blocking",
    
  }
}

//access the router, get the id, and get the data for that post
export async function getStaticProps( context ) {
  //console.log(context);
  const { locale } = context;
  const {params} = context
  const locales = {'el': 'el', 'sq': 'sq'};
  const productRes = await fetchAPI("/products", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
    locale: locales[locale]
  }); 

  
  

  return {
    props: { 
      product: productRes.data[0],  
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
    
  }
}

export default withTranslation()(ProductPage)