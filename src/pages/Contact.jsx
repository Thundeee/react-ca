import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../utils/yupSchema';


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
        
       <h4>Full Name</h4> 
      <input {...register('fullName')} />
      <p>{errors.fullName?.message}</p>
        <h4>Subject</h4>
      <input {...register('subject')} />
      <p>{errors.subject?.message}</p>
      <h4>Email</h4>
      <input {...register('email')} />
      <p>{errors.email?.message}</p>
        <h4>Body</h4>
      <input {...register('body')} />
      <p>{errors.body?.message}</p>
      <input type="submit" />
    </form>
    </div>
  );
};

export default Contact;