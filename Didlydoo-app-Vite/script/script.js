import { allEvents } from "./allEvents.js";
import { createEvents } from "./createEvents.js";

import { editEvent } from "./editEvent.js";
import { deleteEvent } from "./deleteEvents.js";
import { popupPresence } from "./popup.js";

//Ajout de date 
let btnAdd = document.getElementById('addDate');
btnAdd.addEventListener('click',()=>{
    let sectionDate = document.querySelector('.sectionDate');
    let input = document.createElement('input');
    input.type = "date";
    input.className = "form_date";
    sectionDate.append(input);
})


let elementCreator = (tableau) =>{
    const main = document.querySelector('main');
    for (let elem of tableau){
        let section = document.createElement('section');
        section.className = "card";
        section.id = elem.id;
        section.innerHTML = `
                <div class="card_header">
                    <p>${elem.author}</p>
                    <button class="card_header_btnEdit"><span class="material-symbols-outlined">edit</span></button>
                    <button class="card_header_btnDelete"><span class="material-symbols-outlined">delete</span></button>
                </div>
                <p class="card_title">${elem.name}</p>
                <p class="card_desc">${elem.description}</p>`;
        for (let element of elem.dates){
            let pDate = document.createElement('p');
            pDate.className= "card_date";
            pDate.innerHTML =  element.date;
            section.append(pDate);
        }        
        let button = document.createElement('button');
        button.className = 'card_btnTab';
        button.innerHTML = 'Présence';
        section.append(button);
        main.append(section);  
    }
}

let tableau = await allEvents();
elementCreator(tableau);

let createNew = async() =>{
        let author = document.getElementById('author').value;
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let dateNodes = document.querySelectorAll('.form_date');
        let date = Array.from(dateNodes).map(dateNode => dateNode.value);
        await createEvents(author , name , description , date);
}

document.getElementById('confirmation').addEventListener('click', createNew);


// suppression
let deleteEvenement = async(id) =>{
    deleteEvent(id);
    let div = document.getElementById(id);
    div.remove();
}
let buttonSupp = document.querySelectorAll('.card_header_btnDelete');
for (let elem of buttonSupp){
    let id = elem.parentElement.parentElement.id;
    elem.addEventListener('click', () => deleteEvenement(id));
}

//Popup de présence
let buttonPresence = document.querySelectorAll('.card_btnTab');
for (let elem of buttonPresence){
    let id = elem.parentElement.id;
    elem.addEventListener('click', () => popupPresence(id , tableau));
}
