import React, { useContext } from "react";
import "./StepTwo.css";
import FormContext from "../../Context/Form/FormContext";
import arcadeImg from "../../Images/icon-arcade.svg";
import advancedImg from "../../Images/icon-advanced.svg";
import proImg from "../../Images/icon-pro.svg";
import BillingSwitcher from "../BillingSwitcher";

const StepTwo = () => {
    const { plan, setPlan } = useContext(FormContext);

    return (
        <div className="StepTwo">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>

            <div className="type">
                <div
                    className={
                        plan.type === "arcade"
                            ? "type-card active"
                            : "type-card"
                    }
                    onClick={e =>
                        setPlan(prev => ({ ...prev, type: "arcade" }))
                    }
                >
                    <img src={arcadeImg} alt="arcade-image" />

                    <div className="type-info">
                        <p>Arcade</p>
                        {plan.billing === "monthly" ? (
                            <span>$9/mo</span>
                        ) : (
                            <>
                                <span>$90/yr</span> <span>2 months free</span>
                            </>
                        )}
                    </div>
                </div>
                <div
                    className={
                        plan.type === "advanced"
                            ? "type-card active"
                            : "type-card"
                    }
                    onClick={e =>
                        setPlan(prev => ({ ...prev, type: "advanced" }))
                    }
                >
                    <img src={advancedImg} alt="advanced-image" />

                    <div className="type-info">
                        <p>Advanced</p>
                        {plan.billing === "monthly" ? (
                            <span>$12/mo</span>
                        ) : (
                            <>
                                <span>$120/yr</span> <span>2 months free</span>
                            </>
                        )}
                    </div>
                </div>
                <div
                    className={
                        plan.type === "pro" ? "type-card active" : "type-card"
                    }
                    onClick={e => setPlan(prev => ({ ...prev, type: "pro" }))}
                >
                    <img src={proImg} alt="pro-image" />
                    <div className="type-info">
                        <p>Pro</p>
                        {plan.billing === "monthly" ? (
                            <span>$15/mo</span>
                        ) : (
                            <>
                                <span>$150/yr</span> <span>2 months free</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <BillingSwitcher />
        </div>
    );
};

export default StepTwo;
