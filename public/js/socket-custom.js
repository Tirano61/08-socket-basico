


var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
}); 
//on para escuchar informacion
socket.on('disconnect', function(){
    console.log('Perdimos la conexion con el servidor');
});

// emit enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Dario',
    mensaje: 'Hola mundo'
}, function ( resp ){
    console.log('Respuesta server : ' ,  resp);
});

socket.on('enviarMensaje', function(mensaje){
    console.log(`Usuario : ${mensaje.usuario} mensaje : ${mensaje.mensaje}`);
});