const { MessageEmbed } = require('discord.js')
exports.run = async (client ,message, args) =>{

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new MessageEmbed().setDescription(`${message.member}, Bu komutu kullanmak için yeterli yetkiye sahip değilsin!`))
        let yt = message.guild.roles.cache.filter(s => s.permissions.has("ADMINISTRATOR"))
        let rolyt = message.guild.roles.cache.filter(s => s.permissions.has("MANAGE_ROLES"))
        let knlyt = message.guild.roles.cache.filter(s => s.permissions.has("MANAGE_CHANNELS"))

        message.inlineReply(new MessageEmbed().setDescription(`
• **${yt.size}** adet rolde yönetici yetkisi bulunuyor. (${yt.map(s => `${message.guild.roles.cache.get(s.id)}`)}
• **${rolyt.size}** adet rolde rol yönet yetkisi bulunuyor. (${rolyt.map(s => `${message.guild.roles.cache.get(s.id)}`)}
• **${knlyt.size}** adet rolde kanal yönet yetkisi bulunuyor. (${knlyt.map(s => `${message.guild.roles.cache.get(s.id)}`)}
`))
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['ytkontrol', 'ykontrol', 'rolbak', 'rolebak', 'rol-bak', 'role-bak', 'permkontrol', 'perm', 'perms', 'permakontrol'], permLevel: 4}
exports.help = {name: 'Perma-Kontrol'}