import "./App.css";
import Steps from "./Components/Steps";

function App() {
    return (
        <div className="App">
            <div className="container ">
                <div className="left">
                    <Steps />
                </div>
                <div className="right">Right</div>
                <div className="bottom">Bottom</div>
            </div>
        </div>
    );
}

export default App;
