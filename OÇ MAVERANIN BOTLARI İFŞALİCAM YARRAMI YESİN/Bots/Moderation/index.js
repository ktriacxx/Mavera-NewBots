const Discord = require('discord.js');
const { Client, Collection, MessageAttachment } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = (global.client = new Client());
const buttons = (global.buttons = require('discord-buttons'));
buttons(client)
const db = require('quick.db');
const chalk = require('chalk');
const moment = require('moment');
const table = require("table")
moment.locale("tr")
const ms = require("ms");
const fs = require('fs');
require('./src/inlineReply.js')
require('./src/Util/eventLoader.js')(client)

const serverSettings = new db.table("server")
const roleSettings = new db.table("role")
const staffSettings = new db.table("staff")
const registerSettings = new db.table("register")
const ownerSettings = new db.table("owner")
const maveraSettings = new db.table("mavera")
const inviteSettings = new db.table("invite")
const cezalıSettings = new db.table("cezalı")
const botSettings = new db.table("bot")
const channelSettings = new db.table("channel")
const logSettings = new db.table("serverLog")
const afkSettings = new db.table("afk")
const warnSettings = new db.table("cezalar")
const settings = require("../../Settings/Moderation/Settings.json")
const readySetter = require("../../Settings/Guard/Settings.json")
const voiceLoginer = require("../../Settings/Database/Settings.json")

const log = message => { console.log("\x1b[36m%s\x1b[0m",`${message}`) }
client.on("ready", async () => { let ses = client.channels.cache.get(voiceLoginer.voiceChannel); if (ses) ses.join()})
client.on('ready', () => { client.user.setPresence({ activity: { name: readySetter.botdurum } })})

client.on('message', message =>{
  const tagmessage = serverSettings.get(`tagMessage`)
  let taglar = ['tag','TAG','Tag',`!tag`,`!Tag`,`!TAG`,`.tag`,`.Tag`,`.TAG`];
  if(message.author.bot) return
  if(taglar.some(r=>message.content.toLowerCase() ===r )){
    message.inlineReply(`\`${tagmessage}\``)}});

let tagcık = registerSettings.get(`kayıtTag`)
let kayıtsız1 = registerSettings.get(`kayıtsız1`)
let kayıtsız2 = registerSettings.get(`kayıtsız2`)
client.on("guildMemberAdd", member => { member.roles.add(kayıtsız1)});
client.on("guildMemberAdd", member => { member.roles.add(kayıtsız2)});
client.on('guildMemberAdd', member => { member.setNickname(`${tagcık || "AYARLANMADI"} İsim | Yaş`)});

client.login(settings.token).then(c => console.log(`[MODERATION]: ${client.user.username}`)).catch(err => console.error("\x1b[31m%s\x1b[0m", `[MODERATION ERROR]: Bot Giriş Yapamadı!`));

