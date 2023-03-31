import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../utils/yupSchema';
import { FormField } from '../components/FormField';


const Contact = () => {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {

    console.log(data);
    
    document.getElementById('contactForm').reset();
  }

  return (
    <div>
        <h1>Contact page</h1>
        <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
        
        <FormField 
            name="fullName"
            label="Full Name"
            register={register}
            errors={errors}
          />

          <FormField 
            name="subject"
            label="Subject"
            register={register}
            errors={errors}
          />

          <FormField 
            name="email"
            label="Email"
            register={register}
            errors={errors}
          />

          <FormField 
            name="body"
            label="Body"
            register={register}
            errors={errors}
            inputProps={{type: 'textarea'}}
          />
      <input type="submit" />
    </form>
    </div>
  );
};

export default Contact;