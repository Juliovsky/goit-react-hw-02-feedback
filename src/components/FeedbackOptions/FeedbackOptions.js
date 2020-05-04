import React from 'react';

export function FeedbackOptions({handleClick}){
    return (
        <div>
            <button type="submit"
                    name="good"
                    onClick = {handleClick}>good</button>
            <button type="submit"
                    name="neutral"
                    onClick={handleClick}>neutral</button>
            <button type="submit"
                    name="bad"
                    onClick={handleClick}>bad</button>
        </div>

    )
}