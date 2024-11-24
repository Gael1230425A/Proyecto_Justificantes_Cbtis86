const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear cliente con almacenamiento local de sesión
const client = new Client({
    authStrategy: new LocalAuth() // Utiliza LocalAuth para manejar la sesión
});

// Mostrar QR si no hay una sesión guardada
client.on('qr', (qr) => {
    console.log('Escanea el siguiente código QR:');
    qrcode.generate(qr, { small: true });
});

// Evento cuando el cliente está listo
client.on('ready', () => {
    console.log('Cliente está listo, sesión iniciada!');

    // Cargar números desde un archivo JSON
    const numbers = JSON.parse(fs.readFileSync('numbers.json'));
    const message = 'Hola, este es un mensaje automatizado!';

    // Enviar mensajes a cada número
    numbers.forEach(number => {
        const chatId = `${number}@c.us`; // Formato correcto del ID de chat
        console.log('Enviando mensaje a:', chatId); // Verifica el número que se está utilizando
        client.sendMessage(chatId, message).then(response => {
            console.log('Respuesta del envío:', response); // Verifica la respuesta
            if (response.id.fromMe) {
                console.log('Mensaje enviado con éxito a:', chatId);
            }
        }).catch(err => {
            console.error('Error al enviar mensaje:', err);
        });
    });
});

// Evento de autenticación
client.on('authenticated', (session) => {
    console.log('Autenticado con éxito');
});

// Evento de desconexión
client.on('auth_failure', (msg) => {
    console.error('Error de autenticación', msg);
});

// Inicializar el cliente
client.initialize();


