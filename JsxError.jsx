import React from 'react'

function JsxError(props) {
    const {text}=props
    return (
        <div className='alert alert-danger '>
           <p> {text}</p>
        </div>
    )
}

export default JsxError
