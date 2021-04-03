const prefix = require('../config').prefix

module.exports = {
	name: 'message',
	execute (message, client) {
		if(!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;
        
        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();
        
        const command = client.commands.get(cmd)
        
        if(command) command.execute(message, args, client)
	}
}