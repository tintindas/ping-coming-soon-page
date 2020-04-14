const form = document.getElementById('form');
const email = document.getElementById('email');

const validateEmail = email => {

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const emailVal = email.value;

    if (!emailVal) {
        email.classList.add('error-border');
        document.getElementById('empty-error').classList.replace('hidden', 'error');
        document.getElementById('email-error').classList.replace('error', 'hidden');
    } else {
        if (!validateEmail(emailVal)) {
            email.classList.add('error-border');
            document.getElementById('empty-error').classList.replace('error', 'hidden');
            document.getElementById('email-error').classList.replace('hidden', 'error');
        } else {
            document.getElementById('email-error').classList.replace('error', 'hidden');
            email.classList.remove('error-border');
        }
    }
});