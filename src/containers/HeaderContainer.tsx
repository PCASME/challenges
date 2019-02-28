import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { IState } from "../model/IState";
import { createNewChallenge } from "../actions";

export const mapStateToProps = (state: IState,ownProps: any) => ({
    classes: ownProps.classes,
});
export const mapDispatchToProps = (dispatch: any) => ({
    createNewChallenge: () => dispatch(createNewChallenge()),
});

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default connectedHeader;