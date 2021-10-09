const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Cliente se a desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log('Esto llego', data);
        
        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'Todo salio Bien',
        //     });
        // }else{
        //     callback({
        //         respuesta: 'Todo salio Mal !!!!!',
        //     });
        // }
    });

    client.emit('bienvenida', {
        usuario: 'servidor',
        mensaje: 'Bienvenido a esta aplicacion',

    })

});