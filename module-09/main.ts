import { EmailValidator } from './validators/emailValidator';

let email = 'lorem@email.com';
const validator = new EmailValidator();

let result: boolean = validator.isValid(email);

console.log(`${email} is valid? ${result}`);
