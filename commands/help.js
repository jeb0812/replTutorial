const { MessageEmbed } = require('discord.js')
const { prefix } = require('../config')

module.exports={
	name: 'help',
	description: 'shows all the commands of the bot',
	async execute(message, args, client){
		if(args[0]) {
			const ctg = client.commands.get(args[0])
			if(!ctg) return message.reply('Invalid Command')
			const name = ctg.name
			const desc = ctg.description
			
			const ctgEmbed = new MessageEmbed()
			 .setTitle(`Name: ${name} \nDescription: ${desc}`)
			 .setTimestamp();
			 
			 message.channel.send(ctgEmbed)
		} else {
			let cmds = client.commands.map(command => command.name)
			
			const allEmbed = new MessageEmbed()
			.setTitle('My commands')
			.setDescription('My prefix is \`' + prefix + '\` \n\nHere are all my commands: \n' + `**${cmds.join(', ')}**`)
			.setThumbnail(client.user.displayAvatarURL())
			.setTimestamp();
			
			 message.channel.send(allEmbed)
			
		}
	}
}