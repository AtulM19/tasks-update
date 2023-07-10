'use strict';

const btn = document.getElementById('btn');
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const comments = document.getElementById('comments');
const male = document.getElementById('male');
const female = document.getElementById('female');

form.addEventListener('submit', (e) => {
    console.log(male.checked, female.checked);
    if (fullname.value === "" || comments.value === ""  || (!male.checked && !female.checked)) {
        e.preventDefault();
        alert("All fields are compulsory");
        if (fullname.value === "") fullname.focus();
        else if (comments.value === "") comments.focus();
        else male.checked = true;
    }
    else {
        alert("Form Submitted Successfully")
    }
})