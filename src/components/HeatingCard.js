import Button from "./Button";
import fire from "../fire.svg";
import Display from "./Display";

const HeatingCard = () => (
    <div className="container border border-primary rounded">
        <div className="d-flex">
            <img
                src={ fire }
                alt="Flame indicating heating on or off"
            />
            <Display />
        </div>
        <div className="container d-flex justify-content-around mb-3 mt-5">
            <Button text={ "+" }/>
            <Button text={ "-" }/>
        </div>
    </div>
);

export default HeatingCard;