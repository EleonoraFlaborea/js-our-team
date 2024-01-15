/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede prendendo a esempio uno dei due layout proposti

DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

const team = document.getElementById('team')


//Creo l’array di oggetti
const profile = [
    {
        name: 'Wayne Barnett',
        role: 'Chief Editor',
        picture: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Founder & CEO',
        picture: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg',
    }
]
//stampo in console tutti i nomi, ruoli e stringa foto
/*for (let key in profile){
   console.log('Name: ',profile[key].name)
   console.log('Role: ',profile[key].role)
   console.log('Picture: ',profile[key].picture)
}*/


//stampo su DOM,tutto stringa
let items= '';

for (let i = 0; i < profile.length; i++){
    const people = profile[i];
    items += '<li>';
    items += `<h4>NOME: ${people.name}</h4>`;
    items += `<p>RUOLO: ${people.role}</p>`;
    items += `<img>IMG: ${people.picture}</img>`;

    //! come renderla img????
    //! items += `<img src="${people.picture}" alt="></img>`;

    items += '</li>';
}

team.innerHTML = items;


//Organizzare i singoli membri in card 
//creo tante card quanti sono i membri

/*const cardContainer = document.querySelector('card-container')

function createCard(name, role){
    const card = document.createElement('div');
    card.classList.add('card');

    const cardName = document.createElement('h3');
    cardName.textContent = name;

    const cardRole = document.createElement('p');
    cardRole.textContent = role;

    card.appendChild(cardName);
    card.appendChild(cardRole);

    return;
}*/




//TODO:
/*

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede prendendo a esempio uno dei due layout proposti*/