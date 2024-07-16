import React, { useContext } from "react";
import "./BillingSwitcher.css";
import FormContext from "../../Context/Form/FormContext";

const BillingSwitcher = () => {
    const { plan, setPlan } = useContext(FormContext);

    const handleBillingChange = e => {
        setPlan(prev => ({
            ...prev,
            billing: prev.billing === "monthly" ? "yearly" : "monthly"
        }));
    };

    return (
        <div className="BillingSwitcher">
            <span
                className={
                    plan.billing === "monthly"
                        ? "plan-name active"
                        : "plan-name"
                }
            >
                Monthly
            </span>
            <span className="switcher" onClick={handleBillingChange}>
                <span
                    className={
                        plan.billing === "monthly"
                            ? "circle leftC"
                            : "circle rightC"
                    }
                ></span>
            </span>
            <span
                className={
                    plan.billing === "yearly" ? "plan-name active" : "plan-name"
                }
            >
                Yearly
            </span>
        </div>
    );
};

export default BillingSwitcher;
