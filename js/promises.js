//--------- Escribe una promesa que se resuelva correctamente.------------

const random1 = new Promise((resolve, reject) => {

    setInterval(() => {
        let num = Math.random();
        if (num) {
            resolve(num);
        } else {
            reject('error');
        }
    }, 1000);

});
random1
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error));

//-------------Escribe una promesa que se rechace.-------------

const random2 = new Promise((resolve, reject) => {

    setInterval(() => {
        let num = Math.random();
        if (!num) {
            resolve(num);
        } else {
            reject('error');
        }
    }, 2000);

});
random2
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error));


// Escribe una promesa que se resuelva correctamente y resuelva devolviendo un texto cualquiera. 
// Haz que la llamada a la promesa utilice 2 o más .then, enlazando el retorno de un .then con el siguiente.
//  Manipula el texto de un .then al siguiente, haciendo por ejemplo que el texto pase a estar todo en mayúsculas (puedes hacer la transformación que prefieras).

const randomRound = new Promise((resolve, reject) => {

    setInterval(() => {
        let num = Math.random();
        if (num) {
            resolve(num);
        } else {
            reject('error');
        }
    }, 3000);

});
randomRound
    .then(reponse => {
        let num = reponse * 10;
        num = Math.round(num);
        return num;
    })
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error));


// Escribe un Promise.all utilizando las promesas del punto 1 y punto 2. ¿Qué ocurre? ¿Se resuelve?
Promise.all([random1, random2])
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error, 'Han fallado todas'));


// Escribe un Promise.all utilizando las promesas del punto 1 y punto 3. ¿Qué ocurre en este caso? ¿Se resuelve?

Promise.all([random1, randomRound])
    .then(reponse => console.log(reponse, 'Se han ejecutado todas'))
    .catch(error => console.log(error, 'Han fallado todas'));

// Escribe una promesa que se resuelva correctamente y tenga un delay de 5 segundos. Debe devolver un mensaje que la identifique.

const second5 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let num = 1 + 1;
            if (num) {
                resolve(num);
            } else {
                reject('error')
            }
        }, 5000);

    });


}


second5()
    .then(reponse => console.log('promesa de 5 segundos', reponse))
    .catch(error => console.log(error));

// Escribe una promesa que se resuelva correctamente y tenga un delay de 7 segundos. Debe devolver un mensaje que la identifique.

const second7 = new Promise((resolve, reject) => {

    setInterval(() => {
        let num = 1+1;
        if (num) {
            resolve(num);
        } else {
            reject('error');
        }
    }, 7000);

});
second7
    .then(reponse => console.log('promesa de 7 segundos',reponse))
    .catch(error => console.log(error));

    // Utiliza un Promise.race con las promesas de los puntos 6 y 7.

    Promise.race([second5(),second7])
    .then(reponse => console.log(reponse))
    .catch(error => console.log(error))
    .finally(()=>{console.log('La carrera a finalizado')});
