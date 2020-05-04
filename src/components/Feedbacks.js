import React, {Component} from "react";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistic} from './Statistics/Statistics'



class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = e => {
        const name = e.target.name;
        this.setState(prev=>({
        [name]: prev[name] + 1
        }))
    }

    countTotalFeedback() {
        const good = this.state.good;
        const neutral = this.state.neutral;
        const bad = this.state.bad;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        if(this.state.good){
        return Math.round(this.state.good*100/this.countTotalFeedback())}
        else{
            return 0
        }
    }

    render() {
        return (
            <>
                <h2>Please leave the feedback</h2>
                <FeedbackOptions
                    handleClick={this.handleClick}
                    />
                <Statistic
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                    countTotalFeedback = {this.countTotalFeedback()}
                    countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage()}
                />
            </>
        )
    }
}

export default Feedback;



