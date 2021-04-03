const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'membercount',
	description: 'shows the number of the members in the server',
	async execute(message, args, client){
		const { guild } = message
		const memberCount = guild.memberCount
		
		const memberCountEmbed = new MessageEmbed()
		 .setTitle('Member Count:')
		 .setDescription(memberCount)
		 .setColor('RANDOM');
		 
		 message.channel.send(memberCountEmbed)
	}
}