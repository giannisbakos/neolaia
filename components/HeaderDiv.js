import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useRouter } from 'next/router';
import { withTranslation } from "next-i18next"

const propTypes = {};

const defaultProps = {};
const  HeaderDiv = ({ t }) => {
    const router = useRouter()
    const [scrollClass, setScrollClass] = useState('');
    let pageClass;

    if(router.route.includes('products')){
        pageClass  = 'products_page';
    }

    if(router.route.includes('contact')){
        pageClass  = 'contact_page';
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setScrollClass('fixed');
            } else {
                setScrollClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);

    return (
        <React.Fragment>
            <div className={`container-fluid header ${scrollClass} ${pageClass}`}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row d-flex d-lg-flex d-md-flex b-b-1-white d-sm-flex topHeader">
                            <div className="col-lg-7 col-md-7 col-sm-7 col-12 text-left text-white center575">
                                <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
                                    <i className="fa fa-phone-alt text-white mr-2"></i>
                                    <small>+355694634850</small>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                                    <i className="fa fa-phone-alt text-white mr-2"></i>
                                    <small>+355696388739</small>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-12 text-right text-white center575 borderTop575">
                                <div className="d-inline-flex align-items-center py-2 px-3">
                                    <i className="fa-solid fa-location-dot text-white mr-2"></i>
                                    <small>{t('Goranxi, Gjirokaster Albania')}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex d-lg-flex d-md-flex d-sm-flex">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link legacyBehavior className="nav-item nav-link" href={'/'}>
                                        <a className="navbar-brand d-flex align-items-center justify-content-center" key={'/'}>
                                        </a>
                                    </Link>
                                    
                                    {/* Toggle button for smaller screens */}
                                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    
                                    {/* Collapsible content */}
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                                        <div className="navbar-nav py-0 justify-content-between">
                                            <Link legacyBehavior className="nav-item nav-link" href={'/'}>
                                                <a className="nav-item nav-link" key={'/'}>
                                                    {t('Kryesorja')}
                                                </a>
                                            </Link>
                                            <Link legacyBehavior className="nav-item nav-link" href={'/#about'}>
                                                <a className="nav-item nav-link" key={'/#about'}>
                                                    Ndrico2010
                                                </a>
                                            </Link>
                                            <Link legacyBehavior className="nav-item nav-link" href={'/products'}>
                                                <a className="nav-item nav-link" key={'/products'}>
                                                    {t('Produkte')}
                                                </a>
                                            </Link>
                                            <Link legacyBehavior className="nav-item nav-link" href={'/contact'}>
                                                <a className="nav-item nav-link" key={'/contact'}>
                                                    {t('Kontakti')}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <LanguageSwitcher />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

HeaderDiv.propTypes = propTypes;
HeaderDiv.defaultProps = defaultProps;

export default withTranslation()(HeaderDiv);
