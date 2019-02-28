import React, { Fragment } from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './Form.styles';
import TextField from '@material-ui/core/TextField/TextField';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Fade from '@material-ui/core/Fade/Fade';
import { CircularProgress } from '@material-ui/core';
import { IChallenge } from '../../../model/IChallenge';

export interface IFormProps extends WithStyles<typeof styles> {
    saveChallenge: (challenge: IChallenge) => void;
    saving: boolean;
}

export interface State {
    title: string;
    description: string;
    category: string;
}

export class Form extends React.Component<IFormProps, State> {
    constructor(props: IFormProps) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
        }
    }

    private handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [name]: event.target.value } as unknown as Pick<State, keyof State>);
    };

    private categories = [
        {
            value: 'Category1',
            label: 'Category 1',
        },
        {
            value: 'Category2',
            label: 'Category 2',
        },
        {
            value: 'Category3',
            label: 'Category 3',
        },
    ];

    private onSave(event: any) {
        this.props.saveChallenge({
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fade in={true}>
                <form className={classes && classes.container} noValidate autoComplete="off">
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Challenge Form
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-title"
                                label="Title"
                                className={classes && classes.textField}
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-multiline-flexible-description"
                                label="Description"
                                multiline
                                rowsMax="4"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                className={classes && classes.textField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-select-category"
                                select
                                label="Category"
                                className={classes && classes.textField}
                                value={this.state.category}
                                onChange={this.handleChange('category')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes && classes.menu,
                                    },
                                }}
                                helperText="Please select your category"
                                margin="normal"
                            >
                                {this.categories.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            {this.props.saving ?
                                <CircularProgress />
                                :
                                <Fragment>
                                    <Button variant="contained" size="medium" color="primary" className={classes && classes.button} onClick={this.onSave.bind(this)}>
                                        <SaveIcon className={classes && classes.leftIcon} />
                                        Save
                                    </Button>
                                    <Button variant="contained" size="medium" className={classes && classes.button}>
                                        <CancelIcon className={classes && classes.leftIcon} />
                                        Cancel
                                    </Button>
                                </Fragment>
                            }
                        </Grid>
                    </Grid>
                </form>
            </Fade>
        );
    }
}
export default withStyles(styles)(Form);