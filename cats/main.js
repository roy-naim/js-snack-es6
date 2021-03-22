// MILESTONE 1

// Definire un array di oggetti; ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(),
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

const cats = [
    {
        nome: 'Becky',
        eta: 3,
        colore: 'marrone',
        sesso: 'Femmina'
    },
    {
        nome: 'Sami',
        eta: 12,
        colore: 'biondo',
        sesso: 'Maschio'
    },
    {
        nome: 'Juliet',
        eta: 5,
        colore: 'bianca',
        sesso: 'Femmina'
    },
    {
        nome: 'Tom',
        eta: 14,
        colore: 'grigio',
        sesso: 'Maschio'
    },
];

cats.forEach((item) => {
    $('#cats').append(`<li>${item.nome} è di colore ${item.colore}</li>`);
    // console.log(`${item.nome} è di colore ${item.colore}`);
});

// MILESTONE 2

// Dividere i gatti in due contenitori distinti in base al sesso
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.

const maschi = cats.filter((item) => item.sesso == 'Maschio');

const femmine = cats.filter((item) => item.sesso == 'Femmina');

console.log(maschi);
console.log(femmine);

cats.forEach((item) => {
    let colore;
    if(item.sesso == 'Maschio' && item.eta < 14) {
      colore = 'blu';
    } else if (item.sesso == 'Maschio' && item.eta >= 14) {
      colore = 'darkblu';
    }

    if(item.sesso == 'Femmina' && item.eta < 5) {
      colore = 'rosa';
    } else if (item.sesso == 'Femmina' && item.eta >= 5) {
      colore = 'viola';
    }

    $('#cats2').append(`<li class="${colore}">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`);
});

// Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
