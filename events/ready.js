module.exports = {
	name: 'ready',
	once: true,
	execute (client) {
		console.log(client.user.tag + " has logged in!")
        client.user.setPresence({ activity : { name: 'Tutorial', type: 'LISTENING'}, status: 'idle'}); // Status can be 'online' 'idle' or 'dnd' for do not disturb! 
	}
}