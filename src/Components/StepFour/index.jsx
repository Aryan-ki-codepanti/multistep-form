import React, { useContext } from "react";
import "./StepFour.css";
import FormContext from "../../Context/Form/FormContext";
import StepContext from "../../Context/Step/StepContext";
import { calculateBill, prices, shortener } from "../../Utils/Pricing";

const StepFour = () => {
    const { plan, addOns } = useContext(FormContext);
    const { setStep } = useContext(StepContext);

    return (
        <div className="StepFour">
            <h1>Finishing Up</h1>
            <p>Double-check everything looks OL before confirming.</p>

            <div className="summary-box">
                <div className="planSum">
                    <div className="planSum_name">
                        <span>
                            {plan.type} ({plan.billing})
                        </span>
                        <span onClick={e => setStep(prev => 2)}>Change</span>
                    </div>
                    <span className="planSum_price">
                        ${prices[plan.type][plan.billing]}/
                        {shortener(plan.billing)}
                    </span>
                </div>
                <hr />
                <div className="addonSum">
                    {addOns.onlineService && (
                        <div className="addonSum_item">
                            <span>Online service</span>
                            <span>
                                +${prices.onlineService[plan.billing]}/
                                {shortener(plan.billing)}
                            </span>
                        </div>
                    )}
                    {addOns.storage && (
                        <div className="addonSum_item">
                            <span>Larger Storage</span>
                            <span>
                                +${prices.storage[plan.billing]}/
                                {shortener(plan.billing)}
                            </span>
                        </div>
                    )}
                    {addOns.customizable && (
                        <div className="addonSum_item">
                            <span>Customizable Profile</span>
                            <span>
                                +${prices.customizable[plan.billing]}/
                                {shortener(plan.billing)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="finalSum">
                <span>
                    Total(per {plan.billing.substr(0, plan.billing.length - 2)})
                </span>
                <span>
                    ${calculateBill(plan, addOns)}/{shortener(plan.billing)}
                </span>
            </div>
        </div>
    );
};

export default StepFour;
