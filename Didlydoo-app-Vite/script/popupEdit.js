import { editEvent } from "./editEvent.js";

let popupSupp = () =>{
    let section = document.querySelector('.overlay');
    section.remove();
}

export let popupEdit = (identite , tableau) =>{
    for (let elem of tableau){
        if(elem.id == identite){
            let div = document.createElement('div');
            div.className = "overlay";
            div.innerHTML = `
                <form class="form_edit">
                    <h2 class="form_edit-title">Edit</h2>
                    <button class="form_edit-closeBtn">X</button>
                    <h3 class="form_edit-titleCard">L'anniversaire de Jeremy</h3>

                    <!-- Event name -->
                    <div>
                        <input name="name" type="text" class="form_edit-author" id="author" placeholder="Author" minlength="3"
                        maxlength="256" required>
                        <input name="name" type="text" class="form_edit-name" id="name" placeholder="Event name" minlength="3"
                        maxlength="256" required>
                    </div>
    
                    <!-- Description -->
                    <div>
                        <textarea name="description" type="text" class="form_edit-desc" id="description" placeholder="Description"
                        minlength="5" maxlength="1024"></textarea>
                    </div>
    
                    <!-- Date & button Submit -->
                    <div>
                        <button class="form_edit-btnSubmit" id="confirmation" type="submit">Submit</button>
                    </div>
                </form>`;
            let divContainer = document.querySelector('.divEdit');
            divContainer.append(div);
                let btnSuppEdit = document.querySelector('.form_edit-closeBtn');
                btnSuppEdit.addEventListener('click',popupSupp);

                let editBtnSubmit = document.querySelector('.form_edit-btnSubmit');
                editBtnSubmit.addEventListener('click', () => editEvent(identite));
            }   
    }
}


