"use strict";
//https://openweathermap.org/


let cit = "Madrid";
let temp;

let myObjet = {
    name: '',
    weather: '',
    weatherDescription: '',
    weatherIcon: '',
    temp: '',
    wind: '',
    humidity: ''
};

let blockIni = false;
// cit = prompt('Escriba el nombre de la ciudad');

document.querySelector('#et').addEventListener('keyup', (e) => {


    if (e.key === 'Enter') {
        let text = '';
        text = document.querySelector('#et').value;
        lanzar(text);
    }

});


function lanzar(text) {

    getTemp(text)
        .then(data => {
            myObjet.name = data.name;
            myObjet.weather = data.weather[0].main;
            myObjet.weatherDescription = data.weather[0].description;
            myObjet.weatherIcon = data.weather[0].icon;
            myObjet.temp = data.main.temp;
            myObjet.wind = data.wind.speed;
            myObjet.humidity = data.main.humidity;

            document.getElementById('icono').src = `http://openweathermap.org/img/wn/${myObjet.weatherIcon}@4x.png`;
            document.getElementById('texto-title').innerHTML = myObjet.name;

            print();

            if (!blockIni) {
                document.getElementsByClassName('main')[0].style.display = 'none'
                document.getElementsByClassName('main')[0].style.display = 'flex'
                blockIni = true;
            }



        })
        .catch(error => console.log(error));
}

document.querySelector('#bt').addEventListener('click', () => {
    let text = '';
    text = document.querySelector('#et').value;

    lanzar(text);

})






function getTemp(city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${myKey}`;
    const promesa = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', `${url}`);
        xhr.send();

        //------------------------------------------

        xhr.onload = () => {
            if (xhr.status !== 200) {
                // console.log(`Error: ${xhr.statusText}`);
                reject(`Error: ${xhr.statusText}`);
                // alert('No se ha encontrado la ciudad indicada')
            } else {
                const data = JSON.parse(xhr.response);
                resolve(data);


            }

        }
    });

    return promesa;

}







function print() {
    document.querySelector('#datos').innerHTML = '';
    print2(`Clima: ${myObjet.weather}`);
    print2(`Descripción del clima: ${myObjet.weatherDescription}`);
    print2(`Temperatura: ${myObjet.temp} ºC`);
    //------------------------------------------
    let conver = Number(myObjet.wind) * 3.6;
    print2(`Velocidad del viento: ${conver} km/h`);
    print2(`Humedad: ${myObjet.humidity}%`);



}

function print2(cont) {





    let doc = document.createElement('div');
    doc.classList.add('text')
    let doc2 = document.createElement('p');

    doc.appendChild(doc2);
    let nod = document.createTextNode(`${cont}`);
    doc2.appendChild(nod);

    let elem = document.querySelector('#datos');
    elem.appendChild(doc);

}


lanzar(cit);