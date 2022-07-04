const { MessageEmbed } = require("discord.js")
const { statSync } = require("fs")
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı") // level: #5
const ownerSettings = new db.table("owner") // level: #6 -------------------- ( SU ANLIK BULUNMUYOR )
const maveraSettings = new db.table("mavera") // level: #7 -------------------- ( SU ANLIK BULUNMUYOR )

exports.run = async(client, message, args) => {
    let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
    let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")

    let embed = new MessageEmbed().setColor("PURPLE")
    const argüman = args[0]
    const secme = args[1]
    const coklusecim = args.slice(1).join(" ")
    
    // SETTINGS INFO START: LEVEL #1 ( SERVER SETTINGS )
    if (argüman == "sunucuID") { if (!secme) return message.inlineReply(`${no} Lütfen bir sunucu ID belirle! \`.kurulum sunucuID <sunucuID>\` `)
        message.inlineReply(`${yes} Sunucu ID başarıyla \`${secme}\` olarak ayarlandı!`)
        serverSettings.set(`sunucuID`, secme)}

   if (argüman == "tag") { if(!secme) return message.inlineReply(`${no} Lütfen bir tag belirle! \`.kurulum tag <tag>\` `)
        message.inlineReply(`${yes} Etiket tagı başarıyla \`${secme}\` olarak ayarlandı!`)
        serverSettings.set(`tag`, secme)}

    if (argüman == "tagMessage") { if(!coklusecim) return message.inlineReply(`${no} Lütfen bir tag mesajı belirle! \`.kurulum tagMessage <.tag yazınca mesajınız>\` `)
        message.inlineReply(`${yes} Tag mesajı başarıyla \`${coklusecim}\` olarak ayarlandı!`)
        serverSettings.set(`tagMessage`, coklusecim)}

    if (argüman == "ageLimit") { if (!secme) return message.inlineReply(`${no} Lütfen bir kaydolma yaş limiti belirle! \`.kurulum ageLimit <age>\` `)
    message.inlineReply(`${yes} Yaş limiti başarıyla \`${secme}\` olarak ayarlandı!`)
    serverSettings.set(`ageLimit`, secme)}
// SETTINGS INFO END: LEVEL #1 ( SERVER SETTINGS ) ######

    // SETTINGS INFO START: LEVEL #2 ( ROLE SETTINGS )
    if (argüman == "taglıRol") { if(!secme) return message.inlineReply(`${no} Lütfen bir taglı rolü belirle! \`.kurulum taglıRol @role\` `)
    message.inlineReply(`${yes} Taglı rolü başarıyla <@&${secme}> olarak ayarlandı!`)
    roleSettings.set(`taglıRol`, secme) }

    if (argüman == "vip") { if(!secme) return message.inlineReply(`${no} Lütfen bir vip rolü belirle! \`.kurulum vip @role\` `)
    message.inlineReply(`${yes} Vip rolü başarıyla <@&${secme}> olarak ayarlandı!`)
    roleSettings.set(`vip`, secme)}

    if (argüman == "sponsor") { if(!secme) return message.inlineReply(`${no} Lütfen bir sponsor rolü belirle! \`.kurulum sponsor @role\` `)
    message.inlineReply(`${yes} Sponsor rolü başarıyla <@&${secme}> olarak ayarlandı!`)
    roleSettings.set(`sponsor`, secme)}

    if (argüman == "streamer") { if(!secme) return message.inlineReply(`${no} Lütfen bir streamer rolü belirle! \`.kurulum streamer @role\` `)
    message.inlineReply(`${yes} Streamer rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`streamer`, secme)}

    if (argüman == "musician") { if(!secme) return message.inlineReply(`${no} Lütfen bir musician rolü belirle! \`.kurulum musician @role\` `)
    message.inlineReply(`${yes} Musician rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`musician`, secme)}

    if (argüman == "tasarımcı") { if(!secme) return message.inlineReply(`${no} Lütfen bir tasarımcı rolü belirle! \`.kurulum tasarımcı @role\` `)
    message.inlineReply(`${yes} Tasarımcı rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`tasarımcı`, secme)}

    if (argüman == "booster") { if(!secme) return message.inlineReply(`${no} Lütfen bir booster rolü belirle! \`.kurulum booster @role\` `)
    message.inlineReply(`${yes} Booster rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`booster`, secme)}

    if (argüman == "etkinlik") { if(!secme) return message.inlineReply(`${no} Lütfen bir etkinlik katılımcısı rolü belirle! \`.kurulum etkinlik @role\` `)
    message.inlineReply(`${yes} Etkinlik katılımcısı rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`etkinlik`, secme)}

    if (argüman == "çekiliş") { if(!secme) return message.inlineReply(`${no} Lütfen bir çekiliş katılımcısı rolü belirle! \`.kurulum çekiliş @role\` `)
    message.inlineReply(`${yes} Çekiliş katılımcısı rolü başarıyla <@&${secme}> olarak ayarlandı!`); roleSettings.set(`çekiliş`, secme)}
// SETTINGS INFO END: LEVEL #2 ( ROLE SETTINGS ) ######

   // SETTINGS INFO START: LEVEL #3 ( STAFF SETTINGS )
   if (argüman == "başlangıçYetki") { if(!secme) return message.inlineReply(`${no} Lütfen bir başlangıç yetkisi belirle! \`.kurulum başlangıçYetki @role\` `)
   message.inlineReply(`${yes} Başlangıç yetkisi başarıyla <@&${secme}> olarak ayarlandı!`); staffSettings.set(`başlangıç`, secme)}

   if (argüman == "registery") { if(!secme) return message.inlineReply(`${no} Lütfen bir registery rolü belirle! \`.kurulum registery @role\` `)
   message.inlineReply(`${yes} Registery rolü başarıyla <@&${secme}> olarak ayarlandı!`); staffSettings.set(`registery`, secme)}

   if (argüman == "transporter") { if(!secme) return message.inlineReply(`${no} Lütfen bir transporter rolü belirle! \`.kurulum transporter @role\` `)
   message.inlineReply(`${yes} Transporter rolü başarıyla <@&${secme}> olarak ayarlandı!`); staffSettings.set(`transporter`, secme)}

   if (argüman == "muteHammer") { if(!secme) return message.inlineReply(`${no} Lütfen bir muteHammer rolü belirle! \`.kurulum muteHammer @role\` `)
   message.inlineReply(`${yes} Mute hammer rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   staffSettings.set(`muteci`, secme)}

   if (argüman == "vmuteHammer") { if(!secme) return message.inlineReply(`${no} Lütfen bir vmuteHammer rolü belirle! \`.kurulum vmuteHammer @role\` `)
   message.inlineReply(`${yes} Voice mute hammer rolü başarıyla <@&${secme}> olarak ayarlandı!`)
staffSettings.set(`vmuteci`, secme)}

   if (argüman == "jailHammer") { if(!secme) return message.inlineReply(`${no} Lütfen bir jailHammer rolü belirle! \`.kurulum jailHammer @role\` `)
   message.inlineReply(`${yes} Jail hammer rolü başarıyla <@&${secme}> olarak ayarlandı!`)
staffSettings.set(`jailci`, secme)}

   if (argüman == "banHammer") { if(!secme) return message.inlineReply(`${no} Lütfen bir banHammer rolü belirle! \`.kurulum banHammer @role\` `)
   message.inlineReply(`${yes} Ban Hammer rolü başarıyla <@&${secme}> olarak ayarlandı!`)
staffSettings.set(`bancı`, secme)}

   if (argüman == "kalkmazBan") { if(!secme) return message.inlineReply(`${no} Lütfen bir kalkmazBan rolü belirle! \`.kurulum kalkmazBan @role\` `)
   message.inlineReply(`${yes} Kalkmaz ban rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   staffSettings.set(`kalkmazBancı`, secme)}

   if (argüman == "owner") { if(!secme) return message.inlineReply(`${no} Lütfen bir owner rolü belirle! \`.kurulum owner @role\` `)
   message.inlineReply(`${yes} Owner rolü başarıyla <@&${secme}> olarak ayarlandı!`)
staffSettings.set(`owner`, secme)}

   if (argüman == "ytAlım") { if(!secme) return message.inlineReply(`${no} Lütfen bir ytAlım rolü belirle! \`.kurulum ytAlım @role\` `)
   message.inlineReply(`${yes} Yetkili alım rolü başarıyla <@&${secme}> olarak ayarlandı!`)
staffSettings.set(`ytAlım`, secme)}
// SETTINGS INFO END: LEVEL #3 ( STAFF SETTINGS ) ######

   // SETTINGS INFO START: LEVEL #4 ( REGISTER SETTINGS )
   if (argüman == "erkek1") { if(!secme) return message.inlineReply(`${no} Lütfen 1. erkek rolünü belirle! \`.kurulum erkek1 @role\` `)
   message.inlineReply(`${yes} 1. erkek rolü başarıyla <@&${secme}> olarak ayarlandı!`)
registerSettings.set(`erkek1`, secme)}

   if (argüman == "erkek2") { if(!secme) return message.inlineReply(`${no} Lütfen 2. erkek rolünü belirle! \`.kurulum erkek2 @role\` `)
   message.inlineReply(`${yes} 2. erkek rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   registerSettings.set(`erkek2`, secme)}

   if (argüman == "kadın1") { if(!secme) return message.inlineReply(`${no} Lütfen 1. kadın rolünü belirle! \`.kurulum kadın1 @role\` `)
   message.inlineReply(`${yes} 1. erkek rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   registerSettings.set(`kadın1`, secme)}

   if (argüman == "kadın2") { if(!secme) return message.inlineReply(`${no} Lütfen 2. kadın rolünü belirle! \`.kurulum kadın2 @role\` `)
   message.inlineReply(`${yes} 2. kadın rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   registerSettings.set(`kadın2`, secme)}

   if (argüman == "kayıtsız1") { if(!secme) return message.inlineReply(`${no} Lütfen 1. kayıtsız rolünü belirle! \`.kurulum kayıtsız1 @role\` `)
   message.inlineReply(`${yes} 1. kayıtsız rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   registerSettings.set(`kayıtsız1`, secme)}

   if (argüman == "kayıtsız2") { if(!secme) return message.inlineReply(`${no} Lütfen 2. kayıtsız rolünü belirle! \`.kurulum kayıtsız2 @role\` `)
   message.inlineReply(`${yes} 2. kayıtsız rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   registerSettings.set(`kayıtsız2`, secme)}

   if (argüman == "registerTag") { if(!secme) return message.inlineReply(`${no} Lütfen bir kullanıcı kayıt olduğunda başına gelecek sembolü belirleyiniz! \`.kurulum registerTag <sembol>\` `)
   message.inlineReply(`${yes} Kayıt sembolü \`${secme}\` olarak ayarlandı!`)
   registerSettings.set(`kayıtTag`, secme)}
// SETTINGS INFO END: LEVEL #4 ( REGISTER SETTINGS ) ######

    // SETTINGS INFO START: LEVEL #5 ( CEZALI SETTINGS )
   if (argüman == "muted") { if(!secme) return message.inlineReply(`${no} Lütfen muted rolünü belirle! \`.kurulum muted @role\` `)
   message.inlineReply(`${yes} Muted rolü başarıyla <@&${secme}> olarak ayarlandı!`)
cezalıSettings.set(`muted`, secme)}

   if (argüman == "vmuted") { if(!secme) return message.inlineReply(`${no} Lütfen vmuted rolünü belirle! \`.kurulum vmuted @role\` `)
   message.inlineReply(`${yes} Voice muted rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   cezalıSettings.set(`vmuted`, secme)}

   if (argüman == "jailled") { if(!secme) return message.inlineReply(`${no} Lütfen jailled rolünü belirle! \`.kurulum jailled @role\` `)
   message.inlineReply(`${yes} Jailled rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   cezalıSettings.set(`jailled`, secme)}

   if (argüman == "suspicious") { if(!secme) return message.inlineReply(`${no} Lütfen suspicious rolünü belirle! \`.kurulum suspicious @role\` `)
   message.inlineReply(`${yes} Suspicious rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   cezalıSettings.set(`suspicious`, secme)}

   if (argüman == "yasaklıtag") { if(!secme) return message.inlineReply(`${no} Lütfen yasaklı tag rolünü belirle! \`.kurulum yasaklıtag @role\` `)
   message.inlineReply(`${yes} Yasaklı tag rolü başarıyla <@&${secme}> olarak ayarlandı!`)
   cezalıSettings.set(`yasaklıtag`, secme)}
// SETTINGS INFO END: LEVEL #5 ( CEZALI SETTINGS ) ######

   // SETTINGS INFO START: LEVEL #6 ( MAVERA SETTINGS )
   if (argüman == "chat") { if(!secme) return message.inlineReply(`${no} Lütfen chat kanalını belirle! \`.kurulum chat #chatID\` `)
   message.inlineReply(`${yes} Chat kanalı başarıyla <#${secme}> olarak ayarlandı!`)
   maveraSettings.set(`chat`, secme)}

   if (argüman == "welcomeChannel") { if(!secme) return message.inlineReply(`${no} Lütfen welcome kanalını belirle! \`.kurulum welcomeChannel #chatID\` `)
   message.inlineReply(`${yes} Register kanalı başarıyla <#${secme}> olarak ayarlandı!`)
   maveraSettings.set(`welcome`, secme)}

///////////////////// ####### SISTEMDE TANIMLI MI TANIMLI MI CHECKLIYOR ####### \\\\\\\\\\\\\\\\\\\\\
let swid = serverSettings.get(`sunucuID`)
if(swid) swid = "✅"
if(swid == null) swid = "❌"
if(swid == undefined) swid = "❌" /////// SUNUCU ID
let etag = serverSettings.get(`tag`)
if(etag) etag = "✅"
if(etag == null) etag = "❌"
if(etag == undefined) etag = "❌" /////// TAG
let tagmsg = serverSettings.get(`tagMessage`)
if(tagmsg) tagmsg = "✅"
if(tagmsg == null) tagmsg = "❌"
if(tagmsg == undefined) tagmsg = "❌" /////// SUNUCU TAG MESSAGE
let yaşlimit = serverSettings.get(`ageLimit`)
if(yaşlimit) yaşlimit = "✅"
if(yaşlimit == null) yaşlimit = "❌"
if(yaşlimit == undefined) yaşlimit = "❌" /////// YAS LIMIT
let tagges = roleSettings.get(`taglıRol`)
if(tagges) tagges = "✅"
if(tagges == null) tagges = "❌"
if(tagges == undefined) tagges = "❌" /////// ROLE TAGLI ROLE
let vip = roleSettings.get(`vip`)
if(vip) vip = "✅"
if(vip == null) vip = "❌"
if(vip == undefined) vip = "❌" /////// ROLE VIP ROLE
let sponsor = roleSettings.get(`sponsor`)
if(sponsor) sponsor = "✅"
if(sponsor == null) sponsor = "❌"
if(sponsor == undefined) sponsor = "❌" /////// ROLE SPONSOR ROLE
let streamer = roleSettings.get(`streamer`)
if(streamer) streamer = "✅"
if(streamer == null) streamer = "❌"
if(streamer == undefined) streamer = "❌" /////// ROLE STREAMER ROLE
let musician = roleSettings.get(`musician`)
if(musician) musician = "✅"
if(musician == null) musician = "❌"
if(musician == undefined) musician = "❌" /////// ROLE MUSICIAN ROLE
let tasarımcı = roleSettings.get(`tasarımcı`)
if(tasarımcı) tasarımcı = "✅"
if(tasarımcı == null) tasarımcı = "❌"
if(tasarımcı == undefined) tasarımcı = "❌" /////// ROLE TASARIMCI ROLE
let booster = roleSettings.get(`booster`)
if(booster) booster = "✅"
if(booster == null) booster = "❌"
if(booster == undefined) booster = "❌" /////// ROLE BOOSTER ROLE
let başlangıç = staffSettings.get(`başlangıç`)
if(başlangıç) başlangıç = "✅"
if(başlangıç == null) başlangıç = "❌"
if(başlangıç == undefined) başlangıç = "❌" /////// STAFF BASLANGIC YETKISI ROLE
let registery = staffSettings.get(`registery`)
if(registery) registery = "✅"
if(registery == null) registery = "❌"
if(registery == undefined) registery = "❌" /////// STAFF REGISTERY ROLE
let transporter = staffSettings.get(`transporter`)
if(transporter) transporter = "✅"
if(transporter == null) transporter = "❌"
if(transporter == undefined) transporter = "❌" /////// STAFF TRANSPORTER ROLE
let muteci = staffSettings.get(`muteci`)
if(muteci) muteci = "✅"
if(muteci == null) muteci = "❌"
if(muteci == undefined) muteci = "❌" /////// STAFF MUTE HAMMER ROLE
let vmuteci = staffSettings.get(`vmuteci`)
if(vmuteci) vmuteci = "✅"
if(vmuteci == null) vmuteci = "❌"
if(vmuteci == undefined) vmuteci = "❌" /////// STAFF VOICE MUTE HAMMER ROLE
let jailci = staffSettings.get(`jailci`)
if(jailci) jailci = "✅"
if(jailci == null) jailci = "❌"
if(jailci == undefined) jailci = "❌" /////// STAFF JAIL HAMMER ROLE
let bancı = staffSettings.get(`bancı`)
if(bancı) bancı = "✅"
if(bancı == null) bancı = "❌"
if(bancı == undefined) bancı = "❌" /////// STAFF BAN HAMMER ROLE
let kalkmazBan = staffSettings.get(`kalkmazBancı`)
if(kalkmazBan) kalkmazBan = "✅"
if(kalkmazBan == null) kalkmazBan = "❌"
if(kalkmazBan == undefined) kalkmazBan = "❌" /////// STAFF KALKMAZ BAN ROLE
let owner = staffSettings.get(`owner`)
if(owner) owner = "✅"
if(owner == null) owner = "❌"
if(owner == undefined) owner = "❌" /////// STAFF OWNER ROLE
let ytAlım = staffSettings.get(`ytAlım`)
if(ytAlım) ytAlım = "✅"
if(ytAlım == null) ytAlım = "❌"
if(ytAlım == undefined) ytAlım = "❌" /////// STAFF YT ALIM ROLE
let erkek1 = registerSettings.get(`erkek1`)
if(erkek1) erkek1 = "✅"
if(erkek1 == null) erkek1 = "❌"
if(erkek1 == undefined) erkek1 = "❌" /////// REGISTERY ERKEK I ROLE
let erkek2 = registerSettings.get(`erkek2`)
if(erkek2) erkek2 = "✅"
if(erkek2 == null) erkek2 = "❌"
if(erkek2 == undefined) erkek2 = "❌" /////// REGISTERY ERKEK II ROLE
let kadın1 = registerSettings.get(`kadın1`)
if(kadın1) kadın1 = "✅"
if(kadın1 == null) kadın1 = "❌"
if(kadın1 == undefined) kadın1 = "❌" /////// REGISTERY KADIN I ROLE
let kadın2 = registerSettings.get(`kadın2`)
if(kadın2) kadın2 = "✅"
if(kadın2 == null) kadın2 = "❌"
if(kadın2 == undefined) kadın2 = "❌" /////// REGISTERY KADIN II ROLE
let kayıtsız1 = registerSettings.get(`kayıtsız1`)
if(kayıtsız1) kayıtsız1 = "✅"
if(kayıtsız1 == null) kayıtsız1 = "❌"
if(kayıtsız1 == undefined) kayıtsız1 = "❌" /////// REGISTERY KAYITSIZ I ROLE
let kayıtsız2 = registerSettings.get(`kayıtsız2`)
if(kayıtsız2) kayıtsız2 = "✅"
if(kayıtsız2 == null) kayıtsız2 = "❌"
if(kayıtsız2 == undefined) kayıtsız2 = "❌" /////// REGISTERY KAYITSIZ II ROLE
let kayıtTag = registerSettings.get(`kayıtTag`)
if(kayıtTag) kayıtTag = "✅"
if(kayıtTag == null) kayıtTag = "❌"
if(kayıtTag == undefined) kayıtTag = "❌" /////// REGISTERY KAYIT TAG
let muted = cezalıSettings.get(`muted`)
if(muted) muted = "✅"
if(muted == null) muted = "❌"
if(muted == undefined) muted = "❌" /////// CEZALI MUTED ROLE
let vmuted = cezalıSettings.get(`vmuted`)
if(vmuted) vmuted = "✅"
if(vmuted == null) vmuted = "❌"
if(vmuted == undefined) vmuted = "❌" /////// CEZALI VOICE MUTED ROLE
let jailled = cezalıSettings.get(`jailled`)
if(jailled) jailled = "✅"
if(jailled == null) jailled = "❌"
if(jailled == undefined) jailled = "❌" /////// CEZALI JAILLED ROLE
let suspicious = cezalıSettings.get(`suspicious`)
if(suspicious) suspicious = "✅"
if(suspicious == null) suspicious = "❌"
if(suspicious == undefined) suspicious = "❌" /////// CEZALI SUSPICIOUS ROLE
let yasaklı = cezalıSettings.get(`yasaklıtag`)
if(yasaklı) yasaklı = "✅"
if(yasaklı == null) yasaklı = "❌"
if(yasaklı == undefined) yasaklı = "❌" /////// CEZALI YASAKLI TAG ROLE


let chat = maveraSettings.get(`chat`)
if(chat) chat = "✅"
if(chat == null) chat = "❌"
if(chat == undefined) chat = "❌"
let registerChannel = maveraSettings.get(`welcome`)
if(registerChannel) registerChannel = "✅"
if(registerChannel == null) registerChannel = "❌"
if(registerChannel == undefined) registerChannel = "❌"

let etkinlikKatılımcı = roleSettings.get(`etkinlik`)
if(etkinlikKatılımcı) etkinlikKatılımcı = "✅"
if(etkinlikKatılımcı == null) etkinlikKatılımcı = "❌"
if(etkinlikKatılımcı == undefined) etkinlikKatılımcı = "❌"
let çekilişKatılımcı = roleSettings.get(`çekiliş`)
if(çekilişKatılımcı) çekilişKatılımcı = "✅"
if(çekilişKatılımcı == null) çekilişKatılımcı = "❌"
if(çekilişKatılımcı == undefined) çekilişKatılımcı = "❌"

message.inlineReply(embed.addField(`Kurulumun 1. Bölümü Olan Sunucu Sistemi Nedir?`, `Sunucu ile ilgili olan tag, sunucu ID gibi basit kurulumları tamamladıktan sonra sunucu sistemi hazır olacaktır!`)
.addField(`─────────────────────`, `**Sunucu Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız!**
\`\`\`
.kurulum sunucuID (${swid})
.kurulum tag (${etag})
.kurulum tagMessage (${tagmsg})
.kurulum ageLimit (${yaşlimit})
.kurulum chat #chatID
.kurulum welcomeChannel #welcome-to-server\`\`\`
`)
.addField(`Kurulumun 2. Bölümü Olan Rol Sistemi Nedir?`, `Sunucu içerisindeki rolleri tanımladıktan sonraki moderasyon işlemleri için lazım olacak bir kurulum sistemi.`)
.addField(`─────────────────────`, `**Rol Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız! (Lütfen sadece ID giriniz!)**
\`\`\`
.kurulum taglıRol (${tagges})
.kurulum vip (${vip})
.kurulum sponsor (${sponsor})
.kurulum streamer (${streamer})
.kurulum musician (${musician})
.kurulum tasarımcı (${tasarımcı})
.kurulum booster (${booster})
\`\`\`
`)
.addField(`Kurulumun 3. Bölümü Olan Yetkili Sistemi Nedir?`, `Botun yetkili ve moderasyon komutlarını kullanabilmesi için girmeniz gereken çok önemli ID'lerdir! Eğer bir ID girilmezse hiçbir komut __çalışmaz.__`)
.addField(`─────────────────────`, `**Yetkili Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız! (Lütfen sadece ID giriniz!)**
\`\`\`
.kurulum başlangıçYetki (${başlangıç})
.kurulum registery (${registery})
.kurulum transporter (${transporter})
.kurulum muteHammer (${muteci})
.kurulum vmuteHammer (${vmuteci})
.kurulum jailHammer (${jailci})
.kurulum banHammer (${bancı})
.kurulum kalkmazBan (${kalkmazBan})
.kurulum owner (${owner})
.kurulum ytAlım (${ytAlım})
\`\`\`
`)
.addField(`Kurulumun 4. Bölümü Olan Register Sistemi Nedir?`, `Kayıt işlemlerini bitirebilmek/yapabilmek için kurmanız gereken önemli sistemlerden bir tanesidir.`)
.addField(`─────────────────────`, `**Register Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız! (Lütfen sadece ID giriniz!)**
\`\`\`
.kurulum erkek1 (${erkek1})
.kurulum erkek2 (${erkek2})
.kurulum kadın1 (${kadın1})
.kurulum kadın2 (${kadın2})
.kurulum kayıtsız1 (${kayıtsız1})
.kurulum kayıtsız2 (${kayıtsız2})
.kurulum registerTag (${kayıtTag})
\`\`\`
`)
.addField(`Kurulumun 5. Bölümü Olan Cezalı Sistemi Nedir?`, `Ceza komutları uyguladığınız zaman botun yanıt vermesi için yapmanız gereken kurulumlardan biri.`)
.addField(`─────────────────────`, `**Cezalı Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız! (Lütfen sadece ID giriniz!)**
\`\`\`
.kurulum muted (${muted})
.kurulum vmuted (${vmuted})
.kurulum jailled (${jailled})
.kurulum suspicious (${suspicious})
.kurulum yasaklıtag (${yasaklı})
\`\`\`
`)
.addField(`Kurulumun 6. Bölümü Olan Buton-Kurulum Sistemi Nedir?`, `Buton komutlarını kullanırken botun çalışması için kurmanız gereken __son__ sistem!`)
.addField(`─────────────────────`, `**Buton-Kurulum Sistemini Bitirmek İçin Aşağıdaki Komutları Tanımlayınız! (Lütfen aynı şekilde sadece ID giriniz!)**
\`\`\`
.kurulum etkinlik @etkinlikKatılımcısı (${etkinlikKatılımcı})
.kurulum çekiliş @çekilişKatılımcısı (${çekilişKatılımcı})
.ekurulum (Emoji Kurulumu)
\`\`\`
`))
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['kurulum', 'settings'], permLevel: 4 }
exports.help = {name: 'Kurulum'}