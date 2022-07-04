const { MessageEmbed } = require('discord.js');
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

    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    let nick = args[1]
    let age = args[2]
    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')
    if (!message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(registery) && !message.member.hasPermission(8)) return message.react(no)
    if(!user) return message.inlineReply(`Lütfen bir kullanıcı belirtiniz! \`.isim @Mavera/ID isim yaş\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!nick || !age) return message.inlineReply(`Lütfen bir isim yaş belirtiniz! \`.isim @Mavera/ID isim yaş\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === message.author.id) return message.inlineReply(`İsmini booster olmadığın sürece değiştiremezsin! \`.zengin [yeni ismin]\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === client.user.id) return message.inlineReply(`Botun ismini değişemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === !user.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Yetkililerin ismini değişemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!message.member.roles.highest.position >= message.member.roles.highest.position) return message.inlineReply(`Senden üst/aynı pozisyonda olan birinin ismini değişemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

user.setNickname(`${registerTag} ${nick} | ${age}`)
registerSettings.push(`veri_${user.id}`, { userID: user.id, isim: nick, yas: age, tag: serverTag, reason: "İsim Değişikliği", rol: "Bulunmuyor." })
registerSettings.add(`${user.id}.nickfark`, 1)

let kayitsayi = registerSettings.fetch(`${user.id}.nickfark`)
let kayıtveristart = await registerSettings.fetch(`veri_${user.id}`)
if(!kayıtveristart) return message.inlineReply(embed.setDescription(`Kullanıcının ismi "${registerTag} ${nick} | ${age}" olarak kaydedildi.

${no} Kullanıcı daha önce sunucumuzda ismi değiştirilmemiş!`))
let isimler = kayıtveristart.filter(x => x.userID === user.id).map(map => `\`${registerTag} ${map.isim} | ${map.yas}\` <@&${map.rol}> (\`${map.reason}\`)`).join("\n")
if(isimler === null) isimler = `Kullanıcının verisi bulunmuyor`
if(isimler === undefined) isimler = `Kullanıcının verisi bulunmuyor`
if(kayitsayi === null) kayitsayi = `0`
if(kayitsayi === undefined) kayitsayi = `0`

message.inlineReply(embed.setDescription(`Kullanıcının ismi "${registerTag} ${nick} | ${age}" olarak kaydedildi.

${no} Kullanıcının daha önce değiştiği isimler aşağıda verilmiştir. (**${kayitsayi}** kere ismi değiştirilmiş)

${isimler}`))
}

exports.conf = {aliases: ['isim', 'i'], permLevel: 0} 
exports.help = {name: "İsim"}