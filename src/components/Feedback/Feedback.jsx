import React from "react";


const Feedback = ({title, children}) => (
    <div>
        <span>{title}</span>
        {children}
    </div>
)

export default Feedback;