/* eslint-disable no-unused-vars */
import React from 'react';

export default function TextInputType({
	type,
	name,
	placeholder,
	classes,
	minLength,
	maxLength,
	register,
	required,
	error,
	styles,
	pattern,
}) {
	return (
		<>
			<div className='flex-row d-flex justify-content-start align-items-center'>
				<input
					type={type || 'text'}
					name={name || 'name'}
					id={name || 'name'}
					placeholder={placeholder || ''}
					className={`border border-${
						error ? 'danger' : 'success'
					}  form-control   ${classes}`}
					// minLength={minLength || 5}
					// maxLength={maxLength || 200}
					// pattern={`${pattern} || "[a-zA-Z0-9\\s]+" `}
					required={required || false}
					ref={register}
					styles={styles}
					// title="Letters, numbers, hyphen, and underscore Only"
				/>
				<div className='input-group-append custom-input-group-append'>
					<span className='input-group-text'>
						<i
							className={` fa fa-${error?.message ? 'exclamation' : 'check'} text-
text-${error?.message ? 'danger' : 'success'} `}
						></i>
					</span>
				</div>
			</div>
			<div>
				{error?.message && error?.message !== '' ? (
					<div
						className={`custom-alert-danger font-12px alert alert-${
							error?.message ? 'danger' : 'success'
						}`}
					>
						{error?.message}
					</div>
				) : (
					<div
						className={`custom-alert-success font-12px alert alert-${
							error?.message ? 'danger' : 'success'
						}`}
					>
						{error?.message}
					</div>
				)}
			</div>
		</>
	);
}
