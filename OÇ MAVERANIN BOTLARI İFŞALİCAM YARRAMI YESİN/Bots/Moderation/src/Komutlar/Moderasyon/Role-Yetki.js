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

exports.run = async(client, message, args) => {
  const footerSet = require("../../../../../Settings/Guard/Settings.json")

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

    if (!message.member.roles.cache.get(ytalım) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)
  
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let member = message.guild.member(user)
    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('GREEN')

    const argüman = args[0]
    if (!argüman) {
      return message.inlineReply(embed.setDescription(`${no} Lütfen bir argüman belirt. Belirleyebileceğin argümanları ise aşağıda belirttim.
\`\`\`• ver
• al
• mute
• vmute
• jail
• ban
• transporter
• owner\`\`\` 
${yes} \`.yetki <argüman> @Mavera/ID\` `))}

    if (argüman == "ver") { if (!user) return message.react(no)
    member.roles.add(başlangıç)
    member.roles.add(registery)
    message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${başlangıç}>, <@&${registery}> rolleri verildi.`))}

    if (argüman == "al") { if (!user) return message.react(no)
      member.roles.remove(başlangıç)
      member.roles.remove(registery)
      member.roles.remove(muteci)      
      member.roles.remove(vmuteci)
      member.roles.remove(jailci)
      member.roles.remove(bancı)
      member.roles.remove(owner)
      member.roles.remove(transporter)
      member.roles.remove(kalkmazban)
      member.roles.remove(ytalım)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisindeki tüm roller alındı.`))}

    if (argüman == "mute") { if (!user) return message.react(no)
      member.roles.add(muteci)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${muteci}> rolü verildi.`))}

    if (argüman == "vmute") { if (!user) return message.react(no)
      member.roles.add(vmuteci)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${vmuteci}> rolü verildi.`))}

    if (argüman == "jail") { if (!user) return message.react(no)
      member.roles.add(jailci)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${jailci}> rolü verildi.`))}

    if (argüman == "ban") { if (!user) return message.react(no)
      member.roles.add(bancı)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${bancı}> rolü verildi.`))}

      if (argüman == "transporter") { if (!user) return message.react(no)
        member.roles.add(transporter)
        message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${transporter}> rolü verildi.`))}
  
    if (argüman == "owner") { if (!user) return message.react(no)
      member.roles.add(owner)
      message.inlineReply(embed.setDescription(`${yes} ${user} kişisine <@&${owner}> rolü verildi.`))}
}

exports.conf = { enabled: true, guildOnly: true, aliases: ['yetki', 'yetkiver', 'yetki-ver', 'yetkial', 'yetki-al', 'yetkiliver', 'yetkili-ver', 'yetkiler', 'yetkili-al', 'yetkilial'] }
exports.help = { name: 'Yetki' }