import React from "react"

import { useTranslation } from 'next-i18next';
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from "next/head";
import Carousel from "../components/Carousel";
import InfoHome from "../components/InfoHome";
import PortfolioHome from "../components/PortfolioHome";
import { fetchAPI } from "../lib/api";



const Home = ({  }) => {
  //('products', products)
  const projects = [];
  
  return (
    <>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Νεολαία Δερβιτσάνης</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

          <meta name="description" content={`Νεολαία Δερβιτσάνης`} />
         

        </Head>
        <Carousel />
        {/* <InfoHome /> */}
        <PortfolioHome projects={projects} />
        {/* <ExperienceHome />
       
        <TestimonialHome />
        <BlogHome />  */}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  // Run API calls in parallel
  const { locale } = context;
  const locales = {'el': 'el', 'sq': 'sq'};
 

  // const productsRes = await fetchAPI("/products", {
  //   populate: '*',
  //   locale: locales[locale]
  // });


  return {
    props: {
      // products: productsRes.data,
      // ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1, // In seconds
  };
}




export default (Home)
