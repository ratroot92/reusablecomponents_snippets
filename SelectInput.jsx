import React from 'react';

import PropTypes from 'prop-types';



export default function SelectInput({attributes,register,error}) {


    
    const {type,name,value,minLength,maxLength,required,disabled,readOnly,styles,className,pattern,id,placeholder,selectOptions}=attributes;
    return (
   
            <select 
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
            className={`w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '${className}'`}
            pattern={`'${pattern}'`}
            placeholder={placeholder || name}
            error={error}
          
            /**
             * Optional
             */
           
            >
               {selectOptions && selectOptions.length > 0  && selectOptions.map((option)=>{
										return (<option value={option.value} key={option.value}>{option.text}</option>);
									})}	
                </select>
     
    )
}
// Same approach for defaultProps too
SelectInput.defaultProps = {
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
    multiple:PropTypes.bool,
    selectOptions: PropTypes.array 
  };