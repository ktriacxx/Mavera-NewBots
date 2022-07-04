const { MessageEmbed } = require("discord.js")
const data = require('quick.db')
let settings = "."
let talkedRecently = new Set()

module.exports = message => { if (talkedRecently.has(message.author.id)) { return }
    talkedRecently.add(message.author.id); setTimeout(() => { talkedRecently.delete(message.author.id)}, 200);
    let client = message.client
    if (message.author.bot) return
    if (!message.content.startsWith(settings.prefix)) return
    let command = message.content.split(' ')[0].slice(settings.prefix.length)
    let params = message.content.split(' ').slice(1)
    let perms = client.elevation(message)
    let cmd
    if (client.commands.has(command)) { cmd = client.commands.get(command)} else if (client.aliases.has(command)) { cmd = client.commands.get(client.aliases.get(command))}
    if (cmd) { if (perms < cmd.conf.permLevel) return
        cmd.run(client, message, params, perms)}}