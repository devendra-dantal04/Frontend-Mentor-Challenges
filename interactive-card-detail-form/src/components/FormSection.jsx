import React, {useState, useContext} from "react";
import FormContext from "../context/FormContext";

const FormSection = () => {
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiryMonth, setCardExpiryMonth] = useState("");
    const [cardExpiryYear, setCardExpiryYear] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [cardNumberErr, setCardNumberErr] = useState("");

    const {padcard, setdisplayCardNumber, displayCardNumber} = useContext(FormContext);

    const validateName = (e) => {
        var name = e.target.value;
        const pattern = /^[a-zA-Z\s]*$/;

        if(name.length > 20) {
            name = name.slice(0,20);
        }

        if(pattern.test(name)) {
            setCardHolderName(name);
        }
    };

    const validateNumber = (e) => {
        var number = e.target.value;
        const pattern = /^[0-9]*$/;

        if(!isNaN(number) && number.length >= 16) {
            number = number.slice(0,17);
            setdisplayCardNumber(padcard(number));
            setCardNumberErr("");
            setCardNumber(number);
        } else if(number.length < 16) {
            setdisplayCardNumber(padcard(number));
            setCardNumberErr("");
            setCardNumber(number);
        }

        if(isNaN(number)) {
            setCardNumberErr("Wrong format, number only.");
        }

        if(pattern.test(number)) {
            setCardNumber(number);
        }
    };




    

  return (
    <div className="form-section-content">
        <div className="input-card-holder-name flex">
            <label htmlFor="card-holder-name" >CARDHOLDER NAME</label>
            <input type="text" maxLength={30} onChange={validateName} value={cardHolderName} className="name input-style" name="card-holder-name" placeholder="e.g. Jane Appleseed"/>
        </div>
        <div className="input-card-number flex">
            <label htmlFor="card-number" >CARD NUMBER</label>
            <input type="text" maxLength={16} onChange={validateNumber} value={cardNumber} className="card-number input-style" name="card-number" placeholder="e.g. 1234 5678 9012 3456"/>
            {cardNumberErr && <p className="error">{cardNumberErr}</p>}
        </div>

        <div className="exp-dates-cvv-section grid-two-column">
            <div className="exp-dates-section">
                <label htmlFor="card-exp-date" >EXP DATE (MM/YY)</label>
                <div className="input-dates">
                    <input type="text" maxLength={2} className="exp-date input-style" name="card-exp-date" placeholder="MM"/>
                    <input type="text" maxLength={2} className="exp-date input-style" name="card-exp-date" placeholder="YY"/>
                </div>
            </div>
            <div className="cvv-section">
                <label htmlFor="card-cvv" >CVV</label>
                <input type="text" className="cvv input-style" name="card-cvv" placeholder="e.g. 123"/>
            </div>
        </div>
        <button className="confirm-button">
            Confirm
        </button>
    </div>
  );
};

export default FormSection;
