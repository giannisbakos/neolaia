import React from "react"
import Link from "next/link";
import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media"
import { GlobalContext } from "../pages/_app";
import { useContext } from "react";
import { withTranslation } from "next-i18next"
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Footer = ({menu, t}) => {
    const global = useContext(GlobalContext);

    let menuItems;
    let exists ;
    if(menu[0] == undefined){
        exists = 0;
    }
    else{
        exists = 1;
        menuItems = menu[0].attributes.menuItem; 
    }
    
    return (
        <div className="container-fluid footer">
                
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        {/* <div className="col-md-3 logo_footer_container">
                            <div className="footer_logo">
                                <Link legacyBehavior  href={`/`}>
                                    <a>
                                        <img src={getStrapiMedia(global.logo)} alt="Logo" />
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                        <div className="col-md-4">
                            <div className="footer_box">
                                <h2>{t('Πληροφορίες')}</h2>
                                <ul>
                                    {exists && menuItems.map((menuItem) => {
                                // console.log(menuItem.Submenu);
                                    return (
                                        <li key={menuItem.id}>
                                            <Link legacyBehavior  key={menuItem.id} href={menuItem.url ? menuItem.url : ''}>
                                                <a>{menuItem.title}</a>
                                                
                                            </Link>
                                       
                                        </li> 
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer_box">
                                <h2>{t('Επικοινωνία')}</h2>
                                <ul>
                                    <li><strong>{t('Διέυθυνση:')}</strong> {t('11 Ιανουαρίου, Αργυρόκαστρο')}</li>
                                    <li><strong>{t('Τηλ:')}</strong>(00355) 08426 4266</li>
                                    <li><strong>{t('Φαξ:')}</strong>(00355 08426 3773)</li>
                                    <li><strong>Email:</strong> mitropolia.gjirokaster@yahoo.com</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="footer_box">
                                <h2>{t('Σχετικοί σύνδεσμοι')}</h2>
                                <ul>
                                    <li>
                                        <Link legacyBehavior  key="footer-1" href="https://orthodoxalbania.org/">
                                            <a target="_blank" href="https://orthodoxalbania.org">{t('Ορθόδοξος Αυτοκέφαλος Εκκλησία της Αλβανίας')}</a>   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  key="footer-1" href="https://www.fdcollege.eu/">
                                            <a target="_blank" href="https://www.fdcollege.eu/">{t('Κολλέγιο Πνοή Αγάπης')}</a>   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  key="footer-1" href="https://9-hrono.eu">
                                            <a target="_blank" href="https://9-hrono.eu">{t('Εκπαιδευτήρια Πνοή Αγάπης')}</a>   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior  key="footer-1" href="http://kulogos.edu.al/">
                                            <a target="_blank" href="http://kulogos.edu.al">{t('Πανεπιστημιακό Κολλέγιο Λόγος')}</a>   
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default  withTranslation()(Footer);
