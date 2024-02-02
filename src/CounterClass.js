import React from "react";

export default class extends React.Component {
    state = {
        current: this.props.min
    }

    incPlus = () => {
        if(this.state.current < this.props.max) {
            this.setState({current: this.state.current + 1});
        }
    }

    incMinus = () => {
        if(this.state.current > this.props.min) {
            this.setState({current: this.state.current - 1});
        }
    }

    render() {
        return <div>
            <button type="button" onClick={ this.incMinus }>-</button>
            <span> { this.state.current } </span>
            <button type="button" onClick={ this.incPlus }>+</button>
        </div>
    }
}