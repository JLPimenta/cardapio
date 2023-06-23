import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import moment = require('moment');

@ValidatorConstraint({ name: 'isDate', async: false })
export class IsDateConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value === 'string') {
      return (
        /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}\s([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(
          value,
        ) && moment(value, 'DD/MM/YYYY HH:mm:ss').isValid()
      );
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a valid string date (Required format: DD/MM/YYYY HH:mm:ss)`;
  }
}
