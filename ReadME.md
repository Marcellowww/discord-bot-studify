# STUDIFY DISCORD BOT

_Bot criado na video aula do canal da [Raffaela Ballerine](https://github.com/rafaballerini)._

## Como instalar

_Para usar essa aplicação é necessario ter o **node.js**, **npm** e **git**, instalados em seu computador_

1. Abra o terminal na sua pasta de preferência e de um `git clone https://github.com/Marcellowww/discord-bot-studify.git`
2. Depois dentro do diretório do projeto clonado abra o terminal novamente e de `npm install`
3. Crie um arquivo nomeado **.env** e dentro desse arquivo coloque as informações do bot e do servidor do discord:

```
TOKEN=seu-discord-bot-token-aqui
CLIENT_ID=seu-client-id-aqui
GUILD_ID=seu-guild-id-aqui
```

4. Agora adicione o bot no servidor e de as premições necessárias, você pode estar conferindo o passo a passo no guide do [discord.js](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

5. Rode o deploy de comandos no terminal usando o `node deploy-commands.js`

6. Inicialize o bot no terminal usando `node index.js`
