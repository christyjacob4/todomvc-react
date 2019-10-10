import React from 'react';



const Failure = (props) => {
    console.log(props)
    console.log("Hi")
    return (
        <div> Error {props.location.search} </div>
    )
}


export default Failure