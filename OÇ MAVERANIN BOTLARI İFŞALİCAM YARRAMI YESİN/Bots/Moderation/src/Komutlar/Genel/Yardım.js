const { MessageEmbed } = require("discord.js")
const footerSet = require("../../../../../Settings/Guard/Settings.json")
buttons = global.buttons

exports.run = async(client, message, args) => {
    const embed = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor("RED")

    const genelKomutlar = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Genel")
    .setID("genel")

    const punishments = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Cezalar")
    .setID("cezalar")

    const moderation = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Moderasyon")
    .setID("moderasyon")

    const register = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Register")
    .setID("register")

    const owner = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Owner")
    .setID("owner")
    
  /**  const kurulum = new buttons.MessageButton()
    .setStyle("blurple")
    .setLabel("Kurulum")
    .setID("kurulum") */


    message.channel.send(`${message.author}, yardım menümde komut türleri ile o türdeki komutlara erişebilirsin!`, { buttons: [genelKomutlar, punishments, moderation, register, owner] })
 }

exports.conf = { enabled: true, guildOnly: true, aliases: ["yardım", "help", "h", "y"], permLevel: 0 }
exports.help = { name: "Yardım" }