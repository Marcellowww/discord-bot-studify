const { REST, Routes } = require("discord.js")

// dotenv - requisitando dados do .env
const dotenv = require("dotenv")
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID} = process.env

//importação dos comandos do bot

const fs = require("node:fs") //modulo nativo do node faz a leitura do arquivo
const path = require("node:path")//modulo natico do node para pegar o caminho do arquivo
const commandsPath = path.join(__dirname, "commands")//criando o diretório dos comando apartir da pasta do projeto
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))//pegando todos os arquivos .js do diretório  

const commands = []

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON()) //transforma o array de comandos em JSOn
}



//instancia REST


const rest = new REST({version: "10"}).setToken(TOKEN);

//deploy 
(async () => {
    try {
        console.log(`Resetando ${commands.length} coamandos...`)


        //PUT

        //o código usa o método rest.put() para registrar os comandos no servidor do Discord especificado (GUILD_ID). Ele usa o método Routes.applicationGuildCommands() para obter a rota correta para registrar os comandos para um servidor específico, e passa o array de comandos como o corpo da solicitação HTTP.
        const data =  await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log(`Comandos registrados com sucesso!`)
    }
    catch (error) {
        console.error(error)
    }
})()

