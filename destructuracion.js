const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescription() {
        return `${nombre} ${apellido} es ${profesion}`
    }

}

//Como lo hariamos normalmente
// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;

//Destructuración
// const { nombre, apellido, profesion, edad = 50 } = personaje;

//Utilizando destructuración para función
// const imprimirPersonaje = ({ nombre, apellido, profesion, edad = 50 }) => {
//     console.log(nombre, apellido, profesion, edad);

// }

//imprimirPersonaje(personaje);

//Destructuración Array
const personajes = ['Pepe', 'Moni', 'Koki'];

const [p1, p2, p3] = personajes;

console.log(p3);