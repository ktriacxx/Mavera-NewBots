const  { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const afkSettings = new db.table("afk")

exports.run = async (client, message, args) => {
      
let yes = message.guild.emojis.cache.find(x => x.name === "mavera_yes")
let no = message.guild.emojis.cache.find(x => x.name === "mavera_no")

      if (message.member.displayName.startsWith("[AFK]")) return;
            let uye = message.guild.members.cache.get(message.author.id);
            let reason = args.join(' ') || "Sebep Bulunmuyor.";
            let nick = uye.displayName;
            afkSettings.set(`sebep_${message.author.id}_${message.guild.id}`, reason);
            afkSettings.set(`user_${message.author.id}_${message.guild.id}`,message.author.id);
            afkSettings.set(`afktime_${message.guild.id}`,Date.now());
            afkSettings.set(`nick_${message.author.id}_${message.guild.id}`, nick);
            let sebep = db.fetch(`sebep_${message.author.id}_${message.guild.id}`);
            message.member.setNickname(`[AFK] ` + nick);
            message.react(yes)
  }

exports.conf = {enabled: true, guildOnly: true, aliases: ['afk'], permLevel: 0}
exports.help = {name: 'AFK'}