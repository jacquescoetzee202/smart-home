import Display from "./Display";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => (
    {
        targetTemp: state.targetTemp,
        currentTemp: state.currentTemp,
    }
)

export default connect(mapStateToProps)(Display);