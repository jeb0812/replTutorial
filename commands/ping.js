const { MessageEmbed } = require('discord.js')

module.exports = {
        name: 'ping',
        description: 'shows latency of the bot!',
        async execute(message, args, client) {
                message.reply('Pinging...').then((resultMessage) => {
                        const ping = resultMessage.createdTimestamp - message.createdTimestamp
                        const embed = new MessageEmbed()
                         .setTitle('Pong❗️')
                         .setDescription(`**Bot Latency: ${ping} \n API Latency: ${client.ws.ping}**`)
                         
                         resultMessage.delete()
                         message.reply(embed)
                })
        }
}