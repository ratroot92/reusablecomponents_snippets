import * as yup from 'yup';



 function createYupSchema(schema, config) {
  const { name, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach(validation => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  // eslint-disable-next-line no-param-reassign
  schema[name] = validator;
  return schema;
}

export default createYupSchema