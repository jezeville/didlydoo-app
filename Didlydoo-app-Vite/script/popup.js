import { addAvailability } from "./addAvailability";

let popupSupp = () =>{
    let section = document.querySelector('.overlay');
    section.remove();
}

export let popupPresence = (identite , tableau) =>{
    for (let elem of tableau){
        if(elem.id == identite){
            let div = document.createElement('div');
            div.className = "overlay";


                let section = document.createElement('section');
                section.className ="popup";
                let h2 = document.createElement('h2');
                h2.className = "popup_title";
                h2.innerHTML = "Presence list";
                let button = document.createElement('button');
                button.className = "popup_closeBtn";
                button.innerHTML = "X";
                let h3 = document.createElement('h3');
                h3.className = "popup_titleCard";
                h3.innerHTML = elem.name;

                //append de section 
                div.append(section);
                section.append(h2);
                section.append(button);
                section.append(h3);

                let divInside = document.createElement('div');
                divInside.className = "popup_box-presence";
                let tableInside1 = document.createElement('table');
                tableInside1.className = "popup_box-presence-tab";
                let trInsideDate = document.createElement('tr');
                let tdInsidename = document.createElement('td');
                tdInsidename.className = 'popup_box-presence-tab-name';

                //Append du tableau
                section.append(divInside);
                divInside.append(tableInside1);
                tableInside1.append(trInsideDate);
                trInsideDate.append(tdInsidename);

            //Montre qui participe 
            console.log(elem);
            for (let people of elem.dates[0].attendees){
                let trPeople = document.createElement('tr');
                trPeople.id = people.name; 
                let tdName = document.createElement('td');
                tdName.className = 'popup_box-presence-tab-name';
                tdName.innerHTML = people.name;
                trPeople.append(tdName);
                tableInside1.append(trPeople);
            }
            setTimeout(() => {
                for (let i = 0; i < elem.dates.length; i++){
                    for (let element of elem.dates[i].attendees){
                        let tdValue = document.createElement('td');
                        if (element.available == true){
                            tdValue.innerHTML = "V";
                        }
                        else if (element.available == false){
                            tdValue.innerHTML = "X";
                        }
                        else {
                            tdValue.innerHtml = "?";
                        }
                        let trCatch = document.getElementById(element.name); 
                        trCatch.append(tdValue);
                    }   
                }
            },100);
            

            //Gestion des addnames 
            let trAdd = document.createElement('tr');
            let tdAdd = document.createElement('td');
            tdAdd.className = 'popup_box-presence-tab-name';
            let inputAdd = document.createElement('input');
            inputAdd.id= "addName";
            inputAdd.placeholder = "Author";
            inputAdd.className = "popup_box-presence-tab-name";
            inputAdd.type = "text";
            tdAdd.append(inputAdd);
            trAdd.append(tdAdd);
            tableInside1.append(trAdd);


            //Gestion des dates
            for (let date of elem.dates){
                let tdDate = document.createElement('td');
                tdDate.innerHTML = date.date;
                trInsideDate.append(tdDate);


                //Mettre les boutons X / V
                let tdButton = document.createElement('td');
                let buttonPresenceV = document.createElement('input');
                buttonPresenceV.type = "radio";
                buttonPresenceV.name = date.date;
                buttonPresenceV.value = true;
                
                let buttonPresenceX = document.createElement('input');
                buttonPresenceX.type = "radio";
                buttonPresenceX.name = date.date;
                buttonPresenceX.value = false;

                tdButton.append(buttonPresenceV)
                tdButton.append(buttonPresenceX);
                trAdd.append(tdButton);
            }
            //Envoyé les données 
            let btnSend = document.createElement('button');
            btnSend.innerHTML = "Envoyé";
            btnSend.addEventListener('click', () => {
                let checkedButtons = document.querySelectorAll('input[type="radio"]:checked');
                let tabData = [];
                checkedButtons.forEach(function(button) {
                    tabData.push({
                        date: button.name,
                        available: button.value === "true" ? true : false
                    });
                });
                addAvailability(identite, tabData);
                let trNew = document.createElement('tr');
                let tdNom = document.createElement('td');
                tdNom.className = "popup_box-presence-tab-name";
                tdNom.innerHTML = inputAdd.value;
                trNew.append(tdNom);
                for (let elem of tabData){
                    let tdValue = document.createElement('td');
                    if (elem.available == true){
                        tdValue.innerHTML = "V";
                    }
                    else if (elem.available == false){
                        tdValue.innerHTML = "X";
                    }
                    trNew.append(tdValue);
                }
                let lastRow = tableInside1.rows[tableInside1.rows.length - 1];
                tableInside1.insertBefore(trNew, lastRow);
            });

            let tdSend = document.createElement('td');
            trAdd.append(tdSend);
            tdSend.append(btnSend);


            let divContainer = document.querySelector('.divTab');
            divContainer.append(div);
            let btnSupp = document.querySelector('.popup_closeBtn');
            btnSupp.addEventListener('click',popupSupp);
            }   
    }
}



