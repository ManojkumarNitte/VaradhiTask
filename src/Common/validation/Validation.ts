import { validate } from 'validate.js';
import CONSTRAINTS from './constraints';


export class Validation {

    // validate name based on parameter value
    patternValidator(value: string, pattern: any) {
        // return boolean type for valid
        const isValid = pattern.test(value);
        return isValid;
    }

    inputValidator(event: any) {
        let { name, value, id } = event.target;
        // for dynamic object destructuring
        type key = keyof typeof CONSTRAINTS;
        const type: key = id;
        // returns array of strings (error messages) 
        var errors = validate({ [name]: value }, { [name]: CONSTRAINTS[type] });
        if (errors) {
            return errors[name][0]; // return only one error message
        }
        return ''; // return empty if input is valid 
    }

}