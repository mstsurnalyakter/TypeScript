"use strict";
// const form = document.querySelector("form")!;
// const form = document.querySelector("form") as HTMLFormElement;
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const feedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        feedback: feedback.value
    };
    console.log(data);
});
