"use strict";
const form = document.querySelector(".user-form");
console.log(form);
const userNameInput = document.querySelector("#username");
console.log(userNameInput);
const userEmailInput = document.querySelector("#useremail");
console.log(userEmailInput);
const userCountrySelect = document.querySelector("#country");
console.log(userCountrySelect);
const userFeedback = document.querySelector("#feedback");
console.log(userFeedback);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userData = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userCountry: userCountrySelect.value,
        userFeedback: userFeedback.value,
    };
    console.log(userData);
});
