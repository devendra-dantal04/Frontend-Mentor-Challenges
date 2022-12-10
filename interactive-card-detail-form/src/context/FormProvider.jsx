
import { useState } from "react";
import FormContext from "./FormContext";

const FormProvider = ({children}) => {
    const [displayCardHolderName, setdisplayCardHolderName] = useState("");
    const [displayCardNumber, setdisplayCardNumber] = useState("Hello");
    const [displayCardExpiryDate, setdisplayCardExpiryDate] = useState("00/00");
    const [displayCardCvv, setdisplayCardCvv] = useState("");
        
    const creditcard = (val) => {
        return (
          val.substring(0, 4) +
          " " +
          val.substring(4, 8) +
          " " +
          val.substring(8, 12) +
          " " +
          val.substring(12, 16)
        );
      };

    const padcard = (val) => {
        val = (val || "0000000000000000").padEnd(16, "0");
        return creditcard(val);
    };




    return <FormContext.Provider value={{padcard, displayCardHolderName, displayCardNumber, displayCardExpiryDate, displayCardCvv, setdisplayCardHolderName, setdisplayCardNumber, setdisplayCardExpiryDate, setdisplayCardCvv}}>{children}</FormContext.Provider>;
}

export default FormProvider;