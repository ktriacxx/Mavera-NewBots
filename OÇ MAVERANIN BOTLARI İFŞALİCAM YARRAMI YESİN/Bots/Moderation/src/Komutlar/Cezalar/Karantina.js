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

    if (!message.member.roles.cache.get(jailci) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)

    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RED')

if (!args[1]) return message.inlineReply(`Lütfen bir zaman dilimi belirt. (\`1s/m/h/d/y\`)`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
let timereplace = args[1]
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat')
let reason
var tarih = new Date(Date.now())
var tarih2 = ms(timereplace)
var tarih3 = Date.now() + tarih2
let atılmaay = moment(Date.now()).format("MM")
let atılmagün = moment(Date.now()).format("DD")
let atılmasaat = moment(Date.now()).format("HH:mm:ss")
let bitişay = moment(tarih3).format("MM")
let bitişgün = moment(tarih3).format("DD")
let bitişsaat = moment(tarih3).format("HH:mm:ss")
let jailatılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
let jailbitiş = `\`${bitişgün} ${bitişay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${bitişsaat}\``
moment.locale("tr");

let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
let sure = args[1]
let sebep = args.slice(2).join(' ') || `Sebep Bulunmuyor.`
if(!user) return message.inlineReply(`Lütfen bir kullanıcı belirt. \`.jail @Mavera/ID\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(!args[1]) return message.inlineReply(`Lütfen bir zaman dilimi belirt. \`(\`1s/m/h/d/y\`)\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(!sebep) return message.inlineReply(`Lütfen bir sebep belirt. (\`Örnek: Sunucu düzenini bozmak\`)`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(message.member.roles.highest.position <= user.roles.highest.position) return message.inlineReply(`İşlem uygulamaya çalıştığın kişi senden üst veya aynı yetkide bulunduğundan işlem iptal edildi!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(user.id === message.author.id) return message.inlineReply(`Kendi üzerinde cezalandırılma işlemi uygulayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(user.id === client.user.id) return message.inlineReply(`Bir botta cezalandırılma işlemi uygulayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
if(user.id === message.guild.OwnerID) return message.inlineReply(`İşlem uygulamaya çalıştığın kişi senden üst veya aynı yetkide bulunduğundan işlem iptal edildi!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

let zaman1 = args[1].replace("sn", "s").replace("dk", "m").replace("sa", "h").replace("gün", "d")
let cezalandırılmaID = warnSettings.get(`cezaID`) + 1


statSettings.add(`${user.id}_puan`, -10) // puan (stat)
warnSettings.add(`cezaID`, 1) // ceza ID
warnSettings.add(`${user.id}`, -10) // ceza puanı
warnSettings.add(`${user.id}_jailSayı`, 1) // jail yeme sayısı
warnSettings.add(`jailPuan.${user.id}`, -10) // jail yeme puanı
warnSettings.set(`${user.id}_jailDurum`, true) // jail durumu: true
warnSettings.push(`${user.id}_sicil`, {
    userID: user.id,
    adminID: message.author.id,
    Tip: "JAIL",
    start: jailatılma,
    cezaID: cezalandırılmaID,
    reason: sebep,
    zaman: time
})

message.inlineReply(embed.setDescription(`${user} kullanıcısı **${message.author.tag}** yetkilisi tarafından ${reason} sebebiyle karantinalandı!`)).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
user.roles.add(jailRole)
moment.locale("tr")
client.channels.cache.find(a => a.name == "karantina-log").send(embed.setTitle(`Bir Kullanıcı Cezalandırıldı!`).setDescription(`
\`•\` Ceza numarası: \`#${cezalandırılmaID}\` 
\`•\` Yetkili: ${message.author} (**${message.author.tag}**)
\`•\` Üye: ${user} (**${user.user.tag}**)
\`•\` Sebep: **${sebep}** 
\`•\` Zaman (Süre): **${time}**
\`•\` Atılma Ve Bitiş Tarihi: ${jailatılma} - ${jailbitiş}
`))

let cezapuan = statSettings.fetch(`${user.id}_puan`) || 0

client.channels.cache.find(a => a.name == "penalties-log").send(`${no} ${user}: aldığınız **#${cezalandırılmaID}** numaralı karantina cezası alarak **${cezapuan}** ceza puanına ulaştınız!`)

setTimeout(async () =>{
    user.roles.remove(jailRole)
    warnSettings.delete(`${user.id}_jailDurum`)
    client.channels.cache.find(a => a.name == "karantina-log").send(embed.setDescription(`${user} kullanıcısının karantina cezası bitmiş bulunmaktadır. **#${cezaID}** numaralı cezayı almış ve **${cezapuan}** ceza puanına ulaşmış bulunmaktadır.`))//.setFooter(settings.footer).setTimestamp().setColor('RANDOM'))
}, ms(sure))
        , ms(sure)}

exports.conf = {aliases: ['karantina', 'jail'], permLevel: 0} 
exports.help = {name: "Jail"}