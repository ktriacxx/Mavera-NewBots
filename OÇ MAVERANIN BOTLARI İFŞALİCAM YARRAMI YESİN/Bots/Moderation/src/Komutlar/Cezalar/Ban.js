const { MessageEmbed } = require('discord.js');
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

    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))// || client.users.fetch(args[0])
    let sebep = args.slice(1).join(' ') || `Sebep Bulunmuyor.`
    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')
    let logEmbed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor("RED")
    if (!message.member.roles.cache.get(bancı) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)

    if(!user) return message.inlineReply(`Lütfen bir kullanıcı belirtiniz! \`.ban @Mavera/ID [reason]\` `).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(user.id === message.author.id) return message.inlineReply(`Kendini sunucudan yasaklayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(user.id === client.user.id) return message.inlineReply(`Botu sunucudan yasaklayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(user.id === user.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Yetkilileri sunucudan yasaklayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));
    if(!message.member.roles.highest.position >= message.member.roles.highest.position) return message.inlineReply(`Senden üst/aynı pozisyonda olan birini sunucudan yasaklayamazsın!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    let atilanAy = moment(Date.now()).format("MM");
    let atilanSaat = moment(Date.now()).format("HH:mm:ss");
    let atilanGün = moment(Date.now()).format("DD");
    let banAtılma = `${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanSaat}`;
    let cezalandırılmaID = warnSettings.get(`cezaID`) + 1

    // database load start ###
    statSettings.add(`${user.id}_puan`, -20) // puan (stat)
    warnSettings.add(`${user.id}_cezaSayı`, 1) // ceza sayısı
    warnSettings.add(`${user.id}_banSayı`, 1) // ban yeme sayısı
    warnSettings.add(`banPuan.${user.id}`, -20) // yasaklanma puanı
    warnSettings.add(`${user.id}`, -20) // ceza puanı
    warnSettings.add(`cezaID`, 1) // ceza ID
    warnSettings.push(`${user.id}_sicil`, {
        userID: user.id,
        adminID: message.author.id,
        Tip: "BAN",
        start: banAtılma,
        cezaID: cezalandırılmaID,
        reason: sebep,
        zaman: "Süresiz"
    })

    let simdikicoin = statSettings.fetch(`${user.id}_puan`) || 0
    // database info end ###

user.ban({ reason: sebep })
user.send(`Merhaba ${user}! **${message.guild.name}** adlı sunucumuzdan \`${sebep}\` sebebi ile yasaklandın!`)

message.inlineReply(embed.setDescription(`${user} (**${user.id}**) üyesi ${message.author} yetkilisi tarafından **${sebep}** sebebiyle yasaklandı. ${yes}`).setImage("https://cdn.discordapp.com/attachments/751526628340793427/781384793207472158/bangif4.gif")).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

client.channels.cache.find(a => a.name == "ban-log").send(logEmbed.setTitle("Bir Kullanıcı Sunucudan Yasaklandı!").setDescription(`
• Ceza ID: \`#${cezalandırılmaID}\`
• Yasaklanan Üye: ${user} (\`${user.id}\`)
• Yasaklayan Yetkili: ${message.author} (\`${message.author.id}\`)
• Yasaklanma Tarihi: \`${banAtılma}\`
• Yasaklanma Sebebi: [\`${sebep}\`]`))

client.channels.cache.find(a => a.name == "penalties-log").send(`${no} ${user}: aldığınız **#${cezalandırılmaID}** ID'li ceza ile **${simdikicoin}** ceza puanına ulaştınız!`);
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['ban', 'yasak', 'yasakla', 'rookie', 'yargı']}
exports.help = {name: 'Ban'}