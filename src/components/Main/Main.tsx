import React, { Fragment } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './Main.styles';
import FormContainer from '../../containers/FormContainer';
import { Screens } from '../../model/IState';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { IChallenge } from '../../model/IChallenge';
import  ChallengeCard  from './ChallengeCard/ChallengeCard';

export interface IMainProps extends WithStyles<typeof styles> {
    screen: Screens;
    test: boolean;
    isLoading: boolean;
    challenges: IChallenge[];
    getChallenges: () => void;
}

export interface IMainState { }

class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getChallenges();
    }

    private renderChallenges() {
        return this.props.challenges.map(challenge => {
            return (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            );
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    Welcome to challenge based learning
            </div>
                {this.props.screen === Screens.CREATE_NEW_CHALLENGE &&
                    <FormContainer />
                }

                {this.props.screen === Screens.CHALLENGES_LIST && !this.props.isLoading && this.props.challenges &&
                    this.renderChallenges()
                }
                {this.props.isLoading &&
                    <CircularProgress />
                }
            </Fragment>
        );
    }
}

export default withStyles(styles)(Main);