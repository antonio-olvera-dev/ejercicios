//https://home.openweathermap.org/
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
    getTemp(text);
   }

});

document.querySelector('#bt').addEventListener('click', () => {
    let text = '';
    text = document.querySelector('#et').value;

    getTemp(text);

})

function getTemp(city) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${myKey}`);
    xhr.send();

    //------------------------------------------

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log(`Error: ${xhr.statusText}`);
            alert('No se ha encontrado la ciudad indicada')
        } else {
            const data = JSON.parse(xhr.response);

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
        }

    }

}



function print() {
    document.querySelector('#datos').innerHTML = '';
    print2(`Clima: ${myObjet.weather}`);
    print2(`Descripción del clima: ${myObjet.weatherDescription}`);
    print2(`Temperatura: ${myObjet.temp} ºC`);
    print2(`Velocidad del viento: ${myObjet.wind} Ms`);
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


getTemp(cit);


//http://openweathermap.org/img/wn/01d@2x.png
// {
//   "coord": {
//     "lon": -122.08,
//     "lat": 37.39
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 282.55,
//     "feels_like": 281.86,
//     "temp_min": 280.37,
//     "temp_max": 284.26,
//     "pressure": 1023,
//     "humidity": 100
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 1.5,
//     "deg": 350
//   },
//   "clouds": {
//     "all": 1
//   },
//   "dt": 1560350645,
//   "sys": {
//     "type": 1,
//     "id": 5122,
//     "message": 0.0139,
//     "country": "US",
//     "sunrise": 1560343627,
//     "sunset": 1560396563
//   },
//   "timezone": -25200,
//   "id": 420006353,
//   "name": "Mountain View",
//   "cod": 200
//   }                         