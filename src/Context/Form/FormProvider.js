import React, { useState } from "react";
import FormContext from "./FormContext";
import { FormOneDefault, FormOneErrorDefault } from "../../Utils/InitialStates";

const FormProvider = ({ children }) => {
    // stepOne
    const [formOne, setFormOne] = useState(FormOneDefault);

    const [formOneError, setFormOneError] = useState(FormOneErrorDefault);

    return (
        <FormContext.Provider
            value={{ formOne, setFormOne, formOneError, setFormOneError }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
