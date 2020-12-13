import HeatingCard from "./HeatingCard";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => (
    {
        heatingOn: state.heatingOn,
    }
)

export default connect(mapStateToProps)(HeatingCard);