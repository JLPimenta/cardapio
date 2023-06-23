import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsDateConstraint } from './is-date-validator';

export function IsDate(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      name: 'isDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new IsDateConstraint(),
    });
  };
}
