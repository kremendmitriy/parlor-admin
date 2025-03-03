import * as Yup from 'yup';

export const validationSchema = Yup.object({
  customerName: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name must not exceed 30 characters')
    .matches(
      /^[A-Za-z\s]+$/,
      'Name cannot contain numbers or special characters',
    )
    .required('Customer name is required'),

  customerPhone: Yup.string()
    .matches(
      /^[+1-9][0-9]{9,14}$/,
      'Phone number must be in a valid format (e.g., +1234567890)',
    )
    .required('Customer phone is required'),

  tattooType: Yup.string()
    .matches(
      /^[A-Za-z\s]+$/,
      'Tattoo type cannot contain numbers or special characters',
    )
    .required('Tattoo type is required'),

  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string()
    .required('End time is required')
    .test(
      'is-after-start',
      'End time must be after start time',
      function (value) {
        const { startTime } = this.parent;
        return startTime && value > startTime;
      },
    ),
});
