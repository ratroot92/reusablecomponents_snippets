import React from 'react';

import { useForm } from 'react-hook-form';

export default function MuiAddNew(props) {
	// eslint-disable-next-line no-unused-vars
	const { formDetails, closeModal,addService } = props;
	const { formFeilds, title, submitBtnText } = formDetails;
	// eslint-disable-next-line no-unused-vars
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
		
		addService(data).then((res)=>{
			console.log(res)
		}).catch(err=>console.log(err))
	 
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='text-center'>
				<p className='text-2xl font-bold tracking-wider btn'>{title}</p>
				{formFeilds !== undefined &&
					formFeilds.length > 0 &&	
					formFeilds.map((item ,index)=> {
						if(item.type === 'text'){
							return (
								<div key={`${index}${1}`-1} className='flex items-center justify-start gap-5 mt-2 mb-2'>
									<label
										htmlFor={item.name}
										className='w-1/3 p-1 text-sm font-bold text-left border border-green-400 text-dark'
									>
										{item.label}
									</label>
									<input
										type={item.type}
										id={item.name}
										name={item.name}
										className='w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '
										placeholder={item.label}
										ref={register({ required: true })}
										defaultValue={(item.value ? item.value: '')}
										required={(item.required ? item.required: false)}
										disabled={(item.disabled ? item.disabled: false)}
										readOnly={(item.readOnly ? item.readOnly: false)}
										maxLength={(item.maxLength ? item.maxLength: undefined)}
										minLength={(item.minLength ? item.minLength: undefined)}
										pattern={(item.pattern ? item.pattern: undefined)}
										
									/>
									
								</div>
							);
						}
						if (item.type === 'select'){
							return (
								<div key={item.key} className='flex items-center justify-start gap-5 mt-2 mb-2'>
									<label
										htmlFor={item.name}
										className='w-1/3 p-1 text-sm font-bold text-left border border-green-400 text-dark'
									>
										{item.label}
									</label>
									<select
										id={item.name}
										name={item.name}
										className='w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '
										placeholder={item.label}
										ref={register({ required: true })}
										defaultValue={(item.value ? item.value: '')}
										required={(item.required ? item.required: false)}
										disabled={(item.disabled ? item.disabled: false)}
										readOnly={(item.readOnly ? item.readOnly: false)}
										maxLength={(item.maxLength ? item.maxLength: undefined)}
										minLength={(item.minLength ? item.minLength: undefined)}
										pattern={(item.pattern ? item.pattern: undefined)}
									>
									{item.selectOptions && item.selectOptions.length > 0  && item.selectOptions.map((option)=>{
										return (<option value={option.value} key={option.value}>{option.text}</option>);
									})}	
									</select>
									
								</div>
)
						}
						if (item.type === 'textarea'){
							return (
								<div key={item.key} className='flex items-center justify-start gap-5 mt-2 mb-2'>
									<label
										htmlFor={item.name}
										className='w-1/3 p-1 text-sm font-bold text-left border border-green-400 text-dark'
									>
										{item.label}
									</label>
									<textarea
										id={item.name}
										name={item.name}
										className='w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '
										placeholder={item.label}
										ref={register({ required: true })}
										required={(item.required ? item.required: '')}
										defaultValue={(item.value ? item.value: undefined)}
										disabled={(item.disabled ? item.disabled: false)}
										readOnly={(item.readOnly ? item.readOnly: false)}
										maxLength={(item.maxLength ? item.maxLength: undefined)}
										minLength={(item.minLength ? item.minLength: undefined)}
										pattern={(item.pattern ? item.pattern: undefined)}
										rows={(item.rows ? item.rows: false)}
									>
								
									</textarea>
									
								</div>
)
						}
						if (item.type === 'file'){
							return (
								<div key={item.key} className='flex items-center justify-start gap-5 mt-2 mb-2'>
									<label
										htmlFor={item.name}
										className='w-1/3 p-1 text-sm font-bold text-left border border-green-400 text-dark'
									>
										{item.label}
									</label>
									<input
										id={item.name}
										type={item.type}
										name={item.name}
										className='w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '
										placeholder={item.label}
										ref={register({ required: true })}
										required={(item.required ? item.required: '')}
										defaultValue={(item.value ? item.value: undefined)}
										disabled={(item.disabled ? item.disabled: false)}
										readOnly={(item.readOnly ? item.readOnly: false)}
										
										
									/>
								
									
									
								</div>
)
						}
						
							return (<div>Content On this page failed </div>)
						
						
					})}
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
			</div>
		</form>
	);
}
