import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {};

const defaultProps = {};

export default function FooterDiv(props) {
    return (
        <React.Fragment>
           
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: '#3E3E4E !important'}}>
                <div className="row">
                    
                    <div className="col-lg-12 text-center text-md-center">
                        <p className="m-0 text-white">&copy; Neolaia-derbitsanis.gr. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

FooterDiv.propTypes = propTypes;
FooterDiv.defaultProps = defaultProps;