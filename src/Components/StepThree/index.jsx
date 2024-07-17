import React, { useContext } from "react";
import "./StepThree.css";
import FormContext from "../../Context/Form/FormContext";
const StepThree = () => {
    const { plan } = useContext(FormContext);

    return (
        <div className="StepThree">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>

            <div className="checklist">
                <div className="checklist-option active">
                    <div className="tick"></div>
                    <div className="info">
                        <span>Online Service</span>
                        <span>Access to multiplayer games</span>
                    </div>
                    <span className="price">
                        {plan.billing === "monthly" ? "+$1/mo" : "+$10/yr"}
                    </span>
                </div>
                <div className="checklist-option">
                    <div className="tick"></div>
                    <div className="info">
                        <span>Larger Storage</span>
                        <span>Extra 1TB of cloud save</span>
                    </div>
                    <span className="price">
                        {plan.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
                    </span>
                </div>
                <div className="checklist-option">
                    <div className="tick"></div>
                    <div className="info">
                        <span>Customizable profile</span>
                        <span>Custom theme on your profile</span>
                    </div>
                    <span className="price">
                        {plan.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StepThree;
