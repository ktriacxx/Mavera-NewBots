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
let ageLimit = serverSettings.get(`ageLimit`)


    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    let nick = args[1]
    let age = args[2]
    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')
    if (!message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(registery) && !message.member.hasPermission(8)) return message.react(no)
    if(!user) return message.inlineReply(`Lütfen bir kullanıcı belirtiniz! \`.k @Mavera/ID isim yaş\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!nick || !age) return message.inlineReply(`Lütfen bir isim yaş belirtiniz! \`.k @Mavera/ID isim yaş\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!age < !ageLimit) return message.inlineReply(`Kullanıcı \`${ageLimit}\` yaşından küçük olduğu için işlemler durduruldu! Lütfen kullanıcıyı kaydetmeyiniz.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === message.author.id) return message.inlineReply(`Kendini kayıt edemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === client.user.id) return message.inlineReply(`Botu kayıt edemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!user.id === !user.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Yetkilileri kaydedemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!message.member.roles.highest.position >= message.member.roles.highest.position) return message.inlineReply(`Senden üst/aynı pozisyonda olan birini kayıt edemezsin!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

user.roles.add(kadın1)
user.roles.add(kadın2)
user.roles.remove(kayıtsız1)
user.roles.remove(kayıtsız2)
user.setNickname(`${registerTag} ${nick} | ${age}`)

// database load start ###
registerSettings.add(`kayıt.${message.author.id}`, 1) // start msg.author database
statSettings.add(`coin.${message.author.id}`, 5) // tünelde awp var awq koş
registerSettings.add(`kadın.${message.author.id}`, 1) // end msg.author database
registerSettings.add(`${user.id}.kayıt`, 1) // start user database
registerSettings.add(`kayıt.${user.id}.sayı`, 1)
registerSettings.push(`veri_${user.id}`, { userID: user.id, isim: nick, yas: age, tag: registerTag, rol: kadın1, reason: "Kadın" }) // end user database
// database info end ###

let kayitsayi = await registerSettings.fetch(`${user.id}.kayıt`)
let kayıtveristart = await registerSettings.fetch(`veri_${user.id}`)
if(!kayıtveristart) return message.inlineReply(embed.setDescription(`Kullanıcı "${registerTag} ${nick} | ${age}" olarak kaydedildi.

${no} Kullanıcı sunucumuzda daha önce kaydolmamış.`))

let isimler = kayıtveristart.filter(x => x.userID === user.id).map(map => `\`${registerTag} ${map.isim} | ${map.yas}\` <@&${map.rol}> (\`${map.reason}\`)`).join("\n")
if(isimler === null) isimler = `Kullanıcının isim geçmişi bulunmamaktadır.`
if(isimler === undefined) isimler = `Kullanıcının isim geçmişi bulunmamaktadır.`
if(kayitsayi === null) kayitsayi = `0`
if(kayitsayi === undefined) kayitsayi = `0`

message.inlineReply(embed.setDescription(`Kullanıcı "${registerTag} ${nick} | ${age}" olarak kaydedildi.

${no} Kullanıcının daha önce kaydolduğu isimler aşağıda verilmiştir. (**${kayitsayi}** kere kaydolmuş)

${isimler}`))

client.channel.cache.get(chat).send(`:tada: ${user} aramıza hoşgeldin! Seninle birlikte **${message.guild.members}** kişiye ulaştık!`)
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['k', 'kadın', 'woman']}
exports.help = {name: 'Kadın'}