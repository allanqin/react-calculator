import NumPad from "./NumPad";
import Display from "./Display";
import Operations from "./Operations";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="Calculator">
      <Display />
      <div className="Inputs">
        <NumPad />
        <Operations />
      </div>
    </div>
  );
};

export default Calculator;
