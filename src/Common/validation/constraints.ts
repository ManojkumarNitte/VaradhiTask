import * as PATTERNS from './patterns';

const constraints = {
  generic: {
    presence: {
      allowEmpty: false,
      message: "is required"
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "is required"
    },
    length: {
      minimum: 4,
      message: "must be at least 6 characters in length"
    },
    format: {
      pattern: PATTERNS.email,
      flags: "i",
      message: "can contain only alphanumeric and (_&.)"
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "is required"
    },
    length: {
      minimum: 4,
      message: "must be at least 4 characters in length"
    },
    // format: {
    //   pattern: PATTERNS.password,
    //   message: 'must contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    // }
  },

 

};
export default constraints;
