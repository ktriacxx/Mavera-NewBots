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

    if (!message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)
 
    let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
    let member = message.guild.member(user)

    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('GREEN')

    const argüman = args[0]
    if (!argüman) {
      return message.inlineReply(embed.setDescription(`${no} Geçersiz bir yetenek belirtildi! Aşağıda tüm yeteneklerin ismi belirtilmiştir.
\`\`\`• vip
• müzisyen
• streamer
• tasarımcı
• sponsor\`\`\` 
${yes} \`.yetenek <yetenek> @Mavera/ID\` `))}

    if (argüman == "vip") { if (!user) return message.react(no)
    member.roles.add(vip)
    message.inlineReply(`${yes} Başarılı bir şekilde ${user} kişisine **vip** rolü verildi.`)}
    
    if (argüman == "sponsor") { if (!user) return message.react(no)
      member.roles.add(sponsor)
      message.inlineReply(`${yes} Başarılı bir şekilde ${user} kişisine **sponsor** rolü verildi.`)}
      
    if (argüman == "streamer") { if (!user) return message.react(no)
      member.roles.add(streamer)
      message.inlineReply(`${yes} Başarılı bir şekilde ${user} kişisine **streamer** rolü verildi.`)}

    if (argüman == "müzisyen") { if (!user) return message.react(no)
      member.roles.add(musician)
      message.inlineReply(`${yes} Başarılı bir şekilde ${user} kişisine **müzisyen** rolü verildi.`)}

    if (argüman == "tasarımcı") { if (!user) return message.react(no)
      member.roles.add(tasarımcı)
      message.inlineReply(`${yes} Başarılı bir şekilde ${user} kişisine **tasarımcı** rolü verildi.`)}

}

exports.conf = { enabled: true, guildOnly: true, aliases: ['yetenek', 'vip', 'müzisyen', 'streamer', 'tasarımcı', 'sponsor', 'ressam', 'şair'] }
exports.help = { name: 'Yetenek' }