const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
const footerSet = require("../../../../../Settings/Guard/Settings.json")

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

    if (!message.member.roles.cache.get(transporter) && !message.member.roles.cache.get(owner) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(no)
  let maveraninembedcigi = new MessageEmbed().setFooter(footerSet.botdurum).setColor('RANDOM')

    if (!message.member.voice.channel) return message.inlineReply(`Yanına çekmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    const user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    if (!user) return message.inlineReply(`Lütfen bir kullanıcı belirt. \`.çek @Mavera/ID\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    if (!user.voice.channel) return message.inlineReply(`Yanına çekmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    user.voice.setChannel(message.member.voice.channelID)
    message.inlineReply(maveraninembedcigi.setDescription(`${yes} ${user} adlı kullanıcı başarıyla yanınıza çekildi!`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['çek'], permLevel: 0}
exports.help = {name: 'Çek'}