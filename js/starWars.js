// Utilizando la API de SWAPI (https://swapi.dev/), crea una página en la que se muestre un listado con todas las películas de Star Wars. Para cada película,
//  muestra un listado de los personajes que participan en la misma.

// Añade la funcionalidad para que, al hacer click en un personaje, tu aplicación obtenga la información de ese personaje 
// llamando a SWAPI y muestre los datos más relevantes en un desplegable.

// Añade un gif de carga para que el usuario vea que la página está cargando mientras se realizan las peticiones a la API y se muestra la información.

"use strict";

let urlPeliculas = 'https://swapi.dev/api/films';


let objPeliculas;

//pelicula---------------------------------
let main = document.createElement('div');
main.classList.add('pelicula');

let contenidoPelicula = [];




const callApi = async (url) => {
    //si no funciona meter dentro de asyncaway
    document.getElementById('loading-main').style.display = 'flex';
    const dats = await fetch(url);
    let data = await dats.json();
    document.getElementById('loading-main').style.display = 'none';
    console.log(data);
    return data;
}



async function getPeliculas() {

    try {
        let objPelicula = {};
        let data = await callApi(urlPeliculas);

        objPeliculas = data.results;

        for (let i = 0; i < objPeliculas.length; i++) {

            objPelicula = objPeliculas[i];





            //titulo---------------------------------
            let name = document.createElement('div');
            name.classList.add('name-pelicula');

            let nameText = document.createElement('p');

            let namenod = document.createTextNode(`${objPelicula.title}`);
            nameText.appendChild(namenod)
            name.appendChild(nameText);
            main.appendChild(name);





            // personaje-------------------------------------------
            for (let i = 0; i < objPelicula.characters.length; i++) {

                const element0 = objPelicula.characters[i];
                let element = await getPersonajes(element0);



                let name2 = document.createElement('div');
                name2.classList.add('personajes-pelicula');

                let nameText2 = document.createElement('p');

                var a = document.createAttribute("personaje");
                a.value = `${objPelicula.characters[i]}`;
                nameText2.setAttributeNode(a);



                let namenod2 = document.createTextNode(`${element}`);
                nameText2.appendChild(namenod2)
                name2.appendChild(nameText2);
                main.appendChild(name2);


            }


            document.getElementsByClassName('main')[0].appendChild(main);



        }


    } catch (error) {
console.log(error);

    }
}


async function getPersonajes(url) {

    try {
        let person = await callApi(url);

        let element = person.name;
        return element;

    } catch (error) {

    }
}


async function getPersonajesOb(url) {

    try {
        let person = await callApi(url);
        return person;

    } catch (error) {
console.log(error);
    }
}






document.getElementsByClassName('main')[0].addEventListener('click', (e) => {
    document.getElementById('dialog').innerHTML = '';

    let ur = e.path[0].getAttribute('personaje');
    print0(ur);

});

document.getElementById('dialgo-main').addEventListener('click', () => {

    document.getElementById('dialgo-main').style.display = 'none';


});




async function print0(url) {

    try {

        let elem = await getPersonajesOb(url);


        print(`Nombre: ${elem.name}`);
        print(`Altura: ${elem.height}`);
        print(`Peso: ${elem.mass}`);
        print(`Color de pelo: ${elem.hair_color}`);
        print(`Color de ojos: ${elem.eye_color}`);
        print(`Color de piel: ${elem.skin_color}`);



    } catch (error) {
        console.log('Enlace no encontrado: ', error);
    }

}

function print(text) {


    document.getElementById('dialgo-main').style.display = 'flex';


    let name = document.createElement('div');
    name.classList.add('dialog-text');

    let nameText = document.createElement('p');

    let namenod = document.createTextNode(`${text}`);
    nameText.appendChild(namenod)
    name.appendChild(nameText);

    document.getElementById('dialog').appendChild(name);

}


getPeliculas();



// const simu = new Promise((resolve, eject) => {

//     setTimeout(() => {
//         if (true) {
//             resolve('eiiiii');
//         } else {
//             eject = 'mall'
//         }
//     }, 2000);


// });


// const fun = async()=>{

//     try {
//         document.getElementById('loading-main').style.display = 'flex';
     
       
//         let pp = await simu;
//         console.log(pp);
//         document.getElementById('loading-main').style.display = 'none';

//     } catch (error) {

//         console.log(error);

//     }


// }
// fun();

