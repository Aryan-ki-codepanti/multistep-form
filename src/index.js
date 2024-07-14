import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StepProvider from "./Context/Step/StepProvider";
import FormProvider from "./Context/Form/FormProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StepProvider>
            <FormProvider>
                <App />
            </FormProvider>
        </StepProvider>
    </React.StrictMode>
);
