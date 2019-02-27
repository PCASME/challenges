import { connect } from "react-redux";
import { IState } from "../model/IState";
import Main from "../components/Main/Main";

export const mapStateToProps = (state: IState, ownProps: any) => ({
    screen: state.screen,
    classes: ownProps.classes,
    test: ownProps.test,
});

const connectedMain = connect(mapStateToProps, null)(Main);
export default connectedMain;