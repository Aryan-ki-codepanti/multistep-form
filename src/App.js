import { useContext } from "react";
import "./App.css";
import Steps from "./Components/Steps";
import StepContext from "./Context/Step/StepContext";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import StepFour from "./Components/StepFour";

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

            default:
                return <div>Error</div>;
        }
    };

    return (
        <div className="App">
            <div className="container ">
                <div className="left">
                    <Steps />
                </div>
                <div className="right">
                    <RenderStep />
                </div>
                <div className="bottom">Bottom</div>
            </div>
        </div>
    );
}

export default App;
