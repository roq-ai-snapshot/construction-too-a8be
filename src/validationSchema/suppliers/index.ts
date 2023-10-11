import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  opening_hours: yup.date().nullable(),
  closing_hours: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