client.on('guildMemberAdd', async member => {
  let jailled = cezalıSettings.get(`jailled`)
  const cezaDurum = cezalıSettings.fetch(`${member.id}_jailDurum`)
  if(cezaDurum) {
  member.roles.set([jailled])
  const embed = new MessageEmbed().setFooter(readySetter.botdurum).setTimestamp()
  member.send(embed.setTitle(`Bir Hapishane Kaçağı Gözüktü!`).setDescription(`Cezan bitmediği halde sunucudan çık-gir yaptığın için tekrar karantinaya alındın! Yanlış bir şey olduğunu düşünüyorsan üst yönetimle iletişime geç.`))
  client.channels.cache.find(a => a.name == "karantina-log").send(`${member} (\`${member.user.tag} - ${member.id}\`) kullanıcısı cezası varken sunucudan gir-çık yaptığı için karantinaya postalandı!`)}})

  client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      let registeryStaff = staffSettings.get(`registery`)
      let registerChannel = maveraSettings.get(`welcome`)
      let jailled = cezalıSettings.get(`jailled`)
     let gun = moment(member.user.createdAt).format("DD")
     let tarih = moment(member.user.createdAt).format("YYYY HH:mm:ss")
     let ay = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
     const kurdum = new Date().getTime() - member.user.createdAt.getTime()
     const gecen = moment.duration(kurdum).format(`YY [yıl], MM [ay]`)
     if (kurdum < 1296000000) kontrol = `kayıt işlemlerin gerçekleştirilemeyecektir.`
     if (kurdum > 1296000000) kontrol = `kayıt olabilmende bir engel bulunmamaktadır.`
     if (kurdum < 1296000000) return client.channels.cache.get(registerChannel).send(`:x: ${member} kullanıcısının hesabı 7 günden önce oluşturulduğu için karantinaya gönderildi!`) && member.roles.set([jailled])
      moment.locale("tr")
      let üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)

      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
        if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {


          "0": `0`,
          "1": `1`,
          "2": `2`,
          "3": `3`,
          "4": `4`,
          "5": `5`,
          "6": `6`,
          "7": `7`,
          "8": `8`,
          "9": `9`
}[d];
})
} 
  
  client.channels.cache.get(registerChannel).send(`:tada: Merhabalar ${member} aramıza hoşgeldin. Seninle beraber sunucumuz **${üyesayısı}** kişiye ulaştı.

Hesabın **${gun} ${ay} ${tarih}** tarihinde oluşturulmuş.

Sunucumuzda kayıt olduğunda <#915610566368825405> kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız.
`)});

//
const Invites = new Discord.Collection();
client.on("ready", () => { client.guilds.cache.forEach(guild => { guild.fetchInvites().then(_invites => { Invites.set(guild.id, _invites);}).catch(err => {});});});
client.on("inviteCreate", (invite) => { var gi = Invites.get(invite.guild.id);
  inviteSettings.set(invite.code, invite);
  Invites.set(invite.guild.id, gi);});
client.on("inviteDelete", (invite) => { var gi = Invites.get(invite.guild.id);
  gi.delete(invite.code);
  Invites.set(invite.guild.id, gi);});

client.on("guildCreate", (guild) => { guild.fetchInvites().then(invites => { Invites.set(guild.id, invites);}).catch(e => {})})

client.on("guildMemberAdd", async (member) => {

  const gi = (Invites.get(member.guild.id) || new Collection()).clone()
  let guild = member.guild
  let total = 0
  let regular = 0 
  let _fake = 0
  let bonus = 0;
  let fake = (Date.now() - member.createdAt) / (1000 * 60 * 60 * 24) <= 3 ? true : false

  guild.fetchInvites().then(async invites => {
    let invite = invites.find(_i => gi.has(_i.code) && gi.get(_i.code).uses < _i.uses) || gi.find(_i => !invites.has(_i.code)) || guild.vanityURLCode;
    Invites.set(member.guild.id, invites);
    if (invite == guild.vanityURLCode) return client.channels.cache.find(a => a.name == "invite-log").send(`:white_check_mark: \`${member.user.tag}\` kullanıcısı özel bir davet linki ile giriş yaptı!`);
    if (invite.inviter) {
      if (fake) { /* total = await inviteSettings.add(`invites.${invite.inviter.id}.total`, 1);
    _fake = await inviteSettings.add(`invites.${invite.inviter.id}.fake`, 1); */ } else { total = await inviteSettings.add(`invites.${invite.inviter.id}.total`, 1);
  /* regular = await inviteSettings.add(`invites.${invite.inviter.id}.regular`, 1); */ }
      bonus = await inviteSettings.get(`invites.${invite.inviter.id}.bonus`) || 0;}
   /* await inviteSettings.set(`invites.${member.id}.isfake`, fake); */

    client.channels.cache.find(a => a.name == "invite-log").send(`:white_check_mark: \`${member.user.tag}\` kullanıcısı sunucuya ${invite.inviter || "-**veritabanında kullanıcıyı bulamadım**-"} kullanıcısı tarafından davet edildi!`)
      /* .replace("-target-", `${invite.inviter}`)
      .replace("-total-", `${total}`)
      .replace("-bonus-", `${bonus}`)
      .replace("-regular-", `${regular}`)
      .replace("-fakecount-", `${_fake}`)
      .replace("-invite-", `${invite && invite.code != undefined ? invite.code : "özel bir davet linki"}`)
      .replace("-fake-", `${fake}`)}).catch();}); */
  })})

