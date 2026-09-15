import Button from "../Button/Button";
import "./styles.css";

function Counter({ count = 0, onMinusClick, onPlusClick }) {
    return (
        <div className="counter-wrapper">
            <div className="button-wrapper">
                <Button name="-" onClick={onMinusClick} />
            </div>
            <div className="result">{count}</div>
            <div className="button-wrapper">
                <Button name="+" onClick={onPlusClick} />
            </div>
        </div>
    );
}

export default Counter;
