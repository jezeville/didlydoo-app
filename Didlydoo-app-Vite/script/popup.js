var card_btnTab = document.getElementById('card_btnTab');
let divTab = document.querySelector('header');

export function popup() {
    console.log("coucou");
    var htmlContent = `
    <div class="overlay"></div>

            <section class="popup">
                <h2>Presence list</h2>
                <button class="popup_closeBtn">X</button>
                <h3>L'anniversaire de Jeremy</h3>

                    <table>
                        <tr>
                            <td>Cellule 1,1</td>
                            <td>Cellule 1,2</td>
                            <td>Cellule 1,3</td>
                
                        </tr>
                        <tr>
                            <td>Cellule 2,1</td>
                            <td>Cellule 2,2</td>
                            <td>Cellule 2,3</td>    
                        </tr>
                        <tr>
                            <td>Cellule 3,1</td>
                            <td>Cellule 3,2</td>
                            <td>Cellule 3,3</td>
                        </tr>
                    </table>

            </section>
     
    `;

    header.innerHTML = htmlContent;
    closeForm();
    return htmlContent;
}

// Attacher le gestionnaire d'événements de clic au bouton
card_btnTab.addEventListener('click', popup);

// fermer le formulaire
function closeForm() {
    var popup_closeBtn = document.getElementById('popup_closeBtn');
    if (popup_closeBtn) {
        popup_closeBtn.addEventListener('click', function () {
            divTab.innerHTML = '<h1>My Planner</h1>'; // Effacer le contenu du conteneur (on replace juste le titre)
        });
    }
}

console.log("OK");
