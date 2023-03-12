const { Events } = require('discord.js');

// Evento para autorização de login
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Pronto! Login realizado como ${client.user.tag}`)
    }

}