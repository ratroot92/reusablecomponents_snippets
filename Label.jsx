import React from 'react';



export default function Label(props) {

    
    const { htmlFor, label } = props;
    
    return (
		<label
			htmlFor={htmlFor}
			className='w-1/3 p-1 text-sm font-bold text-left border border-green-400 text-dark'
		>
			{label}
		</label>
	);
}
