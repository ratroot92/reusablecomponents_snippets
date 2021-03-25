import React from 'react';



export default function FormButtons({submitBtnText,closeModal}) {

    return (
        <div className='flex items-center justify-between w-full'>
                <button className=' btn btn-success' type='submit'>
                    {submitBtnText}
                </button>
                <button
                    className=' btn btn-outline-warning' 
                    type='button'
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
    )
}
