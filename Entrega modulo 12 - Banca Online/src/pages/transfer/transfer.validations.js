import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import moment from 'moment/moment';

const dayValidator = ({ value }) => {
  const validatedDate = Number(value);
  const succeeded = validatedDate > 0 && validatedDate <= 31;

  return {
    succeeded,
    message: succeeded ? '' : 'El valor deber ser entre 1 y 31',
    type: '',
  };
};

const monthValidator = ({ value }) => {
  const validatedDate = Number(value);
  const succeeded = validatedDate > 0 && validatedDate <= 12;

  return {
    succeeded,
    message: succeeded ? '' : 'El valor deber ser entre 1 y 12',
    type: '',
  };
};

const isValidDateValidator = ({ value }) => {
  const succeeded = moment(value, 'YYYY-MM-DD').isValid();

  return {
    succeeded,
    message: succeeded ? '' : 'No es una fecha válida',
    type: '',
  };
};

const validationSchema = {
  field: {
    iban: [
      {
        validator: iban.validator,
        message: 'El campo debe tener un formato IBAN válido',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: isNumber.validator,
        message: 'Tienes que insertar un número',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      { validator: dayValidator },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    month: [
      {
        validator: monthValidator,
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    year: [
      {
        validator: isNumber.validator,
        message: 'Tienes que insertar un número',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: minNumber.validator,
        customArgs: { minValue: 2023, inclusive: true },
        message: 'Año actual o superior',
      },
    ],
    date: [
      {
        validator: isValidDateValidator,
      },
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'La fecha tiene que ser en el futuro, a partir de mañana.',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      { validator: Validators.email, message: 'Email no válido' },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
