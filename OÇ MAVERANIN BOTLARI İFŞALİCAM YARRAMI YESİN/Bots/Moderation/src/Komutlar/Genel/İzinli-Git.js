const { MessageEmbed, MessageCollector } = require("discord.js")
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
const maveraSettings = new db.table("mavera")

exports.run = async(client, message, args) => {

let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")
let başlangıç = staffSettings.get(`başlangıç`)
let registery = staffSettings.get(`registery`)
let transporter = staffSettings.get(`transporter`)
let muteci = staffSettings.get(`muteci`)
let vmuteci = staffSettings.get(`vmuteci`)
let jailci = staffSettings.get(`jailci`)
let bancı = staffSettings.get(`bancı`)
let kalkmazban = staffSettings.get(`kalkmazBancı`)
let owner = staffSettings.get(`owner`)
let ytalım = staffSettings.get(`ytAlım`)
let erkek1 = registerSettings.get(`erkek1`)
let erkek2 = registerSettings.get(`erkek2`)
let kadın1 = registerSettings.get(`kadın1`)
let kadın2 = registerSettings.get(`kadın2`)
let kayıtsız1 = registerSettings.get(`kayıtsız1`)
let kayıtsız2 = registerSettings.get(`kayıtsız2`)
let serverTag = serverSettings.get(`tag`)
let vip = roleSettings.get(`vip`)
let streamer = roleSettings.get(`streamer`)
let musician = roleSettings.get(`musician`)
let tasarımcı = roleSettings.get(`tasarımcı`)
let sponsor = roleSettings.get(`sponsor`)
let booster = roleSettings.get(`booster`)
let tagMessage = serverSettings.get(`tagMessage`)
let registerTag = registerSettings.get(`kayıtTag`)
let chat = maveraSettings.get(`chat`)
const footerSet = require("../../../../Settings/Guard/Settings.json")

    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let victim = message.guild.member(member)
    if (!victim) return message.inlineReply(`Lütfen bir kullanıcı belirtiniz. \`.igit @Mavera/ID\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (!victim.voice.channel) return message.inlineReply(`Yanına gitmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (!message.member.voice.channel) return message.inlineReply(`Yanına gitmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    message.inlineReply(`${victim}, ${message.author} kullanıcısı odanıza gelmek istiyor. Cevabınız nedir?`).then(async(msg) => {
        msg.react(yes)
        msg.react(no)

        const onayemoji = (reaction, user) => reaction.emoji.id === client.ayarlar.izinliSystemTrue && user.id === victim.id;
        const redemoji = (reaction, user) => reaction.emoji.id === client.ayarlar.izinliSystemFalse && user.id === victim.id;

        let onay = msg.createReactionCollector(onayemoji, { time: 30000, max: 1 })
        let red = msg.createReactionCollector(redemoji, { time: 30000, max: 1 })

        onay.on("collect", async() => {
            await msg.reactions.removeAll()
            message.member.voice.setChannel(victim.voice.channel.id)
            message.inlineReply(emebd.setDescription(`${yes} Kullanıcı sorunuzu kabul etti ve odasına gönderdim.`)).then(m => m.delete({ timeout: 7000 }))})

        red.on("collect", async() => {
            await msg.reactions.removeAll()
            message.inlineReply(embed.setDescription(`${no} Kullanıcı sorunuzu reddettiği için odasına gidemediniz.`)).then(m => m.delete({ timeout: 7000 }))
})})}

exports.conf = {enabled: true, guildOnly: true, aliases: ['izinligit', 'izinli-git', 'igit', 'i-git'], permLevel: 0}
exports.help = {name: 'İzinli-Git'}