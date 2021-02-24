const empleados = [
    {
        id: 1,
        nombre: 'Gastón'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Flavia'
    }
];

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
];

//Función que recibe callback como parametro
//Devuelve un empleade desde esa callback

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
        callback(null, empleado);
        return;
    }
    callback(`El empleado con id ${id} no existe`);

}

const getSueldoById = (id, callback) => {
    const sueldo = sueldos.find((s) => s.id === id);

    if (sueldo) {
        callback(null, sueldo);
        return;
    }
    callback(`El sueldo no existe para el id ${id}`);
}

const id = 1;

getEmpleadoById(id, (error, empleado) => {
    if (error) {
        console.log('ERROR!..');
        console.log(error);
        return;
    }

    getSueldoById(id, (error, sueldo) => {
        if (error) {
            console.log('ERROR!..');
            console.log(error);
            return;
        }
        console.log(`El empleado: ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })

});



//Función que devuelva salario por el id