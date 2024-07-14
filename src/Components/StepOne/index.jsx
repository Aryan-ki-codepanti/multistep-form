import React from "react";
import "./StepOne.css";

const StepOne = () => {
    return (
        <div className="StepOne">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className="input-control">
                <span>Name</span>
                <input type="text" placeholder="e.g. Stephen King" />
            </div>
            <div className="input-control">
                <span>Email Address</span>
                <input type="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className="input-control">
                <span>Phone Number</span>
                <input type="tel" placeholder="+1 234 567 890" />
            </div>
        </div>
    );
};

export default StepOne;
