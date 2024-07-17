import React from "react";
import ThankYouImg from "../../Images/icon-thank-you.svg";
import "./StepFive.css";
const StepFive = () => {
    return (
        <div className="StepFive">
            <div className="thankyou_img">
                <img src={ThankYouImg} alt="thank-you-img" />
            </div>
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loregaming.com
            </p>
        </div>
    );
};

export default StepFive;
