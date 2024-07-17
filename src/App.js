import { useContext } from "react";
import "./App.css";
import Steps from "./Components/Steps";
import StepContext from "./Context/Step/StepContext";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";
import Control from "./Components/Control";
import StepFive from "./Components/StepFive";

function App() {
    const { step } = useContext(StepContext);

    const RenderStep = () => {
        switch (step) {
            case 1:
                return <StepOne />;

            case 2:
                return <StepTwo />;

            case 3:
                return <StepThree />;

            case 4:
                return <StepFour />;

            case 5:
                return <StepFive />;

            default:
                return <div>Error</div>;
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="left">
                    <Steps />
                </div>
                <div
                    className="right"
                    style={step === 5 ? { gridRow: "1/3" } : {}}
                >
                    <RenderStep />
                </div>
                {step !== 5 && (
                    <div className="bottom">
                        {" "}
                        <Control />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
