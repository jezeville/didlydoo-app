import { allEvents } from "./allEvents.js";
import { createEvents } from "./createEvents.js";
import { addAvailability } from "./addAvailability.js";
import { editEvent } from "./editEvent.js";
import { deleteEvent } from "./deleteEvents.js";
import { popupEdit } from "./popupEdit.js";




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
        let date = [document.getElementById('date').value];
        await createEvents(author , name , description , date);
}

document.getElementById('confirmation').addEventListener('click', createNew);

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

// Popup Edit
let btnEdit = document.querySelectorAll('.card_header_btnEdit');
for (let elem of btnEdit){
    let id = elem.parentElement.parentElement.id;
    elem.addEventListener('click', () => popupEdit(id, tableau));
}