import React, { Fragment } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './Main.styles';
import { FormContainer } from './FormContainer/FormContainer';
import { Screens } from '../../model/IState';

export interface IMainProps extends WithStyles<typeof styles> {
    screen?: Screens;
    test: boolean;
}

export interface IMainState { }

export class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);
        this.state = {
        }
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
            </Fragment>
        );
    }
}

export default withStyles(styles)(Main);