
const email = /^(?!.*\.{2})[a-zA-Z0-9.-_]{1,50}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;


export {  email, password }

