/**
 * Permet avec une requête Ajax, de recevoir
 * la température d'une ville en paramètre
 * grâce à une API
 * @param ville
 */
function recevoirTemp(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' +
        ville + '&appid="clefuniqueàtelecharger"&units=metric';
    //création de la requête
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        //si la requête est bien arrivée
        if (requete.readyState === XMLHttpRequest.DONE) {
            //si aucun code d'erreur
            if (requete.status === 200) {
                //stockage de la réponse
                let reponse = requete.response;
                //on récupère la température et la ville dans le fichier json
                let temp = reponse.main.temp;
                let ville = reponse.name;
                //affichage dans le html
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = temp;
            } else {
                alert("Un problème est intervenu");
            }
        }
    }
}
//déclaration de la variable avec une valeur par défaut
let villeChoisie = 'nantes';
recevoirTemp(villeChoisie);

//utilisation du bouton
let changer = document.querySelector('#changer');
changer.addEventListener('click', () => {
    //demande une ville
    villeChoisie = prompt("Quelle est la ville dont vous souhaitez la température ?");
    recevoirTemp(villeChoisie);
});