client.on("guildMemberRemove", async (member) => {
  var total = 0,
    bonus = 0,
    regular = 0,
    fakecount = 0,
    data = inviteSettings.get(`invites.${member.id}`);
  if (!data) return;

  if (data.isfake && data.inviter) { fakecount = inviteSettings.subtract(`invites.${data.inviter}.fake`, 1);
    total = inviteSettings.subtract(`invites.${data.inviter}.total`, 1);} else if (data.inviter) { regular = inviteSettings.subtract(`invites.${data.inviter}.regular`, 1);
    total = inviteSettings.subtract(`invites.${data.inviter}.total`, 1);}
  if (data.inviter) bonus = inviteSettings.get(`invites.${data.inviter}.bonus`) || 0;

  //inviteSettings.add(`invites.${data.inviter}.leave`, 1);
  client.channels.cache.find(a => a.name == "invite-log").send(`:x: ${member} kullanıcısı sunucudan çıkış yaptı! Bu kullanıcıyı <@${data.inviter || "özel bir URL"}> tarafından davet edilerek giriş yapmıştı.`)})

client.on("messageDelete", async(message) => {
  if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
let snipe = {
mesaj: message.content,
mesajyazan: message.author.id,
ytarihi: message.createdTimestamp,
tarih: Date.now(), 
kl: message.channel.id
}
await logSettings.set(`snipe.${message.guild.id}`, snipe)
}); 

client.on("messageDelete", async message => {
    let log = message.guild.channels.cache.find(a => a.name == "mesaj-log")

   if(log) {
     if (message.author.bot) return;
   const embed = new MessageEmbed().setTimestamp()
     if (message.attachments.first()) {
       client.channels.cache.find(a => a.name == "mesaj-log").send(embed.setAuthor(`${message.author.tag} kullanıcısı fotoğraf sildi!`, message.author.avatarURL()).setDescription(`
${message.author} kullanıcısı <#${message.channel.id}> kanalında bir fotoğraf sildi! Sildiği fotoğraf/gif:`).setImage(message.attachments.first().proxyURL
   ).setColor("RANDOM").setThumbnail(client.user.avatarURL));
       } else {
           client.channels.cache.find(a => a.name == "mesaj-log").send(embed.setAuthor(`${message.author.tag} kullanıcısı mesaj sildi!`, message.author.avatarURL()).setDescription(`
${message.author} kullanıcısı <#${message.channel.id}> kanalında "${message.content}" adlı mesajı sildi!
   `).setColor("RANDOM").setThumbnail(client.user.avatarURL));
       }}
   });
   
   client.on('messageUpdate', async (oldMessage, newMessage) => {

    let log = client.channels.cache.find(a => a.name == "mesaj-log")

   if(log) {
   const embed = new MessageEmbed().setTimestamp()
       if (!oldMessage.guild) return;
       if (oldMessage.content == newMessage.content) return;
   
   client.channels.cache.find(a => a.name == "mesaj-log").send(embed.setAuthor(`${oldMessage.author.tag} kullanıcısı mesaj editledi!`, oldMessage.author.avatarURL()).setDescription(`
${oldMessage.author} kullanıcısı <#${oldMessage.channel.id}> kanalında bir mesajı editledi! Eski mesajı "${oldMessage.content}" iken, **${newMessage.content}** olarak değiştirildi!
   `).setColor("RANDOM").setThumbnail(client.user.avatarURL)); 
     }}
   );

client.on('voiceStateUpdate', async (___, newState) => {
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfDeaf
    ) return newState.setSelfDeaf(true);
})

client.on('voiceStateUpdate', async (___, newState) => {
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfMute
    ) return newState.setSelfMute(true);
})

