const Discord = require('discord.js')

exports.run = async(client, msg, args) => {

let user = msg.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return msg.inlineReply(`Lütfen bir kullanıcı belirt. \`.cihaz @Mavera/ID\` `)

if(user.presence.status === "offline") return msg.inlineReply(`\`${user.tag}\` kullanıcısı çevrimdışı olduğu için giriş yaptığı cihazı tespit edemiyorum.`)
let p = Object.keys(user.presence.clientStatus).join(',')
let cihazisim = p
.replace(`mobile`,`Mobil Telefon`)
.replace(`desktop`,`Masaüstü Uygulama`)
.replace(`web`,`WEB Tarayıcı`)
msg.inlineReply(`\`${user.tag.replace("`","")}\` kullanıcısının bağlandığı cihaz: \`${cihazisim}\``)}

exports.conf = { enabled: true, guildOnly: true, aliases: [] }
exports.help = { name: 'cihaz' }