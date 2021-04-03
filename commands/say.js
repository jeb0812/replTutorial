module.exports={
        name: 'say',
        description: 'repeats what you say!',
        async execute(message, args, client){
                const content = args.join(" ")
                if(!content) return message.reply('Please tell something for me to say!')
                
                message.channel.send('**' + message.author.username +' says: **' + content)
        }
}