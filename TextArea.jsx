import React from 'react';

import PropTypes from 'prop-types';

export default function TextArea({ attributes, register, error }) {
  const {
    type, name, value, minLength, maxLength, required, disabled, readOnly, styles, className, pattern, id, rows, cols, placeholder,
  } = attributes;
  const defaultStyle = {
    resize: 'none',
    // fontFamily: 'Fira Sans', sans-serif;
  };
  return (

    <textarea
      type={type} // required
      name={name} // required
      id={id || name}
      ref={register({ required: true })}
      defaultValue={value || ''}
      minLength={minLength || ''}
      maxLength={maxLength || ''}
      required={!!required}
      disabled={!!disabled}
      readOnly={!!readOnly}
      styles={`${styles} ${defaultStyle}`}
      className={`w-2/3 p-1 text-sm font-bold border border-green-400 text-dark '${className}'`}
      pattern={`'${pattern}'`} // password, text, tel
      placeholder={placeholder || name}
      rows={rows || 2}
      cols={cols || 2}
      spellCheck="true"
      wrap="hard" // hard - soft - off
      autoComplete="on" // on - off
      autoCapitalize="words"
      error={error}
    />

  );
}
// Same approach for defaultProps too
TextArea.defaultProps = {
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
  rows: PropTypes.number,
  cols: PropTypes.number,
  placeholder: PropTypes.string,

};
