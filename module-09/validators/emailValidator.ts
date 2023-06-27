import { Validator } from './validator';

export { EmailValidator };

class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(s);
  }
}
