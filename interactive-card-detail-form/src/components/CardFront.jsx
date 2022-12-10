import React, {useContext} from "react";
import logo from "../assests/card-logo.svg";
import FormContext from "../context/FormContext";

const CardFront = () => {
    const {displayCardNumber} = useContext(FormContext);


    return (
        <div className="card-front">
            <div className="card-front-content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-number">
                        <p>{displayCardNumber}</p>
                    </div>
                    <div className="card-holder-details">
                        <div className="card-holder-name"><p>STEVE SMITH</p></div>
                        <div className="card-expiry-date">
                            <p>12/20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardFront;
