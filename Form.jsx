/* eslint-disable no-prototype-builtins */
/* eslint-disable react/destructuring-assignment */


import React from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';

import { NotificationManager } from 'react-notifications';

import Label from './Label';

import FileInput from './FileInput';

import SelectInput from './SelectInput';

import TextArea from './TextArea';

import TextInput from './TextInput';

import FormButtons from './FormButtons';

// import  createYupSchema  from './yupSchemaCreator';

export default function From(props) {
  const { formDetails, closeModal, addService, dispatcher } = props;

  const { formFeilds, title, submitBtnText, schema } = formDetails;

  /**
   *
   */
  // let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];

  // const yepSchema = formFeilds.reduce(createYupSchema, {});
  // console.log('*****')
  // console.log(yepSchema);
  // console.log('*****')
  // const validateSchema = yup.object().shape(schema);
  // console.log(validateSchema)

  // eslint-disable-next-line no-unused-vars

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    addService(data)
      .then((res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        if (res.success) {
          NotificationManager.success(
            <span className='font-bold'>success...</span>,
            <span className='font-bold'>{title}</span>
          );
          dispatcher(res.data);
          reset();
          closeModal();
        } else {
          NotificationManager.warning(
            <span className='font-bold'>operation failed ...</span>,
            <span className='font-bold'>{title}</span>
          );
        }
      })
      .catch((err) => {
        NotificationManager.error(
          <span className='font-bold'>operation failed ...</span>,
          <span className='font-bold'>{title}</span>
        );
        console.log(err);
      });
  };

  // let schema=yup.object.shape({

  // })

  const FieldHanlder = (item) => {
   
    const error = errors.hasOwnProperty(item.name) && errors[item.name];
    // console.log(error);
    switch (item.type) {
      case 'text':
        return (
          <TextInput
            attributes={item}
            register={register}
            error={error.message}
          />
        );
      case 'email':
        return (
          <TextInput
            attributes={item}
            register={register}
            error={error.message}
          />
        );
      case 'password':
        return (
          <TextInput
            attributes={item}
            register={register}
            error={error.message}
          />
        );
      case 'select':
        return (
          <SelectInput
            attributes={item}
            selectOptions={item.selectOptions}
            register={register}
            error={error.message}
          />
        );
      case 'file':
        return (
          <FileInput
            attributes={item}
            register={register}
            error={error.message}
          />
        );
      case 'textarea':
        return (
          <TextArea
            attributes={item}
            register={register}
            error={error.message}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-center'>
        <p className='text-2xl font-bold tracking-wider btn'>{title}</p>
        {formFeilds !== undefined &&
          formFeilds.length > 0 &&
          formFeilds.map((item, index) => {
            return (
              <div
                key={`${index}${1}` - 1}
                className='flex items-center justify-start gap-5 mt-2 mb-2'
              >
                <Label htmlFor={item.name} label={item.label} />
                {FieldHanlder(item)}
              </div>
            );
          })}
        <FormButtons submitBtnText={submitBtnText} closeModal={closeModal} />
      </div>
    </form>
  );
}