client.on("message" , message => {
let embed = new MessageEmbed().setFooter(readySetter.botdurum).setColor("RANDOM")
      if(!message.guild) return;
     if (message.content.includes(`afk`)) return;
      let etiket = message.mentions.users.first()
      let uye = afkSettings.fetch(`user_${message.author.id}_${message.guild.id}`)
      let nickk = afkSettings.fetch(`nick_${message.author.id}_${message.guild.id}`)
      if(etiket){
        let reason = afkSettings.fetch(`sebep_${etiket.id}_${message.guild.id}`)
        let uye2 = afkSettings.fetch(`user_${etiket.id}_${message.guild.id}`)
        if(message.content.includes(uye2)){
        let time = afkSettings.fetch(`afktime_${message.guild.id}`);
        let timeObj = ms(Date.now() - time);
          message.channel.send(embed.setDescription(`${etiket} üyesi \`${timeObj}\` süresi boyunca "${reason}" sebebiyle AFK.`).setColor("#2F3136")).then(x => x.delete({ timeout: 5000 }));}}
    if(message.author.id === uye){  
        message.member.setNickname(nickk)
        afkSettings.delete(`sebep_${message.author.id}_${message.guild.id}`)
        afkSettings.delete(`user_${message.author.id}_${message.guild.id}`)
        afkSettings.delete(`nick_${message.author.id}_${message.guild.id}`)
        afkSettings.delete(`user_${message.author.id}_${message.guild.id}`);
        afkSettings.delete(`afktime_${message.guild.id}`)
        let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
        let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")
        message.inlineReply(`${message.author}, AFK modundan başarılı bir şekilde çıktın! ${yes}`).then(x => x.delete({ timeout: 5000 }));
      }  
    })

client.on('voiceStateUpdate', async (oldState, newState) => {
  let voiceLog = client.channels.cache.find(a => a.name == "voice-log")
  if (!oldState.channelID && newState.channelID) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) ses kanalına **giriş yaptı!**`);
  if (oldState.channelID && !newState.channelID) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(oldState.channelID)} (\`${newState.guild.channels.cache.get(oldState.channelID).name}\` - \`${newState.guild.channels.cache.get(oldState.channelID).id}\`) ses kanalından **çıkış yaptı!**`);
  if (oldState.channelID && newState.channelID && oldState.channelID != newState.channelID) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(oldState.channelID)} (\`${newState.guild.channels.cache.get(oldState.channelID).name}\` - \`${newState.guild.channels.cache.get(oldState.channelID).id}\`) kanalından ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) kanalına **geçiş yaptı!**`);
  if (oldState.channelID && oldState.selfMute && !newState.selfMute) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) ses kanalında **kendi susturmasını kaldırdı!**`);
  if (oldState.channelID && !oldState.selfMute && newState.selfMute) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) ses kanalında **kendisini susturdu!**`);
  if (oldState.channelID && oldState.selfDeaf && !newState.selfDeaf) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) ses kanalında **kendi sağırlaştırmasını kaldırdı!**`);
  if (oldState.channelID && !oldState.selfDeaf && newState.selfDeaf) return voiceLog.send(`${newState.guild.members.cache.get(newState.id)} (\`${newState.guild.members.cache.get(newState.id).user.tag}\` - \`${newState.guild.members.cache.get(newState.id).id}\`) kullanıcısı ${newState.guild.channels.cache.get(newState.channelID)} (\`${newState.guild.channels.cache.get(newState.channelID).name}\` - \`${newState.guild.channels.cache.get(newState.channelID).id}\`) ses kanalında **kendisini sağırlaştırdı!**`)

})

