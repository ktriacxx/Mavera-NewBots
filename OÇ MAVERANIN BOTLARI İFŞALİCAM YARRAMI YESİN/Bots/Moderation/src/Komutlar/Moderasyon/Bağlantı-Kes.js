const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
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

  const user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    let maveraninembedcigi = new MessageEmbed().setFooter(footerSet.botdurum).setColor('RANDOM')

    if (!user) return message.inlineReply(`Lütfen bir kullanıcı belirt. \`.kes @Mavera/ID\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
   
    if (!user.voice.channel) return message.inlineReply(`Bağlantısını kesmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!message.member.voice.channel) return message.inlineReply(`Bağlantısını kesmek istediğin kullanıcı veya sen bir ses kanalında bulunmuyorsunuz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!message.member.roles.highest.position <= user.roles.highest.position) return message.inlineReply(`Kullanıcının yetkisi sizden üst/aynı pozisyondadır!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (user.id === message.author.id) return message.inlineReply(`Kendi bağlantını kesemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === !user.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Kullanıcının yönetici yetkisi bulunuyor!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    message.guild.member(user.id).voice.setChannel(null)
    message.inlineReply(maveraninembedcigi.setDescription(`${yes} ${message.author} isimli kullanıcı ${user} isimli üyenin bağlantısını kesti!`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['kes', 'bağlantıkes'], permLevel: 0}
exports.help = {name: 'Bağlantı-Kes'}