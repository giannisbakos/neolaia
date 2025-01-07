import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head";


const Contact = ({t}) => {
    // const { t } = useTranslation();
    const Map = dynamic(() => import("../components/Map"), {
        ssr: false
    });
    return (
        <>
            <Head>
                <title>{t('Kontakti')} | Ndrico2010</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={t(`Ndrico 2010 është një kompani e njohur për aktivitetin e saj në gurore, ku merret me nxjerrjen, përpunimin dhe tregtimin e gurit natyral. Gurë dekorativ në Gjirokastër e Dropull.`)} />
                <meta name="keywords" content={t(`ndrico, ndritso, dervicjan, goranxi, guri, gur, gurore, gurë natyral, dervican, dropull`)} />
                <meta name="image" content={`https://www.ndrico2010.com/img/logoblack.png`} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="container-fluid" style={{background: `#212121`}}>
                <div class="row">
                    <div className="col-md-12">
                    <div className="p-5">
                        <h1 className="display-4 text-white mb-md-4">{t("Kontakti")}
                        </h1>
                    </div>
                    </div>
                </div>          
            </div>
            <div className="main-banner contact_wrapper" id="top" >
                <div className="container-fluid contact_page">
                    <div className="row">
                        <div className="col-md-6 left_contact">
                            <div className="contact_info">
                                <div className="address">
                                    <h3>{t("Adresa")}</h3>
                                    <span>{t("Goranxi, Gjirokaster Albania")}</span>
                                    <br/><a className="btn btn-primary btn-sm contact-button" href="https://www.google.com/maps/dir/?api=1&destination=40.021131, 20.187638" target="_blank">{t("Më ço")}</a>

                                </div>
                                <div className="phone">
                                    <h3>{t("Phone1")}</h3>
                                    <span>+355694634850</span>
                                    <br/><a href="tel:+355694634850" className="btn btn-primary btn-sm contact-button">
                                        {t("Telefononi")}
                                    </a>
                                </div>
                                <div className="phone border-left">
                                    <h3>{t("Phone2")}</h3>
                                    <span>+355696388739</span>
                                    <br/><a href="tel:+355696388739" className="btn btn-primary btn-sm contact-button">
                                        {t("Telefononi")}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 right_contact p-0">
                            <div className="map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const { locale } = context;

  
    return {
      props: {
        // products: productsRes.data,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: 1, // In seconds
    };
  }

export default withTranslation()(Contact);