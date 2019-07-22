import React, { Component } from 'react';

class Timer extends Component {
	render() {
        const { timeout } = this.props;
		return (
            <div className="timer">
                Timer: {timeout}
            </div>
		)
    }
}
export default Timer;