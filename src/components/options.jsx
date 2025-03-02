import React from "react";

function OptionComponent() {
    return(
        <div className="controls">
            <select className="img-button">
                <option value='edit'>
                    Edit 
                </option>
                <option value='archieve'>
                    Archieve 
                </option>
                <option value='delete'>
                    Delete 
                </option>
            </select>
        </div>
    )
}

export default OptionComponent