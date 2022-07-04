const { MessageEmbed, MessageAttachment } = require('discord.js')
const footerSet = require("../../../../../Settings/Guard/Settings.json")

exports.run = async(client, message, args) => {

    let maveraninembedcigi = new MessageEmbed().setFooter(footerSet.botdurum).setTimestamp().setColor('RANDOM')

  if (message.author.id !== "853164355578888202") return;
 let rolemap = message.guild.roles.cache
 .sort((a, b) => b.position - a.position)
 .map(r => `${r.name}: **${r.id}**`)
 .join("\n");
 if (!rolemap) rolemap = "rol yok ki kanka";
message.inlineReply(maveraninembedcigi.setDescription(`${rolemap}`,  { split: true })).catch(err => {
  let dosyahazırla 
  dosyahazırla = new MessageAttachment(Buffer.from(rolemap), `Roller.txt`);
   message.inlineReply(`:no_entry_sign: Rol bilgilerini txt dosyası halinde bıraktım!`, dosyahazırla); 
}) 
}

exports.conf = {enabled: true, guildOnly: true, aliases: ['roller', 'rol', 'role', 'roles'], permLevel: 4}
exports.help = {name: 'Admin-Role'}