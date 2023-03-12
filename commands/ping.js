//requisitando o construtor de comandos de barra
const { SlashCommandBuilder } = require('discord.js');

//exportando o comando
module.exports = {
//criando um novo comando
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com pong!'),

    //função assincrona que recebe a interação do client com varias informações
    async execute(interaction) {
        //respoandendo a interação do client
        await interaction.reply('Pong!');
    }
}