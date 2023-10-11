import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  address: yup.string().required(),
  contact_number: yup.string().required(),
  registration_date: yup.date().required(),
  is_active: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
