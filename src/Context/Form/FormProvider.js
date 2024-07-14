import React, { useState } from "react";
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
    // stepOne
    const [formOne, setFormOne] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [formOneError, setFormOneError] = useState({
        name: false,
        email: false,
        phone: false
    });

    return (
        <FormContext.Provider
            value={{ formOne, setFormOne, formOneError, setFormOneError }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
