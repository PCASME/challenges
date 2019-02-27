import React from "react";

interface ICountdownProps {
    end: number;
}

interface ICountdownState {
    countdown: ICountdownResult;
}

interface ICountdownResult {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export class Countdown extends React.Component<ICountdownProps, ICountdownState>{
    constructor(props: ICountdownProps) {
        super(props);
        this.state = {
            countdown: this.getCountdown(props.end)
        }
    }

    getCountdown(end: number) {
        let delta = Math.abs(end - (new Date().getTime())) / 1000;
        const days = Math.floor(delta / (3600 * 24));
        delta -= (days * (3600 * 24));
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        const mins = Math.floor(delta / 60) % 60;
        delta -= mins * 60;
        const secs = Math.floor(delta);
        return {
            days: days,
            hours: hours,
            minutes: mins,
            seconds: secs
        };
    }

    componentDidMount() {
        setInterval(() => this.setState({ countdown: this.getCountdown(this.props.end) }), 1000)
    }

    format(val: number) {
        if (val < 10) return '0' + val;
        else return '' + val;
    }

    render() {
        return (
            <div>
                <div>{this.state.countdown.days} days</div>
                <div>{this.format(this.state.countdown.hours)}:{this.format(this.state.countdown.minutes)}:{this.format(this.state.countdown.seconds)}</div>
            </div>
        );
    }
}