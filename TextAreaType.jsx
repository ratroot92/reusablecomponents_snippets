// import React, { ReactElement } from 'react';
// import TextField, { TextFieldProps } from '@material-ui/core/TextField';
// import JsxError from '../JsxError';

// const TextAreaType = (props:TextFieldProps) : ReactElement => {
//   try {
//     const [hasError, setHasError] = React.useState(false);

//     const inputProps = {
//       step: 300,
//     };

//     return <TextField id="time" type="time" inputProps={inputProps} />;
//   } catch (e) {
//     console.log('====================================');
//     console.log('Error at ==> ', e);
//     console.log('====================================');
//     return <JsxError {...props} text={e} />;
//   }
// };

// export default TextAreaType;


import React from 'react';

import JsxError from "../JsxError";

const  TextAreaType=(props)=>{


    const localStyle={
        borderRadius:10,
        padding: "12px 20px",
        boxSizing:" border-box",
        border: "2px solid #ccc",
        color:"#000",
        fontSize:16


    }

  try {
    const {name,rows,minLength,maxLength,cols,required,classes,placeholder,defaultValue,ref}=props;
    return (

<textarea 
name={name || "name"}
id={name||"name"}
cols={cols || "100"}
rows={rows ||"5"}
minLength={minLength||1}
maxLength={maxLength||200}
required={required||false}
ref={ref}
className={` ${classes || "" } p-3 border border-dark w-100`}
placeholder={placeholder || "no placeholder"}
defaultValue={defaultValue || ""}
style={localStyle}
>
    
</textarea>
);
  } 
  catch (e) {
    console.log('====================================');
    console.log('Error at ==> ', e);
    console.log('====================================');
    return <JsxError {...props} text={e} />;
  }
};

export default TextAreaType;
