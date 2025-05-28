'use strict';
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
        alert(`'All form fields must be filled in'`);
        return;
    }
    else {
        const loginForm = {
            email,
            password
        };
        console.log(loginForm);
        form.reset();
    };
});
