import React, { useContext } from "react";
import "./StepThree.css";
import FormContext from "../../Context/Form/FormContext";
const StepThree = () => {
    const { plan, addOns, setAddOns } = useContext(FormContext);

    return (
        <div className="StepThree">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>

            <div className="checklist">
                <div
                    className={
                        addOns.onlineService
                            ? "checklist-option active"
                            : "checklist-option"
                    }
                    onClick={e =>
                        setAddOns(prev => ({
                            ...prev,
                            onlineService: !prev.onlineService
                        }))
                    }
                >
                    <div className="tick"></div>
                    <div className="info">
                        <span>Online Service</span>
                        <span>Access to multiplayer games</span>
                    </div>
                    <span className="price">
                        {plan.billing === "monthly" ? "+$1/mo" : "+$10/yr"}
                    </span>
                </div>
                <div
                    className={
                        addOns.storage
                            ? "checklist-option active"
                            : "checklist-option"
                    }
                    onClick={e =>
                        setAddOns(prev => ({
                            ...prev,
                            storage: !prev.storage
                        }))
                    }
                >
                    <div className="tick"></div>
                    <div className="info">
                        <span>Larger Storage</span>
                        <span>Extra 1TB of cloud save</span>
                    </div>
                    <span className="price">
                        {plan.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
                    </span>
                </div>
                <div
                    className={
                        addOns.customizable
                            ? "checklist-option active"
                            : "checklist-option"
                    }
                    onClick={e =>
                        setAddOns(prev => ({
                            ...prev,
                            customizable: !prev.customizable
                        }))
                    }
                >
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
