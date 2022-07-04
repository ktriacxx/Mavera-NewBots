const Discord = require("discord.js");
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
let jailled = cezalıSettings.get(`jailled`)
let muted = cezalıSettings.get(`muted`)
let vmuted = cezalıSettings.get(`vmuted`)

    if (!message.member.roles.cache.get(ytalım) && !message.member.roles.cache.get(owner) && !message.member.hasPermission(8)) return message.react(no)
/*
let sesteOlmayanlar = message.guild.members.cache.filter(x => !x.user.bot && x.presence.status != "offline" && !x.voice.channelID && x.roles.cache.some(e => registery.includes(e.id)));
  let voicestaff = "Sesli kanallarda bulunmayan yetkililer:\n";
  message.guild.roles.cache.get(registery).members.map(r => {
    voicestaff += !r.voice.channel ? "<@" + r.user.id + ">, " : "";
  });

message.channel.send(`${sesteOlmayanlar.size > 0 ? sesteOlmayanlar.map(x => x.displayName)}`) */
//  message.channel.send("" + voicestaff + "").then(s => s.s);

let yetkililer = registery
  let sestekiler = message.guild.members.cache.filter(x => !x.user.bot && x.presence.status != "offline" && x.voice.channelID && x.roles.cache.some(e => yetkililer.includes(e.id)));
  let sesteOlmayanlar = message.guild.members.cache.filter(x => !x.user.bot && x.presence.status != "offline" && !x.voice.channelID && x.roles.cache.some(e => yetkililer.includes(e.id)));
  let offlineOlanlar = message.guild.members.cache.filter(x =>!x.user.bot && x.presence.status == "offline" && !x.voice.channelID && x.roles.cache.some(e => yetkililer.includes(e.id)));
  let manipuleciOclar = message.guild.members.cache.filter(x => !x.user.bot && x.presence.status == "offline" && x.voice.channelID && x.roles.cache.some(e => yetkililer.includes(e.id)))


message.channel.send(`${sesteOlmayanlar.size > 0 ? sesteOlmayanlar.map(x => x.displayName + ": " + "<@" + x.id + ">").join("\n") : "0"}`)
};

exports.conf = { enabled: true, guildOnly: true, aliases: ['yetkilisay', 'yetkili-say', 'ysay', 'y-say'] }
exports.help = { name: 'Yetkili-Say' }