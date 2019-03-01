import { connect } from "react-redux";
import { IState } from "../model/IState";
import Main from "../components/Main/Main";
import { fetchGetChallenges } from "../actions";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../components/Main/Main.styles";

export const mapStateToProps = (state: IState, ownProps: any) => ({
    screen: state.screen,
    test: ownProps.test,
    isLoading: state.isLoading,
    challenges: state.challenges,
});

export const mapDispatchToProps = (dispatch: any) => ({
    getChallenges: () => dispatch(fetchGetChallenges()),
});


const connectedMain = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
export default connectedMain;