client.on("clickButton", async button => {
   if(button.id === "genel") {
     await button.reply.think(true)
     await button.reply.edit(`\`.afk\`: Klavyeden uzaklaşarak **AFK moduna** geçersiniz.
\`.cihaz\` Belirttiğiniz kullanıcının **Discord'a bağlandığı platformu** öğrenirsiniz.
\`.izinliçek (.içek)\`: İstediğiniz birini kendisinden izin alarak yanınıza **çekersiniz.**
\`.izinligit (.igit)\`: İstediğiniz birininin yanına izin alarak **gidersiniz.**
\`.zengin (.booster)\`: İsminizi bu komut ile değiştirebilirsiniz! (Yanlızca **boosterlere özel.**)`)
   }

   if(button.id === "cezalar") {
     await button.reply.think(true)
     await button.reply.edit(`\`.ban\`: Kullanıcıyı sunucudan **yasaklar.**
\`.kalkmazban\`: Komutu kullandığınız kullanıcının yasağı artık **açılamayacaktır.**
\`.jail\`: Belirttiğiniz kullanıcıyı **karantinaya** gönderir.
\`.vmute\`: Kullanıcıyı **sesli** kanallarda susturursunuz.
\`.mute\`: Kullanıcıyı **metin** kanallarında susturursunuz.
\`.sicil\`: Belirttiğiniz kişinin **sicil geçmişine** bakarsınız.
\`.unban\`: Bir kullanıcının yasağını **kaldırırsınız.**
\`.unjail\`: Bir kullanıcının karantina yasağını **kaldırırsınız.**
\`.unvmute\`: Bir kullanıcının sesli kanallar üzerindeki yasağını **kaldırırsınız.**
\`.unmute\`: Bir kullanıcının metin kanalları üzerindeki yasağını **kaldırırsınız.**`)
   }

   if(button.id === "moderasyon") {
     await button.reply.think(true)
     await button.reply.edit(`\`.bağlantıkes\`: Üyenin bağlantısını **kesersiniz.**
\`.çek\`: Kullanıcıyı yanınıza **çekersiniz.**
\`.kilit\`: Kanalı ilk başta **kilitlersiniz,** ikinci kez kullanıdğınızda kanalın **kilidi açılır.**
\`.yetenekal\`: Bir üyenin yeteneğini **alırsınız.**
\`.yetenek\`: Bir üyene yetenek **verirsiniz.**
\`.yetki\`: Birini yetkili yaparsınız.
\`.say\`: Sunucunun anlık **istatistiklerini** öğrenirsiniz.
\`.sil\`: Yazdığınız kadar mesaj **silinir.**
\`.snipe\`: **Son silinen** mesajı gösterir.`)
   }

   if(button.id === "register") {
     await button.reply.think(true)
     await button.reply.edit(`\`.erkek\`: Kullanıcıyı **erkek** olarak kaydedersiniz.
\`.kadın\`: Kullanıcıyı **kadın** olarak kaydedersiniz.
\`.isim\`: Bir kullanıcının **ismini** değiştirirsiniz.
\`.kayıtsız\`: Kullanıcıyı **kayıtsıza** gönderirsiniz.
\`.isimler\`: Belirttiğiniz üyenin isim geçmişine bakarsınız.
`)
   }

   if(button.id === "owner") {
     await button.reply.think(true)
     await button.reply.edit(`\`.ytkontrol\`: Sunucudaki yetkiler kontrol edilir.
\`.istatistik\`: Sunucuya zamanında **giriş yapan** kullanıcıların ortalamalarına bakarsınız.
\`.ysay\`: Aktif olup seste olmayan yetkilileri öğrenirsiniz.
`)
   }
})

