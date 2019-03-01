import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from './ChallengeCard.styles';
import { IChallenge } from '../../../model/IChallenge';

export interface IChallengeCardProps extends WithStyles<typeof styles> {
    challenge: IChallenge;
}

function ChallengeCard(props: IChallengeCardProps) {
    const { classes } = props as any;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.challenge.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.challenge.category}
                </Typography>
                <Typography component="p">
                    {props.challenge.description}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(ChallengeCard);