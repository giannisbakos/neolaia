import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "next-i18next"

const propTypes = {};

const defaultProps = {};

const Carousel = ({t}) => {
    return (
        <React.Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-height-fluid img-fluid width100" src="img/heroBanner.jpg" alt="Image" />
                            <div className="carousel-caption d-flex justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '1200px'}}>
                                    <h1 className="display-4 text-white mb-md-4">Νεολαία Δερβιτσάνης
                                    </h1>
                                    <h2 className=" text-white mb-md-4">Με όραμα, ενότητα και δράση!
                                    </h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;


export default withTranslation()(Carousel)