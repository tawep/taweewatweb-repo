import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import './Aboutme.css'
class Disp_contract extends React.Component {
    render() {
        const {phone, mail, isLoading } = this.props;

        const userDetails = (
            <div className="container wrapper">
                <div className="row">
                    <div className="col-sm">
                        <div className="margin-5px">
                            <div className="box-shadow">
                                <div className="headnoteblue">
                                    <h3>Contract</h3>
                                </div>
                                <div className="bodynote">
                                    <h5>
                                        Room 215 Floor 2 161/4 Soi Bun Yu, Samsen Nai Subdistrict, Phaya Thai District, Bangkok<br />
                                        Phone: {phone}<br />
                                        E-mail: {mail}<br />
                                        Line: bom-it<br />
                                        Facebook: Taweewat Phimhin
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );

        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

        return (
            <div>
                    {isLoading ? loadingMessage : userDetails}
            </div>
        );
    }
}

Disp_contract.propTypes = {
    phone: PropTypes.string,
    mail: PropTypes.string,
    isLoading: PropTypes.bool
};

export default Disp_contract;
