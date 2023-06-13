import { useDispatch, useSelector } from "react-redux";
import { equal, inputAppend } from "../redux/calculatorSlice";
import "./NumPad.css";

const NumPad = () => {
  const input = useSelector((state) => state.calculator.input);
  const dispatch = useDispatch();

  return (
    <div className="NumPad">
      <button onClick={() => dispatch(inputAppend(9))}>9</button>
      <button onClick={() => dispatch(inputAppend(8))}>8</button>
      <button onClick={() => dispatch(inputAppend(7))}>7</button>
      <button onClick={() => dispatch(inputAppend(6))}>6</button>
      <button onClick={() => dispatch(inputAppend(5))}>5</button>
      <button onClick={() => dispatch(inputAppend(4))}>4</button>
      <button onClick={() => dispatch(inputAppend(3))}>3</button>
      <button onClick={() => dispatch(inputAppend(2))}>2</button>
      <button onClick={() => dispatch(inputAppend(1))}>1</button>
      <button onClick={() => dispatch(inputAppend(0))}>0</button>
      <button className='fill' onClick={() => dispatch(equal(input))}>=</button>
    </div>
  );
};

export default NumPad;
