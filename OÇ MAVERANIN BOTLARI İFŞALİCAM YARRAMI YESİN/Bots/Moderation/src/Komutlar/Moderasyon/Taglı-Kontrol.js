const discord = require("discord.js")
const db = require("quick.db")
const roleSettings = new db.table("role")
const serverSettings = new db.table("server")

exports.run = async(client, message, args) => {
    let taglıRole = roleSettings.get("taglıRol")
    let taglilar1 = message.guild.members.cache.filter(s => !s.bot).filter(s => s.user.username.includes("ζ") && !s.roles.cache.has(taglıRole))

    taglilar1.array().forEach(async (member, index) => {
        setTimeout(async () => {
            await member.roles.add(taglıRole)
        }, index * 1000)
    })

    message.inlineReply(`\`${taglilar1.size}\` kullanıcıya taglı rolü veriliyor.`)
}

exports.conf = {enabled: true, guildOnly: false, aliases: ['tkontrol'], permLevel: 3}
exports.help = {name: 'Taglı-Kontrol'}