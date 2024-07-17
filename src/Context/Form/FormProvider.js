import React, { useState } from "react";
import FormContext from "./FormContext";
import { FormOneDefault, FormOneErrorDefault } from "../../Utils/InitialStates";

const FormProvider = ({ children }) => {
    // stepOne
    const [formOne, setFormOne] = useState(FormOneDefault);
    const [formOneError, setFormOneError] = useState(FormOneErrorDefault);

    // step two
    // type : arcade / advanced / pro
    // billing monthly / yearly
    const [plan, setPlan] = useState({
        type: "arcade",
        billing: "monthly"
    });

    // step three 3 checkbox state
    const [addOns, setAddOns] = useState({
        onlineService: false,
        storage: false,
        customizable: false
    });

    return (
        <FormContext.Provider
            value={{
                formOne,
                setFormOne,
                formOneError,
                setFormOneError,
                plan,
                setPlan,
                addOns,
                setAddOns
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
