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
const footerSet = require("../../../../Settings/Guard/Settings.json")

    let embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')
    if (!message.member.roles.cache.get(başlangıç) && !message.member.roles.cache.get(registery) && !message.member.hasPermission(8)) return message.react(no)

// sicil log start ##
    let cezayemesayi = warnSettings.fetch(`ceza.${message.author.id}.sayı`)
    let cezapuan = statSettings.fetch(`${message.author.id}`)
    let jailpuan = warnSettings.fetch(`puan.${message.author.id}.jail`)
    let banpuan = warnSettings.fetch(`puan.${message.author.id}.ban`)
    let mutepuan = warnSettings.fetch(`puan.${message.author.id}.mute`)
    let vmutepuan = warnSettings.fetch(`puan.${message.author.id}.vmute`)
    let jailsayı = warnSettings.fetch(`ceza.${message.author.id}.jail`)
    let mutesayı = warnSettings.fetch(`ceza.${message.author.id}.mute`)
    let vmutesayı = warnSettings.fetch(`ceza.${message.author.id}.vmute`)
    let bansayı = warnSettings.fetch(`ceza.${message.author.id}.ban`)
    if(cezayemesayi == null) cezayemesayi = "0"
    if(cezayemesayi == undefined) cezayemesayi = "0"
    if(cezapuan == null) cezapuan = "0"
    if(cezapuan == undefined) cezapuan = "0"
    if(jailpuan == null) jailpuan = "0"
    if(jailpuan == undefined) jailpuan = "0"
    if(banpuan == null) banpuan = "0"
    if(banpuan == undefined) banpuan = "0"
    if(mutepuan == null) mutepuan = "0"
    if(mutepuan == undefined) mutepuan = "0"
    if(vmutepuan == null) vmutepuan = "0"
    if(vmutepuan == undefined) vmutepuan = "0"
    if(jailsayı == null) jailsayı = "0"
    if(jailsayı == undefined) jailsayı = "0"
    if(mutesayı == null) mutesayı = "0"
    if(mutesayı == undefined) mutesayı = "0"
    if(vmutesayı == null) vmutesayı = "0"
    if(vmutesayı == undefined) vmutesayı = "0"
    if(bansayı == null) bansayı = "0"
    if(bansayı == undefined) bansayı = "0"
// sicil log end ##
// moderation log start ##
let komutkullanımsayı = warnSettings.fetch(`komut.${message.author.id}`);
let bankullanımsayı = warnSettings.fetch(`komut.${message.author.id}.ban`);
let jailkullanımsayı = warnSettings.fetch(`komut.${message.author.id}.ban`);
let mutekullanımsayı = warnSettings.fetch(`komut.${message.author.id}.ban`);
let vmutekullanımsayı = warnSettings.fetch(`komut.${message.author.id}.ban`);

if(komutkullanımsayı == null) komutkullanımsayı = "0"
if(komutkullanımsayı == undefined) komutkullanımsayı = "0"
if(bankullanımsayı == null) bankullanımsayı = "0"
if(bankullanımsayı == undefined) bankullanımsayı = "0"
if(jailkullanımsayı == null) jailkullanımsayı = "0"
if(jailkullanımsayı == undefined) jailkullanımsayı = "0"
if(mutekullanımsayı == null) mutekullanımsayı = "0"
if(mutekullanımsayı == undefined) mutekullanımsayı = "0"
if(vmutekullanımsayı == null) vmutekullanımsayı = "0"
if(vmutekullanımsayı == undefined) vmutekullanımsayı = "0"
// moderation log end ##
// register database start ###
let kaydolmasayi = registerSettings.fetch(`${message.author.id}.kayıt`)
let tagpuan = registerSettings.fetch(`tagpuan.${message.author.id}`)
let tagsayı = registerSettings.fetch(`tag.${message.author.id}.aldır`)
let ekayit = registerSettings.fetch(`erkek.${message.author.id}`)
let kkayit = registerSettings.fetch(`kadın.${message.author.id}`)
let genelpuan = registerSettings.fetch(`coin.${message.author.id}`)

if(kaydolmasayi == null) kaydolmasayi = "0"
if(kaydolmasayi == undefined) kaydolmasayi = "0"
if(tagpuan == null) tagpuan = "0"
if(tagpuan == undefined) tagpuan = "0"
if(tagsayı == null) tagsayı = "0"
if(tagsayı == undefined) tagsayı = "0"
if(ekayit == null) ekayit = "0"
if(ekayit == undefined) ekayit = "0"
if(kkayit == null) kkayit = "0"
if(kkayit == undefined) kkayit = "0"
if(genelpuan == null) genelpuan = "0"
if(genelpuan == undefined) genelpuan = "0"

    message.inlineReply(embed.setDescription(`
${message.author} kullanıcısının sunucu içi verileri aşağıda listelenmiştir.
───────────────
➥ Kullanıcının Yaptığı Toplam **Teyit/Kayıt/Taglı** Sayısı: (\`${genelpuan}\` puan)
• Erkek üye kayıt sayısı: **${ekayit}**
• Kadın üye kayıt sayısı: **${kkayit}**
• Tag aldırdığı üye sayısı: **${tagsayı}** (\`${tagpuan} puan\`)
───────────────
         ➥ Kullanıcının Kullandığı Toplam  **Komut** Sayısı: \`${komutkullanımsayı} komut kullanımı\`
     • **${mutekullanımsayı}** kere chat-mute komutu,
     • **${vmutekullanımsayı}** kere voice-mute,
     • **${jailkullanımsayı}** kere karantina ve
     • **${bankullanımsayı}** kere ban komutu kullanmış.
───────────────
         ➥ Kullanıcının Aldığı Toplam **Ceza** Sayısı: \`${cezayemesayi} ceza sayısı ve ${cezapuan} ceza puanı\` 
    • Chat-Mute ceza alma sayısı:  **${mutesayı}** (\`-${mutepuan} puan\`)
    • Voice-Mute ceza alma sayısı: **${vmutesayı}** (\`-${vmutepuan} puan\`)
    • Karantina cezası alma sayısı: **${jailsayı}** (\`-${jailpuan} puan\`)
    • Sunucudan yasaklanma sayısı: **${bansayı}** (\`-${banpuan} puan\`)
───────────────
${yes} Toplam \`${genelpuan}\` coinin (puan) bulunuyor!
${no} Sunucu içerisinde toplam \`${cezayemesayi}\` kere ceza almışsın!
${no} Sunucu içerisinde toplam \`${kaydolmasayi}\` kere kaydolmuşsun! (\`.isimler @Mavera/ID\`)
`))
  
} // ➥ • ───────────────

exports.conf = { enabled: true, guildOnly: true, aliases: ['user', 'my', 'stat', 'me'], permLevel: 0 }
exports.help = { name: 'Stat-Me' }