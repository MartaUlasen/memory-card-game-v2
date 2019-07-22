import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.id = null;
        this.time = this.props.timeout;
    }
    componentDidMount = () => {
        this.start();
	}
    stop = () => {
		clearInterval(this.id);
        this.setState({ time : 0 });
    }
    increment = () => {
        const { changeTimeout, isGameLose, isPlaying } = this.props;
        if (this.time > 0 && isPlaying === true) {
            this.time = this.time - 1;
            changeTimeout(this.time);
        } else if(this.isPlaying === false) {
            this.pause();
        } else if (this.time === 0) {
            this.stop();
            isGameLose();
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