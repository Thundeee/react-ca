import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../utils/yupSchema';
import { FormField } from '../components/form/FormField';
import { Button, Typography } from '@mui/material';


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
        <h1>Contact Us!</h1>
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
            label="What is this about?"
            register={register}
            errors={errors}
            inputProps={{type: 'textarea', rows: 4}}
          />
      <Button variant="contained" type="submit">
        Submit
      </Button>   
      <Typography variant="body2" component="p" fontWeight="light" mt={1} mb={1}> 
        Your info is stored securely and will not be shared with anyone.
      </Typography>
       </form>

    </div>
  );
};

export default Contact;