import React from 'react';

import * as Yup from 'yup';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';

import { confirmAlert } from 'react-confirm-alert';

import { NotificationManager } from 'react-notifications';

import WhiteCardWrapper from '../../../components/reusableComponents/Wrappers/WhiteCardWrapper';

import BoxCenteredBox from '../../../components/reusableComponents/Wrappers/BoxCenteredBox';

import RadioButton from '../../../components/reusableComponents/Forms/RadioButton';

import TextInputType from '../../../components/reusableComponents/Forms/TextInputType';

import SelectBoxType from '../../../components/reusableComponents/Forms/SelectBoxType';

import topicService from '../../../services/topicService';

import { AppContext } from '../../../context/appContext';

export default function AddDiscpline() {
	const { store, methods } = React.useContext(AppContext);

	const allDiscplines = store.allTopics.map((topic) => {
		return { text: topic.topicName, value: topic.id };
	});

	/*
	 * Yup validation
	 */

	const Content = () => {
		const validationSchema = Yup.object().shape({
			discplineName: Yup.string()
				.required()
				.matches(
					// /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
					/^[a-z]+$/,
					'invalid discpline name...',
				)
				.test('avaliable', 'Discpline Name already Exist', (val) => {
					return new Promise((resolve) => {
						topicService
							.topicNameExist(val)
							.then(({ data }) => {
								if (data) return resolve(false);
								return resolve(true);
							})
							.catch((err) => console.log(err));
					});
				}),
			description: Yup.string().required().min(5).max(200),
		});
		const { register, handleSubmit, reset, errors } = useForm({
			resolver: yupResolver(validationSchema),
			//  mode: 'onSubmit',
			//  reValidateMode: 'on+Submit',
			//  criteriaMode: 'firstError',
			//  shouldFocusError: true,
			//  shouldUnregister: true,
		});

		const onSubmit = (formData) => {
			console.log('====================================');
			console.log(formData);
			console.log('====================================');
			const { parentDiscpline, discplineType, discplineName, description } = formData;
			if (parentDiscpline === '' || parentDiscpline === null) {
				confirmAlert({
					title: 'Confirmation',
					message: 'Are you sure to continue without parent disclpine....  ?',
					buttons: [
						{
							label: 'yes',
							onClick: () => {
								topicService
									.addNewTopic({ discplineType, discplineName, description })
									.then((resData) => {
										console.log('====================================');
										console.log(resData.data);
										console.log('====================================');
										if (resData.success) {
											NotificationManager.success(
												<span className='font-bold'>Discpline added successfully ...</span>,
												<span className='font-bold'>Question Bank Discplines</span>,
											);
											methods.addNewTopic(resData.data); // updating global context
											reset();
										} else {
											NotificationManager.warning(
												<span className='font-bold'>Failed to add discpline ...</span>,
												<span className='font-bold'>Question Bank Discplines</span>,
											);
										}
									})
									.catch((err) => {
										NotificationManager.danger(
											<span className='font-bold'>Something went wrong</span>,
											<span className='font-bold'>Question Bank Discplines</span>,
										);
										console.log(err);
									});
							},
						},
						{
							label: 'No',
							onClick: () => {
								//   reset();
							},
						},
					],
				});
			} else {
				console.log('====================================');
				console.log('addNewDiscpline');
				console.log('====================================');
				topicService
					.addNewDiscpline({ discplineType, discplineName, description, parentDiscpline })
					.then((resData) => {
						console.log('====================================');
						console.log(resData);
						console.log('====================================');
						if (resData.success) {
							NotificationManager.success(
								<span className='font-bold'>Discpline added successfully ...</span>,
								<span className='font-bold'>Question Bank Discplines</span>,
							);
							methods.addNewTopic(resData.data); // updating global context
							reset();
						} else {
							NotificationManager.warning(
								<span className='font-bold'>Failed to add discpline ...</span>,
								<span className='font-bold'>Question Bank Discplines</span>,
							);
						}
					})
					.catch((err) => console.log(err));
			}
		};
		const [parentSelected, setParentSelected] = React.useState('');

		const onChangeSelect = (e) => {
			setParentSelected(e.target.value);
		};
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Exam Type Required  */}
				{/* <h3 className='mt-5 text-full-black'>Create New Section </h3> */}

				<div className='p-2'>
					<label className='mb-2 font-weight-bold font-13px text-full-black'>
						Parent Specilization {parentSelected || 'not slected'}
					</label>
					<div className='flex-row d-flex justify-content-start align-items-center w-100'>
						<SelectBoxType
							name='parentDiscpline'
							onChangeSelect={(e) => {
								onChangeSelect(e);
							}}
							// optionsArray={[{ text: 'a', value: 'a' }]}
							optionsArray={allDiscplines}
							placeholder='Select Speclaized Area'
							register={register}
							styles={{
								width: 200,
								height: 35,
								fontSize: 12,
								paddingTop: 5,
							}}
							classes={`border border-
							border border-${parentSelected === '' ? 'danger' : 'success'}`}
						/>
					</div>
				</div>
				{/* Exam Type Required  */}
				{/* Exam Type Required  */}
				{/* <h3 className='mt-5 text-full-black'>Create New Section </h3> */}
				<div className='p-2'>
					<label className='mb-2 font-weight-bold font-13px text-full-black'> Type</label>
					<div className='flex-row d-flex justify-content-start align-items-center w-100'>
						<BoxCenteredBox
							height={80}
							width={140}
							borderRadius={5}
							borderColor='#000!important'
							backgroundColor='#fff'
							classes={`d-flex flex-column justify-content-center align-items-center border border-
							border border-${parentSelected === '' ? 'danger' : 'success'} border-width-5`}
							textClasses='font-weight-bold text-full-black font-12px mt-2'
							text='Breadth'
							ChildComponent={() => (
								<RadioButton
									value='breadth'
									type='radio'
									name='discplineType'
									register={register}
									disabled={parentSelected === ''}
									required={parentSelected !== ''}
								/>
							)}
						/>
						<BoxCenteredBox
							height={80}
							width={140}
							borderColor='#000!important'
							backgroundColor='#fff'
							classes={`d-flex flex-column justify-content-center align-items-center ml-5 border border-
							border border-${parentSelected === '' ? 'danger' : 'success'} border-width-5`}
							textClasses='font-weight-bold text-full-black font-12px mt-2'
							text='Depth'
							ChildComponent={() => (
								<RadioButton
									value='depth'
									type='radio'
									name='discplineType'
									register={register}
									disabled={parentSelected === ''}
									required={parentSelected !== ''}
								/>
							)}
						/>
					</div>
				</div>
				{/* Exam Type Required  */}

				<div className='p-2'>
					<label className='mb-2 font-weight-bold font-13px text-full-black'>Discpline Name</label>

					<TextInputType
						// pattern='[a-zA-Z0-9\s]+'
						type='text'
						name='discplineName'
						placeholder=''
						classes='form-control w-75'
						error={errors.discplineName}
						id='discplineName'
						// minLength={5}
						// maxLength={200}
						required={false}
						register={register}
					/>
				</div>

				<div className='p-2'>
					<label className='mb-2 font-weight-bold font-13px text-full-black'> Description </label>
					<TextInputType
						// pattern='[a-zA-Z0-9\s]+'
						type='text'
						name='description'
						placeholder=''
						classes='form-control  w-75'
						error={errors.description}
						// minLength={5}
						// maxLength={200}
						required={false}
						register={register}
					/>
				</div>
				<div className='p-2'>
					<input type='submit' className='btn btn-success' value='Add Discpline' />
				</div>
			</form>
		);
	};

	return <WhiteCardWrapper ChildComponent={Content} title='Create New Discplines' />;
}
