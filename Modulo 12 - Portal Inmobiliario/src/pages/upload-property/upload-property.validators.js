import { Validators, createFormValidation } from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
  field: {
    title: [{ validator: Validators.required, message: 'Campo requerido' }],
    notes: [{ validator: Validators.required, message: 'Campo requerido' }],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Esto no es un email válido',
      },
    ],
    phone: [
      { validator: Validators.required, message: 'Campo requerido' },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|8|9)\d{8}$/ },
        message: 'No es un número válido',
      },
    ],
    price: [{ validator: Validators.required, message: 'Campo requerido' }],
    saleTypes: [
      {
        validator: arrayRequired,
        message: 'Campo requerido',
      },
    ],

    address: [{ validator: Validators.required, message: 'Campo requerido' }],
    city: [{ validator: Validators.required, message: 'Campo requerido' }],
    province: [{ validator: Validators.required, message: 'Campo requerido' }],
    squareMeter: [
      { validator: Validators.required, message: 'Campo requerido' },
    ],
    rooms: [{ validator: Validators.required, message: 'Campo requerido' }],
    bathrooms: [{ validator: Validators.required, message: 'Campo requerido' }],
    locationUrl: [
      { validator: Validators.required, message: 'Campo requerido' },
      {
        validator: isUrl.validator,
        message: 'La url sugerida no es válida',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern:
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\/maps\/embed/,
        },
        message: 'La url sugerida no es válida',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
