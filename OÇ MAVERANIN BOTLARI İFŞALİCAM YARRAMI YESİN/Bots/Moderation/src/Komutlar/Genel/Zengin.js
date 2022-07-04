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


    if (!message.member.roles.cache.get(booster)) return message.inlineReply(`Booster gözükmediğin için ismini değiştiremezsin! Sunucumuza boost basarak bu komutu kullanabilirsin.`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

    let boosternick = args.slice(0).join(' ')
    if(!boosternick) return message.inlineReply(`Lütfen bir isim gir!`).then(x => x.delete({ timeout: 5000 }) && message.delete({ timeout: 5000 }));

message.member.setNickname(`${boosternick}`)
message.react(yes)
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['booster', 'zengin', "boosterisim", "boosteri", "bisim"], permLevel: 0}
exports.help = {name: 'Zengin'}