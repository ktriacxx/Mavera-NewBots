const discord = require("discord.js")
const db = require("quick.db")
const registerSettings = new db.table("register")

exports.run = async(client, message, args) => {
    let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
    let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")
    let gift = message.guild.emojis.cache.find(x => x.name === "mavera_gift")

    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    if(!user) return message.inlineReply(`Tüm kayıt verileri silinecek bir kullanıcı belirtin! \`.kayıtsıfırla @Mavera/ID\` `)

    registerSettings.delete(`veri_${user.id}`)
    registerSettings.delete(`${user.id}.kayıt`)
    registerSettings.delete(`kayıt.${user.id}.sayı`)
    message.inlineReply(`${yes} ${user.user.tag} kullanıcısının sunucu içerisinde kaydolduğu tüm isimleri veritabanımdan sildim!`)

client.channels.cache.find(a => a.name == "ability-log").send(`${gift} ${message.author} yetkilisi ${user} (\`${user.user.tag}\`) kullanıcısının kaydolduğu isimleri **kayıtsıfırla** komutu ile sıfırladı!`)
}

exports.conf = { enabled: true, guildOnly: true, aliases: ["ksıfırla", "kayıtsıfırla", "kayıt-sıfırla"], permLevel: 3 }
exports.help = { name: "Kayıt-Sıfırla" }