// setTimeout(() => {
//     console.log('Hola Mundo!');
// }, 2000);

// //Callback
// const saludar = () => {
//     console.log('Hola Mundo!');
// }

// setTimeout(saludar, 2000);



const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Gastón'
    }

    setTimeout(() => {
        callback(user);
    }, 1000);
}

getUserById(10, ({ nombre, id }) => {
    console.log(nombre);
    console.log(id);
});

//Callback's Hell
