import React, { useState } from "react";
import StepContext from "./StepContext";

const StepProvider = ({ children }) => {
    // 1 2 3 4
    const [step, setStep] = useState(1);

    return (
        <StepContext.Provider value={{ step, setStep }}>
            {children}
        </StepContext.Provider>
    );
};

export default StepProvider;
