import React from "react";

const Display = (props) => {

    const handleCheck = (i) => {
        props.handleCheck(i)
    }
const handleDelete = (i) => {
        props.handleDelete(i)
}

    return (

        <div className="container border border-dark border-5 mt-5 pt-5 pb-5 bg-light bg-gradient">
            {
                props.tasks.map((task, i) => {
                    return (
                        <div className="container" key={i}>
                        <span 
                        > {task.name}</span>
                        
                        <input type="checkbox" onChange={() => handleCheck(i)} checked={task.checked}></input>
                        <button className="btn btn-link text-black"  onClick={() =>
                        handleDelete(i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display

