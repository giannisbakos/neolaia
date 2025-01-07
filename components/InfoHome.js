import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"

const propTypes = {};

const defaultProps = {};

const InfoHome = ({t}) => {
    return (
        <React.Fragment>
              <section className="who_section" id="about">
                <div className="container">
                <div className="row">
                    {/* <div className="col-md-6">
                        <div className="img-box width100">
                            <img src="img/5157.jpg" alt="" className="img-fluid" />
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="detail-box">
                            <div className="heading_container ">
                                <h2 className="with_icon">
                                    {t("RRETH KOMPANISE")}
                                </h2>
                            </div>
                            <p className='mt-5 mb-2' style={{fontSize: '18px', lineHeight: '35px'}}>
                                <strong>Ndrico2010</strong> {t("është një kompani e njohur për aktivitetin e saj në gurore, ku merret me nxjerrjen, përpunimin dhe tregtimin e gurit natyral ne Dropull të Gjirokastrës. Me një traditë të gjatë në këtë industri, ajo ofron produkte të cilësisë së lartë për përdorim në ndërtim dhe projekte dekorative në Shqipëri dhe në vende të tjera.")} {t("Guroret e saj janë të pajisura me teknologji moderne, duke garantuar përpunimin e saktë dhe efikas të gurëve, të cilët plotësojnë standardet më të larta të industrisë. Profesionalizmi dhe përkushtimi ndaj cilësisë e bëjnë kompaninë")} <strong>Ndrico2010</strong> {t("një lider të besueshëm në tregun e gurëve natyralë.")}
                            </p>
                            {/* <p className='mt-1 mb-5'>
                                <strong>Ndrico2010</strong> {t(" është një kompani e themeluar në vitin 2010 nga dy vëllezër me një pasion të përbashkët për industrinë e gurit. Me një vizion të qartë për të sjellë në treg produkte cilësore dhe të qëndrueshme, ata kanë ngritur një biznes të suksesshëm që merret me nxjerrjen, përpunimin dhe tregtimin e gurit natyral. Përkushtimi i tyre ndaj cilësisë dhe inovacionit ka bërë që")}  <strong>Ndrico2010</strong> {t("të bëhet një emër i respektuar në industrinë e ndërtimit dhe dekorimit, duke ofruar zgjidhje të personalizuara për klientët e tyre.")}
                            </p> */}
                            {/* <div>
                                <a href="" className="btn btn-primary">Read more</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    );
}

InfoHome.propTypes = propTypes;
InfoHome.defaultProps = defaultProps;

export default withTranslation()(InfoHome)