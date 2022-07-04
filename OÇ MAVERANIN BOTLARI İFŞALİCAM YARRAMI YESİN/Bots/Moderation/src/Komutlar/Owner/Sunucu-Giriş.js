const Discord = require("discord.js")
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
const maveraSettings = new db.table("mavera")
const logSettings = new db.table("serverLog")

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
const footerSet = require("../../../../../Settings/Guard/Settings.json")

    if (!message.member.roles.cache.get(registery) && !message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)

    message.channel.send(new Discord.MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM').setDescription(`
    • Toplam **${message.guild.memberCount}** üye bulunuyor.
    • Son 1 saatte **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}** üye girişi bulunuyor.
    • Son 1 günde **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}** üye girişi bulunuyor.
    • Son 1 haftada **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}** üye girişi bulunuyor.
    • Son 1 ayda **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}** üye girişi bulunuyor.`)
    )}
  
exports.conf = { enabled: true, guildOnly: true, aliases: ['sunucugiriş', 'sunucu-giriş', 'istatistik'], permLevel: 0 }
exports.help = { name: 'İstatistik' }