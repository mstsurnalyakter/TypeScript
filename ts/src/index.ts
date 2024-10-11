// const form = document.querySelector("form")!;
// const form = document.querySelector("form") as HTMLFormElement;
const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;

const userEmail = document.querySelector("#email") as HTMLInputElement;

const userCountry = document.querySelector("#country") as HTMLSelectElement;
const feedback = document.querySelector("#feedback") as HTMLTextAreaElement;


userForm.addEventListener("submit",(e:Event)=>{
    e.preventDefault();
    const data  ={
        userName:userName.value,
        userEmail:userEmail.value,
        feedback:feedback.value
    }
    console.log(data);
})