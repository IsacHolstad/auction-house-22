import {USER_REGISTER_URL} from "./settings/api.js";

console.log(USER_REGISTER_URL);
import {validatePassword, validationEmail} from "./utils/validation.js";

console.log(validationEmail, validatePassword);

const signUpForm = document.querySelector("#signup-form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError");
const emailErrorNotValid = document.querySelector("#emailErrorNotValid")




console.log(signUpForm, firstName, firstNameError, email, emailError, emailErrorNotValid);


