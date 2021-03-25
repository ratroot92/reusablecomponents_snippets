import React from 'react'

export default function RadioButton({name,classes,type='radio',styles,register,disabled,required,value}) {
    return (<input type={type||"radio"} ref={register} name={name||"name"} className={`${classes}`} style={styles} disabled={disabled||false} required={required||false} value={value||""}  />);
}
