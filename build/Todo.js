"use strict";
const Storagebox = [];
let Addtask = document.getElementById("Addtask");
let tasklist = document.getElementById("tasklist");
let sub = document.getElementById("sub");
sub.addEventListener("click", (e) => {
    if (Addtask.value.length > 0) {
        Storagebox.push(Addtask.value);
        Addtask.value = '';
        displayTask();
    }
});
const displayTask = () => {
    let listHTML = '';
    for (let i = 0; i < Storagebox.length; i++) {
        listHTML += `<li>${Storagebox[i]}<br><button>Edit</button> 
            <button onclick='deleteTask(${i}'>Completed</button></li>`;
    }
    tasklist.innerHTML = listHTML;
};
const deleteTask = (index) => {
    Storagebox.splice(index, 1);
    displayTask();
};
const EditTask = (index) => {
    let Edit = prompt("enter a new name");
    if (Edit !== '') {
        Storagebox.splice(index, 1, `${Edit}`);
        displayTask();
    }
};

