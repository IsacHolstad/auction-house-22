function validationEmail(email) {
    const regEx  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
    return !!email.match(regEx);
}

function validatePassword(password, confirmPassword) {
    console.log(password)
    console.log(confirmPassword)
    if (!password) {
        return false;
    }
    if (!confirmPassword) {
        return false;
    }
    return password === confirmPassword;
}
export {validationEmail, validatePassword}