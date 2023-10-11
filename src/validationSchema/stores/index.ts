import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  contact_number: yup.string().required(),
  opening_hours: yup.date().nullable(),
  closing_hours: yup.date().nullable(),
  supplier_id: yup.string().nullable().required(),
});