client.on("clickButton", async button => {
    let çekilişKatılımcısı = roleSettings.get(`çekiliş`)
    let etkinlikKatılımcısı = roleSettings.get(`etkinlik`)

        if (button.id === "çekiliş") {
        if (button.clicker.member.roles.cache.get(çekilişKatılımcısı)) {
            await button.clicker.member.roles.remove(çekilişKatılımcısı);
            await button.reply.think(true);
            await button.reply.edit(`:tada: <@&${çekilişKatılımcısı}> rolü üzerinizden **alındı!**`);
        } else {
            await button.clicker.member.roles.add(çekilişKatılımcısı);
            await button.reply.think(true);
            await button.reply.edit(`:tada: <@&${çekilişKatılımcısı}> rolü üzerinize **verildi!**`);
        }
    };
    if (button.id === "etkinlik") {
        if (button.clicker.member.roles.cache.get(etkinlikKatılımcısı)) {
            await button.clicker.member.roles.remove(etkinlikKatılımcısı);
            await button.reply.think(true);
            await button.reply.edit(`:tada: <@&${etkinlikKatılımcısı}> rolü üzerinizden **alındı!**`);
        } else {
            await button.clicker.member.roles.add(etkinlikKatılımcısı);
            await button.reply.think(true);
            await button.reply.edit(`:tada: <@&${etkinlikKatılımcısı}> rolü üzerinize **verildi!**`);
        }
    };
    if (button.id === "bir") {
      const kayıtsayı2 = registerSettings.get(`kayıt.${button.clicker.id}.sayı`)
      if(!kayıtsayı2) return await button.reply.think(true) && await button.reply.edit(`Sunucumuzda daha önceden kayıt işlemleriniz gerçekleşmemiş!`)
      const kayıtSayı = registerSettings.get(`${button.clicker.id}.kayıt`)
      if(!kayıtSayı) return await button.reply.think(true) && await button.reply.edit(`Sunucumuzda daha önceden kayıt işlemleriniz gerçekleşmemiş!`)
        const isimDatabase = registerSettings.get(`veri_${button.clicker.id}`)
        if(!isimDatabase) return await button.reply.think(true) && await button.reply.edit(`Sunucumuzda daha önceden kayıt işlemleriniz gerçekleşmemiş!`)

        let registerTag = registerSettings.get(`kayıtTag`)
        let isimler = isimDatabase.filter(x => x.userID === button.clicker.id).map(map => `\`${registerTag} ${map.isim} | ${map.yas}\` <@&${map.rol}> (\`${map.reason}\`) `).join("\n")
        await button.reply.think(true);
        await button.reply.edit(`Sunucumuzda daha önceden **${kayıtSayı}** kere kaydolmuşsunuz! Kaydolduğunuz isimler aşağıda verilmiştir.\n\n ${isimler}`);
    };

    if (button.id === "iki") {

      let sicilDatabase = await warnSettings.fetch(`${button.clicker.id}_sicil`)

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

await button.reply.think(true)
await button.reply.edit(`:no_entry_sign: Tüm ceza verilerin aşağıda verilmiştir. \n\`\`\`${veriler}\`\`\``).catch(err => {
  let dosyahazırla 
  dosyahazırla = new MessageAttachment(Buffer.from(veriler), `${button.clicker.id}-sicil.txt`);
   button.reply.think(true)
   button.reply.edit(`:no_entry_sign: Ceza bilgilerini metin dosyası halinda gönderiyorum.`, dosyahazırla); 
}) } else {
  await button.reply.think(true)
  await button.reply.edit(`:no_entry_sign: Sicilin veritabanımda temiz olarak görünmektedir!`)
}
    };

    if (button.id === "uc") {
        await button.reply.think(true);
        await button.reply.edit(`Şu anda üstünde bulunan roller;\n${button.clicker.member.roles.cache.filter(ustundekiRoller => ustundekiRoller.name !== "@everyone").map(x => x).join("\n")}`)
    };
    if (button.id === "dort") {
        await button.reply.think(true);
        await button.reply.edit(`**${moment(button.clicker.member.joinedAt).format("LLL")}** tarihinde sunucuya giriş yapmışsınız!`);
    };
})

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Cezalar/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Cezalar/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Cezalar/${command}`)]
          let cmd = require(`./src/Komutlar/Cezalar/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Cezalar/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Cezalar/${command}`)]
          let cmd = require(`./src/Komutlar/Cezalar/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Genel/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Genel/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Genel/${command}`)]
          let cmd = require(`./src/Komutlar/Genel/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Genel/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Genel/${command}`)]
          let cmd = require(`./src/Komutlar/Genel/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Kurulum/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Kurulum/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Kurulum/${command}`)]
          let cmd = require(`./src/Komutlar/Kurulum/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Kurulum/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Kurulum/${command}`)]
          let cmd = require(`./src/Komutlar/Kurulum/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Owner/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Owner/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Owner/${command}`)]
          let cmd = require(`./src/Komutlar/Owner/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Owner/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Owner/${command}`)]
          let cmd = require(`./src/Komutlar/Owner/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Register/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Register/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Register/${command}`)]
          let cmd = require(`./src/Komutlar/Register/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Register/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Register/${command}`)]
          let cmd = require(`./src/Komutlar/Register/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir("./Bots/Moderation/src/Komutlar/Moderasyon/", (err, files) => {if (err) console.error(err)
 files.forEach(f => { let props = require(`./src/Komutlar/Moderasyon/${f}`)
      client.commands.set(props.help.name, props)
      props.conf.aliases.forEach(alias => { client.aliases.set(alias, props.help.name)})})})

