/* eslint-disable no-unused-vars */
import React from 'react';

export default function TextWithRadio({
	optionIndex,
	placeholder,
	inputFieldName,
	inputFieldType,
	prependFeildName,
	prependFeildType,
	inputref,
	prependref,
	required,
	setCorrectOption
}) {
	const style = {
		prependStyle: {
			width: 60,
			height: 50,
			border: '2px solid green',
			justifyContent: 'space-around',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: '#fff',
			padding: 5,
			margin: 0,
			borderRadius: '5px 0px 0px 5px ',
		},
		inputStyle: {
			height: 50,
			border: '2px solid green',
		},
	};
	return (
		<div className='p-1 input-group'>
			<div className=' input-group-prepend' style={style.prependStyle}>
				<input
					type={prependFeildType || 'radio'}
					name={prependFeildName || 'prependFeildName'}
					id={prependFeildName || 'prependFeildName'}
					ref={prependref}
					value={optionIndex}
					onChange={()=>{setCorrectOption(optionIndex)}}
					required
				/>
				<label htmlFor={prependFeildName || 'prependFeildName'} className='pt-2 font-weight-bold'>
					{optionIndex || 'a'}
				</label>
			</div>
			<input
				type={inputFieldType || 'text'}
				name={inputFieldName || 'inputFieldName'}
				id={inputFieldName || 'inputFieldName'}
				className='form-control'
				style={style.inputStyle}
				placeholder={placeholder || 'placeholder'}
				aria-label={inputFieldName||'inputFieldName'}
				aria-describedby='basic-addon1'
				ref={inputref}
				required={required||false}
			/>
		</div>
	);
}
