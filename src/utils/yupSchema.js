import * as yup from 'yup';

const contactSchema = yup
.object({
  fullName: yup
    .string()
    .min(3, 'Your name should be at least 3 characters.')
    .max(50, 'Your name cannot be longer than 50 characters.')
    .required('Please enter your full name'),
    subject: yup
    .string()
    .min(3, 'Your subject should be at least 3 characters.')
    .max(20, 'Your subject cannot be longer than 20 characters.')
    .required('Please enter your subject.'),
  email: yup
  .string()
    .email("Email needs to be valid")
    .required('Please enter your email address.'),
  body: yup
    .string()
    .min(3, 'Your text must be atleast 3 characters.')
    .required('Please enter your text.'),
})
.required();


export { contactSchema }
