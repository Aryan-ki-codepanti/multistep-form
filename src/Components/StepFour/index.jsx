import React from "react";
import "./StepFour.css";

const StepFour = () => {
    return (
        <div className="StepFour">
            <h1>Finishing Up</h1>
            <p>Double-check everything looks OL before confirming.</p>

            <div className="summary-box">
                <div className="planSum">
                    <div className="planSum_name">
                        <span>Arcade (Yearly)</span>
                        <span>Change</span>
                    </div>
                    <span className="planSum_price">$90/yr</span>
                </div>
                <hr />
                <div className="addonSum">
                    <div className="addonSum_item">
                        <span>Online service</span>
                        <span>+$10/yr</span>
                    </div>
                    <div className="addonSum_item">
                        <span>Larger storage</span>
                        <span>+$20/yr</span>
                    </div>
                </div>
            </div>

            <div className="finalSum">
                <span>Total(per year)</span>
                <span>$120/yr</span>
            </div>
        </div>
    );
};

export default StepFour;
