import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide, inputClear, valueClear } from "../redux/calculatorSlice";
import './Operations.css'

const Operations = () => {
    const input = useSelector((state) => state.calculator.input);
    const dispatch = useDispatch();

    return (
        <div className="Operations">
            <button onClick={()=>dispatch(add(input))}>+</button>
            <button onClick={()=>dispatch(subtract(input))}>-</button>
            <button onClick={()=>dispatch(multiply(input))}>*</button>
            <button onClick={()=>dispatch(divide(input))}>/</button>
            <button onClick={()=>dispatch(inputClear())}>Clear Input</button>
            <button onClick={()=>dispatch(valueClear())}>Clear Total</button>
        </div>
    )
};

export default Operations;