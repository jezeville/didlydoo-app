
let popupSupp = () =>{
    let section = document.querySelector('.overlay');
    section.remove();
}

export let popupPresence = (identite , tableau) =>{
    for (let elem of tableau){
        if(elem.id == identite){
            let div = document.createElement('div');
            div.className = "overlay";
            div.innerHTML = `
            <section class="popup">
            <h2 class="popup_title">Presence list</h2>
            <button class="popup_closeBtn">X</button>
            <h3 class="popup_titleCard">${elem.name}</h3>
        
           
            <div class="popup_box-presence">
                <table class="popup_box-presence-tab">
                    <tr>
                        <td class="popup_box-presence-tab-name"></td>
                        <td>Cellule 1,2</td>
                        <td>Cellule 1,3</td>
        
                    </tr>
                </table>
            </div>
        
            <div class="popup_footer">
                <table class="popup_footer-tab">
                    <tr>
                        <td><input name="name" type="text" class="popup_box-presence-tab-name" id="#" placeholder="Author"></td>
                        <td><button>V</button><button>X</button></td>
                    </tr>
                </table>
            </div>
            </section>`;
            let divContainer = document.querySelector('.divTab');
            divContainer.append(div);
            let btnSupp = document.querySelector('.popup_closeBtn');
            btnSupp.addEventListener('click',popupSupp);
            }   
    }
}



