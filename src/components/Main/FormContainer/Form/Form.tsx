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

export interface Props extends WithStyles<typeof styles> {
    onCancel?: (event: any) => void;
    onSave?: (data: any) => Promise<void>;
}

export interface State {
    title: string;
    description: string;
    category: string;
    saving: boolean;
}

export class Form extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            saving: false,
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
        this.setState({ saving: true });
        this.props.onSave && this.props.onSave({
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
        }).then(() => {
            this.setState({ saving: false });
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Fade in={true}>
                <form className={classes.container} noValidate autoComplete="off">
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
                                className={classes.textField}
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
                                className={classes.textField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-select-category"
                                select
                                label="Category"
                                className={classes.textField}
                                value={this.state.category}
                                onChange={this.handleChange('category')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
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
                            {this.state.saving ?
                                <CircularProgress />
                                :
                                <Fragment>
                                    <Button variant="contained" size="medium" color="primary" className={classes.button} onClick={this.onSave.bind(this)}>
                                        <SaveIcon className={classes.leftIcon} />
                                        Save
                                    </Button>
                                    <Button variant="contained" size="medium" className={classes.button}>
                                        <CancelIcon className={classes.leftIcon} />
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