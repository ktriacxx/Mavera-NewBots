const { MessageEmbed, MessageAttachment } = require('discord.js')
const db = require("quick.db")
const table = require("table")
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
       let sicilembed = new MessageEmbed().setTimestamp().setColor('RANDOM')
   
       if (!message.member.roles.cache.get(registery) && !message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)
  
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.inlineReply(`${message.author} bir kullanıcı etiketlemelisin! \`.sicil @Mavera/ID\``).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

/**
let cezaAlmaSayısı = warnSettings.fetch(`${user.id}_cezaSayı`) || "-0"
let cezaPuan = warnSettings.fetch(`${user.id}`) || "-0"
let jailPuan = warnSettings.fetch(`jailPuan.${user.id}`) || "-0"
let banPuan = warnSettings.fetch(`banPuan.${user.id}`) || "-0"
let mutePuan = warnSettings.fetch(`mutePuan.${user.id}`) || "-0"
let vmutePuan = warnSettings.fetch(`vmutePuan.${user.id}`) || "-0"

let jailSayı = warnSettings.fetch(`${user.id}_jailSayı`) || "-0"
let banSayı = warnSettings.fetch(`${user.id}_banSayı`) || "-0"
let muteSayı = warnSettings.fetch(`${user.id}_muteSayı`) || "-0"
let vmuteSayı = warnSettings.fetch(`${user.id}_vmuteSayı`) || "-0"
*/

let sicilDatabase = await warnSettings.fetch(`${user.id}_sicil`)

let res = await sicilDatabase || [];
if(sicilDatabase) {
let datacik = [["ID", "Tarih", "Tip", "Sebep", "Ceza Süresi"]];
datacik = datacik.concat(res.map(value => {          
  return [
    `#${value.cezaID || "Bulunamadı."}`,
    `${value.start || "Bulunamadı."}`,
    `${value.Tip || "Bulunamadı."}`,
    `${value.reason || "Sebep Bulunmuyor."}`,
    `${value.zaman || "Bulunamadı."}`
  ]
}));
let veriler = table.table(datacik, {
    columns: {
        0: {
            paddingLeft: 1
        },
        1: {
            paddingLeft: 1
        },
        2: {
            paddingLeft: 1,
        },
        3: {
            paddingLeft: 1,
            paddingRight: 1
        },
    },
   border : table.getBorderCharacters(`void`),  
   drawHorizontalLine: function (index, size) {
       return index === 0 || index === 1 || index === size;
   }
})
message.inlineReply(`:no_entry_sign: <@${user.id}> üyesinin tüm ceza verileri aşağıda verilmiştir. \n\`\`\`${veriler}\`\`\``).catch(err => {
  let dosyahazırla 
  dosyahazırla = new MessageAttachment(Buffer.from(veriler), `${user.id}-sicil.txt`);
  message.inlineReply(`:no_entry_sign: <@${user.id}> üyesinin ceza bilgileri çok fazla olduğu için metin belgesi halinde gönderiyorum.`, dosyahazırla); 
}) } else {
  message.inlineReply(`${no} Kullanıcının sicili veritabanımda temiz olarak görünmektedir!`)
}
  }


exports.conf = {enabled: true, guildOnly: true, aliases: ['data', 'sicil'], permLevel: 0}
exports.help = {name: 'Sicil'}