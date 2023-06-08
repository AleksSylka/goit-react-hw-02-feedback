import React from "react";
import Notification from "components/Notification/Notification";

const Statistics = ({ good, neutral, bad, total, percentage, message }) => {
    return ((good > 0 || neutral > 0 || bad > 0) ? (<div>
        {<p>Statistics</p>}
        {<p>Good: {good}</p>}
        {<p>Neutral: {neutral}</p>}
        {<p>Bad: {bad}</p>}
        {total > 0 && (<p>Total: {total}</p>)}
        {percentage > 0 && (<p>Positive feedback: {percentage}%</p>)}
    </div>) : (<Notification message={message}/>)) };

export default Statistics;