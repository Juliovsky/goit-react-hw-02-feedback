import React from "react";
import {Notification} from "../Notification/Notification";


export function Statistic ({good,neutral,bad, countTotalFeedback,countPositiveFeedbackPercentage}) {

            if ((good || neutral || bad)>0) {
                return (
                    <div>
                        <p>Good {good}</p>
                        <p>Neutral {neutral}</p>
                        <p>Bad {bad}</p>
                        <p>Total {countTotalFeedback}</p>
                        <p>Positive percentage {countPositiveFeedbackPercentage} %</p>
                    </div>
                )
            }else{
                return (
                    <Notification message="No feedback given"/>
                )
            }

}
