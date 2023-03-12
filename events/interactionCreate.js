const { Events, AutoModerationRule } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if(!interaction.isChatInputCommand()) return

        //aqui pegamos o comando enviado pelo usuário
        const command = interaction.client.commands.get(interaction.commandName)
        if(!command) { //verifica se o comando é existente no collection client.commands
            console.error(`Não foi possível encontrar o comando ${interaction.commandName}`)
            return
        }
        try { //tenta executar o comando passando ainteração
            await command.execute(interaction)
        }
        catch (error) {
            console.error(error)
            await interaction.reply('Não foi possivel executar o comando')
        }

    }
}