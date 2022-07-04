const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
    if(!message.author.id === "853164355578888202") return;

//     client.channels.cache.find(a => a.name == "üye-log")
        message.guild.channels.create(`Mavera Log's`, {type: 'category'}).then(parent => {
        message.guild.channels.create('ban-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('karantina-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('mute-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('vmute-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('penalties-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('invite-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('guard-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('tag-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('database-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('mesaj-log', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('audit-log', { type: "text" }).then(c => c.setParent(parent.id))
        message.guild.channels.create("voice-log", { type: "text" } ).then(c => c.setParent(parent.id))
        message.guild.channels.create("ability-log", { type: "text" }).then(c => c.setParent(parent.id))
        message.inlineReply(`:white_check_mark: Log kanalları başarıyla kuruldu! Kurduğum kanalları **Mavera Log's** adlı kategoriye koydum!`, true).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
})}

exports.conf = { enabled: true, guildOnly: true, aliases: ['kanalkur'], permLevel: 4 }
exports.help = { name: 'Kanal-Kurulum' }