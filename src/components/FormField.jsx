import React from 'react';

const FormField = ({ name, label, register, errors, inputProps = {} }) => {
  const { type = 'text', ...rest } = inputProps;
  const isTextarea = type === 'textarea';   
   return (
    <div>
    <h4>{label}</h4>
  {isTextarea ? (
    <textarea {...register(name)} {...rest} aria-label={`${name} field`}/>
  ) : (
    <input {...register(name)} {...rest} aria-label={`${name} field`}/>
  )}
  {errors[name]?.message && <p>{errors[name].message}</p>}
</div>
);
};
  
  export  {FormField};