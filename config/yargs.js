const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};





const argv = require('yargs')
    .command('crear','Crear elemento por hacer',{
        descripcion
    })
    .command('actualizar','Crear elemento por hacer',{
        descripcion,
        completado
    })
    .command('borrar','Borra una tarea',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}