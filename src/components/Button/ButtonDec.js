import Button from "./Button";
import { connect } from "react-redux";
import { incrementHeating } from "../../data/actions/state";

const mapDispatchToProps = ( dispatch ) => (
    {
        heatingIncrement: () => dispatch(incrementHeating(-1))
    }
)

export default connect(null, mapDispatchToProps)(Button);