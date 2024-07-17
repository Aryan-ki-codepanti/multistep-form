import React, { useContext } from "react";
import StepContext from "../../Context/Step/StepContext";
import "./Steps.css";

const Steps = () => {
    const { step } = useContext(StepContext);

    return (
        <div className="step-box">
            <div className={step === 1 ? "step active" : "step"}>
                <div className="step-num">1</div>
                <div className="step-info">
                    <span>Step 1</span>
                    <span>Your Info</span>
                </div>
            </div>
            <div className={step === 2 ? "step active" : "step"}>
                <div className="step-num">2</div>
                <div className="step-info">
                    <span>Step 2</span>
                    <span>Select Plan</span>
                </div>
            </div>
            <div className={step === 3 ? "step active" : "step"}>
                <div className="step-num">3</div>
                <div className="step-info">
                    <span>Step 3</span>
                    <span>Add-ons</span>
                </div>
            </div>
            <div className={[4, 5].includes(step) ? "step active" : "step"}>
                <div className="step-num">4</div>
                <div className="step-info">
                    <span>Step 4</span>
                    <span>Summary</span>
                </div>
            </div>
        </div>
    );
};

export default Steps;
