import React from 'react';

const FormField = ({ label, name, register, errors, ...rest }) => {
    return (
      <div>
        <h4>{label}</h4>
        <input {...register(name)} {...rest}   aria-label={`${name} field`}/>
        <p>{errors[name]?.message}</p>
      </div>
    );
  };
  
  export  {FormField};