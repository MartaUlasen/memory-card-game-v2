import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.id = null;
        this.time = this.props.timeout;
        this.changeTimeout = this.props.changeTimeout;
        this.isGameLose = this.props.isGameLose;
    }
    componentDidMount = () => {
        this.start();
	}
    stop = () => {
		clearInterval(this.id);
        this.setState({ time : 0 });
    }
    increment = () => {
        if (this.time > 0) {
            this.time = this.time - 1;
            this.changeTimeout(this.time);
		} else {
            this.stop();
            this.isGameLose();
		}
    }
    start = () => {
		this.id = setInterval(this.increment, 1000);
    }
    pause = () => {
		clearInterval(this.id);
	}

	render() {
		return (
            <div className="timer">
                Timer: {this.time}
            </div>
		)
    }
}
export default Timer;