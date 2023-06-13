import { useSelector} from "react-redux";
import './Display.css'

const Display = () => {
  const input = useSelector((state) => state.calculator.input);
  const value = useSelector((state) => state.calculator.value);

    return (
        <div className="Display">
            <div className='flex-3'>{input}</div>
            <div className='flex-1'>{"total: "+value}</div>
        </div>
    )
};

export default Display;