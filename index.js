const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// dotenv - requisitando dados do .env
const dotenv = require("dotenv")
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID} = process.env

//importação dos comandos do bot
const fs = require("node:fs") //modulo nativo do node faz a leitura do arquivo
const path = require("node:path")//modulo natico do node para pegar o caminho do arquivo
const commandsPath = path.join(__dirname, "commands")//criando o diretório dos comando apartir da pasta do projeto
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))//pegando todos os arquivos .js do diretório  

client.commands = new Collection()//criando uma coleção de comandos

for (const file of commandFiles) { //recebendo comandos no index
    //criando o para cada arquivo do array comandoFiles e define o conteudo do modulo exportado para a variavel commands
    const filePath =  path.join(commandsPath, file)
    const command = require(filePath)

    //Verifica se o comando esta com todos os argumentos necessario e adicionao-os a um command collection
    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    }else{
        console.error(`Esse comando em ${filePath} não é um comando válido pois há falta de "data" ou "execute"`)
    }
}
//console.log(client.commands)


//Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`)
});
client.login(TOKEN)


//Listener de interações do bot
client.on(Events.InteractionCreate, async interaction =>{
    //verifica de a interação do úsuario é um comando
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

})