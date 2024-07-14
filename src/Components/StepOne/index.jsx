import React, { useContext } from "react";
import "./StepOne.css";
import FormContext from "../../Context/Form/FormContext";

const StepOne = () => {
    const { formOne, setFormOne, formOneError } = useContext(FormContext);

    const handleOneChange = e => {
        setFormOne(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="StepOne">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div
                className={
                    formOneError.name ? "input-control error" : "input-control"
                }
            >
                <div className="head">
                    <span>Name</span>
                    <span>This field is required</span>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. Stephen King"
                    value={formOne.name}
                    onChange={handleOneChange}
                />
            </div>
            <div
                className={
                    formOneError.email ? "input-control error" : "input-control"
                }
            >
                <div className="head">
                    <span>Email Address</span>
                    <span>{formOneError.emailError}</span>
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={formOne.email}
                    onChange={handleOneChange}
                />
            </div>
            <div
                className={
                    formOneError.phone ? "input-control error" : "input-control"
                }
            >
                <div className="head">
                    <span>Phone Number</span>
                    <span>{formOneError.phoneError}</span>
                </div>
                <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 890"
                    value={formOne.phone}
                    onChange={handleOneChange}
                />
            </div>
        </div>
    );
};

export default StepOne;
