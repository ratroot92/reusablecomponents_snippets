import React from 'react';

import PropTypes from 'prop-types';

export default function FileInput({ attributes, register, error }) {
  const {
    type, name, value, disabled, readOnly, styles, className, id, placeholder, required, accept, multiple,
  } = attributes;
  // eslint-disable-next-line react/destructuring-assignment
  const defaultStyle = {

    // fontFamily: 'Fira Sans', sans-serif;
  };
  return (

    <input
      type={type} // required
      name={name} // required
      id={id || name}
      ref={register({ required: true })}
      defaultValue={value || ''}
      required={!!required}
      disabled={!!disabled}
      readOnly={!!readOnly}
      styles={`${styles} ${defaultStyle}`}
      className={`w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '${className}'`}
      placeholder={placeholder || name}
      error={error}
             /*
                 ! period ('.') character. For example: .jpg, .pdf, or .doc.
                 ! The string audio/* meaning 'any audio file'.
                 ! The string video/* meaning 'any video file'.
                 ! The string image/* meaning 'any image file'.
                 ! accept='image/*,.pdf'
                 @ accept='image/png, image/jpeg' or accept='.png, .jpg, .jpeg'
                 @ accept='.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
             */
      accept={accept || ''} // accept='image/png, image/jpeg'
      multiple={!!multiple}
    />

  );
}
// Same approach for defaultProps too
FileInput.defaultProps = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  styles: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  multiple: PropTypes.number,

};
