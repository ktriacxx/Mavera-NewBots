const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
const maveraSettings = new db.table("mavera")
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
let jailRole = cezalıSettings.get(`jailled`)
let mutedRole = cezalıSettings.get(`muted`)
let vmutedRole = cezalıSettings.get(`vmuted`)
let suspiciousRole = cezalıSettings.get(`suspicious`)
       let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')

    if (!message.member.roles.cache.get(registery) && !message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.channel.send(embed.setDescription(`${message.author} bir kullanıcı etiketlemelisin! \`.kayıtsız @Mavera/ID\``)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    if (user.id === message.author.id) return message.channel.send(embed.setDescription(`Kendini kayıtsıza atamazsın.`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (user.id === client.user.id) return message.channel.send(embed.setDescription(`Botları kayıtsıza atamazsın.`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (user.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription(`Yetkilileri kayıtsıza atamazsın.`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if (user.hasPermission(8)) return message.channel.send(embed.setDescription(`Yetkilileri kayıtsıza atamazsın.`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    user.roles.set([kayıtsız1])
    message.channel.send(embed.setDescription(`${user} kullanıcısı ${message.author} tarafından kayıtsıza postalandı. ${yes}`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['unregister', 'kayıtsız'], permLevel: 0}
exports.help = {name: 'Kayıtsız'}