
const form = document.querySelector(".user-form") as HTMLFormElement;
console.log(form);

const userNameInput = document.querySelector("#username") as HTMLInputElement;
console.log(userNameInput);

const userEmailInput = document.querySelector("#useremail") as HTMLInputElement;
console.log(userEmailInput);

const userCountrySelect = document.querySelector(
    "#country"
) as HTMLSelectElement;
console.log(userCountrySelect);

const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
console.log(userFeedback);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let userData = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userCountry: userCountrySelect.value,
        userFeedback: userFeedback.value,
    };
    console.log(userData);
});