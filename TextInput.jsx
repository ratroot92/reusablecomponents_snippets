import React from 'react';

import PropTypes from 'prop-types';

import 'react-notifications/lib/notifications.css';

import { NotificationManager} from 'react-notifications';



export default function TextInput({attributes,register,error}) {
    
    if(error){
    
        // NotificationManager.warning(`${error}`, 'Close after 3000ms', 3000);
        NotificationManager.warning(<span className='font-bold'>{error}...</span> , <span className='font-bold'>Validator</span>);
    }
    const errorStyle={
        border:'1px solid red'
    }
    
    // eslint-disable-next-line no-unused-vars
    const {type,name,value,minLength,maxLength,required,disabled,readOnly,styles,className,pattern,id,placeholder}=attributes;
    return (
    <>
            <input 
            type={type} // required
            name={name} // required
            id={id||name}
            defaultValue={value || ''}
            minLength={minLength || ''}
            maxLength={maxLength || ''}
            required={!!required}
            disabled={!!disabled}
            readOnly={!!readOnly}
            styles={styles}
            ref={register({ required: true })}
            className={`w-2/3 p-1 text-sm font-bold border border-green-400 text-dark  ${className}  ${(error)? errorStyle : ''}`}
            // pattern={pattern}
            placeholder={placeholder || name}
          
            />
     
        </>
    )
}
// Same approach for defaultProps too
TextInput.defaultProps = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    styles: PropTypes.object,
    className: PropTypes.string,
    pattern: PropTypes.string,
    id: PropTypes.string,
  
  };