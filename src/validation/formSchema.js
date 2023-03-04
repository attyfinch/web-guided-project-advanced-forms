// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
 username: yup
 .string()
 .trim()
 .required('Username is required')
 .min(3, "Username must be at least 3 characters"),
email: yup
 .string()
 .email('must be a valid email address')
 .required('email must be provided'),
role: yup
 .string()
 .oneOf(['instructor', 'student', 'alumni'], 'Role is a required field'),
civil: yup
 .string()
 .oneOf(['single', 'married'], 'You must provide your marital status'),
coding: yup.boolean(),
reading: yup.boolean(),
hiking: yup.boolean()   
})

export default formSchema;