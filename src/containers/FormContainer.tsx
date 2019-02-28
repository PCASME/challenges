import { connect } from "react-redux";
import { IState } from "../model/IState";
import { fetchSaveChallenge } from "../actions";
import { IChallenge } from "../model/IChallenge";
import { Form } from "../components/Main/Form/Form";

export const mapStateToProps = (state: IState,ownProps: any) => ({
    saving:state.isLoading,
    classes: ownProps.classes,
});

export const mapDispatchToProps = (dispatch: any) => ({
    saveChallenge: (challenge: IChallenge) => dispatch(fetchSaveChallenge(challenge)),
});

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Form);
export default connectedHeader;