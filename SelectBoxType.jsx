/* eslint-disable no-unused-vars */
import React from 'react'


// {selectedOption===op.value ? selected : undefined}

export default function SelectBoxType(props) {
    const {optionsArray,name,multiple,classes,selectedOption,styles,placeholder,required,register,onChangeSelect}=props;

    return (
       <select name={name||"name"} onChange={(e)=>{onChangeSelect(e)}} ref={register} style={styles} defaultValue={selectedOption} className={` ${classes} form-control dorm-control-sm `} placeholder={placeholder||""} multiple={multiple || false} required={required || false}>
           <option value="">{placeholder}</option>
           {optionsArray && optionsArray.length > 0 && optionsArray.map((op)=>{
               return (<option value={op.value} key={op.value}>{op.text}</option>)
           })}
       </select>
    )
}
