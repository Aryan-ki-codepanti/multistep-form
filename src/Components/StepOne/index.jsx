import React from "react";
import "./StepOne.css";

const StepOne = () => {
    return (
        <div className="StepOne">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className="input-control">
                <div className="head">
                    <span>Name</span>
                    <span>This field is required</span>
                </div>
                <input type="text" placeholder="e.g. Stephen King" />
            </div>
            <div className="input-control">
                <div className="head">
                    <span>Email Address</span>
                    <span>This field is required</span>
                </div>
                <input type="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className="input-control">
                <div className="head">
                    <span>Phone Number</span>
                    <span>This field is required</span>
                </div>
                <input type="tel" placeholder="+1 234 567 890" />
            </div>
        </div>
    );
};

export default StepOne;
