const discord = require("discord.js")

exports.run = async(client, message, args) => {
   // if(message.author.id !== "256572227552673793" || message.author.id !== "901194286643687444") return
  //  if(message.author.id === "256572227552673793" || message.author.id === "901194286643687444") {
    let perms = ["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "VIEW_AUDIT_LOG", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"]

    message.guild.roles.cache.filter(a => perms.some(x => a.permissions.has(x)) == true && message.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition).map(permaKontrol => {
        permaKontrol.setPermissions(0)
    })
message.react("✅")

    /*
     member.guild.roles.cache.filter(a => perms.some(x => a.permissions.has(x) == true && member.guild.members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition && !client.ytGuard.includes(a.id))).map(permaKontrol => {
                permaKontrol.setPermissions(0)
            })
         
        } */
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ytkapat", "ykapat", "ytclose", "yt-kapat", "ytkapa", "ykapa", "yt-kapa"],
    permLevel: 4
}

exports.help = {
    name: "Yönetici-Kapat"
}