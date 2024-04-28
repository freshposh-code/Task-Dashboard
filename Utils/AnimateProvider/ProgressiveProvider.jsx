import React from "react";

class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        endValue: 38,
        interval: 25,
        step: 1
    };

    state = {
        value: 0
    };

    componentDidMount() {
        const { endValue, interval, step } = this.props;
        this.intervalId = setInterval(() => {
            const newValue = this.state.value + step;
            if (newValue <= endValue) {
                this.setState({ value: newValue });
            } else {
                clearInterval(this.intervalId);
            }
        }, interval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return this.props.children(this.state.value);
    }
}

export default ChangingProgressProvider;