client.reload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Moderasyon/${command}`)]
          let cmd = require(`./src/Komutlar/Moderasyon/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => { client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) {reject(e)}})}

client.load = command => { return new Promise((resolve, reject) => { try { let cmd = require(`./src/Komutlar/Moderasyon/${command}`)
          client.commands.set(command, cmd)
          cmd.conf.aliases.forEach(alias => {client.aliases.set(alias, cmd.help.name)}); resolve()} catch (e) { reject(e) }})}

client.unload = command => {return new Promise((resolve, reject) => { try { delete require.cache[require.resolve(`./src/Komutlar/Moderasyon/${command}`)]
          let cmd = require(`./src/Komutlar/Moderasyon/${command}`)
          client.commands.delete(command)
          client.aliases.forEach((cmd, alias) => { if (cmd === command) client.aliases.delete(alias)})
          resolve()} catch (e) { reject(e) }})}

client.elevation = message => { if (!message.guild) { return }
    let permlvl = 0
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3
    if (message.author.id === "853164355578888202") permlvl = 4
    return permlvl }

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g
client.on('warn', e => {console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')))})
client.on('error', e => {console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')))}) 

client.on("userUpdate", async (oldUser, newUser) => {
    let tagcık = serverSettings.get(`tag`)
    let serverID = serverSettings.get(`sunucuID`)
    let taglıRole = roleSettings.get(`taglıRol`)
    let embed = new MessageEmbed().setFooter(readySetter.botdurum).setTimestamp().setColor('GREEN')
    let embed2 = new MessageEmbed().setFooter(readySetter.botdurum).setTimestamp().setColor('RED')
    if(oldUser.username.includes(tagcık) || newUser.username.includes(tagcık)) return
    if(oldUser.username.includes(tagcık) && newUser.username.includes(tagcık)) return
    if (oldUser.username !== newUser.username) {

      if(newUser.username.includes(tagcık)) {
        client.channels.cache.find(x => x.name == "tag_log").send(`${newUser} tagımızı aldı!`)
        await client.guilds.cache.get(serverID).members.cache.get(newUser.id).roles.add(taglıRole)
      }

      if(!newUser.username.includes(tagcık)) {
        client.channels.cache.find(x => x.name == "tag_log").send(`${newUser} tagımızı aldı!`)
        await client.guilds.cache.get(serverID).members.cache.get(newUser.id).roles.remove(taglıRole)
      }
    }
})

client.on("message", msg => {
  let ads = [
      "https",
      ".gg/",
      "discord.gg/",
      "discord.gg",
      "dc.gg",
      "dc.gg/",
      "discord .gg",
      "discord. gg/",
      "discord. gg",
      ".com",
      ".net",
      ".org",
      ".edu",
      "www.",
      "http",
      "http://",
      "https://",
      ".org",
      ".biz",
      ".party"
  ]

  if(msg.member.hasPermission(8)) return
  if(ads.some(word => msg.content.includes(word))) {
      msg.delete()
      msg.channel.send(`${msg.author} lütfen reklam yapma!`).then(x => x.delete({
        timeout: 9999
      }))
  }
})