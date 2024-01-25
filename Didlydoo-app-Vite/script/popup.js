var card_btnTab = document.getElementById('card_btnTab');
let header = document.querySelector('header');

function popup() {
    var htmlContent = `
    <div class="overlay"></div>
            <section class="popup">
                <h2>Presence list</h2>
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

    divTab.innerHTML = htmlContent;
    return htmlContent;
}

// // Attacher le gestionnaire d'événements de clic au bouton
// newTaskBtn.addEventListener('click', formulaire);

// // fermer le formulaire
// function closeFormulaire() {
//     var fCloseBtn = document.getElementById('fCloseBtn');
//     if (fCloseBtn) {
//         fCloseBtn.addEventListener('click', function () {
//             divTaskForm.innerHTML = '<h1>My Planner</h1>'; // Effacer le contenu du conteneur (on replace juste le titre)
//         });
//     }
// }
