//requisitando o construtor de comandos de barra
const { SlashCommandBuilder } = require('discord.js');

//exportando o comando
module.exports = {
//criando um novo comando
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Playlist do Spotfy!'),

    //função assincrona que recebe a interação do client com varias informações
    async execute(interaction) {
        //respoandendo a interação do client
        await interaction.reply('https://open.spotify.com/playlist/2lMlh4CKFNLw8O5d9Orj0G?si=23f77f13456f43a7!');
    }
}