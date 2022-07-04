const Discord = require("discord.js")
const db = require("quick.db")
const serverSettings = new db.table("server") // level: #1
const roleSettings = new db.table("role") // level: #2
const staffSettings = new db.table("staff") // level: #3
const registerSettings = new db.table("register") // level: #4
const cezalıSettings = new db.table("cezalı")
const warnSettings = new db.table("cezalar")
const statSettings = new db.table("stats")
buttons = global.buttons

exports.run = async(client, message, args) => {

    let nitro = message.guild.emojis.cache.find(x => x.name === "mavera_nitro")
    let exxen = message.guild.emojis.cache.find(x => x.name === "mavera_exxen")
    let spotify = message.guild.emojis.cache.find(x => x.name === "mavera_spotify")
    let netflix = message.guild.emojis.cache.find(x => x.name === "mavera_netflix")
    let etkinlikKatılımcı = roleSettings.get(`etkinlik`)
    let çekilişKatılımcı = roleSettings.get(`çekiliş`)

    const arguman = args[0]
    if (!arguman) return message.inlineReply(`Lütfen \`etkinlik\` veya \`info\` bölümünü seçiniz.`)

    if (arguman === "etkinlik") {
        const çekiliş = new buttons.MessageButton()
            .setStyle("red")
            .setLabel("🎉 Çekiliş Katılımcısı")
            .setID("çekiliş");
        const etkinlik = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("🎁 Etkinlik Katılımcısı")
            .setID("etkinlik");

        message.delete()
        message.channel.send(`Merhabalar! Sunucumuzda olan bazı etkinliklerden haberdar olmak için bu kanaldan istediğiniz rol veya rolleri alabilirsiniz!

        <@&${çekilişKatılımcı}>: **Sunucumuzdaki ${nitro}, ${netflix}, ${spotify}, ${exxen} gibi çekilişlerden haberdar olmak için almanız gereken bir rol!**

        <@&${etkinlikKatılımcı}>: **Sunucumuzdaki konser ve oyun etkinlikleri gibi etkinliklerden haberdar olmak için almanız gereken bir rol!**
        
        \`\`\`Kayıtlı kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Unutmayın ki etkinliklerde @everyone veya @here atılmayacağından rolleri almayı unutmayın!\`\`\`
        `,
            {
                buttons: [çekiliş, etkinlik]
            });
    }

    if (arguman === "info") {
        const one = new buttons.MessageButton()
            .setStyle("blurple")
            .setLabel("1")
            .setID("bir")

        const two = new buttons.MessageButton()
            .setStyle("blurple")
            .setLabel("2")
            .setID("iki")

        const three = new buttons.MessageButton()
            .setStyle("blurple")
            .setLabel("3")
            .setID("uc")

        const four = new buttons.MessageButton()
            .setStyle("blurple")
            .setLabel("4")
            .setID("dort")

        const five = new buttons.MessageButton()
            .setStyle("blurple")
            .setLabel("5")
            .setID("bes")
        
        message.delete()
        message.channel.send(`Merhabalar! Kullanıcı paneli sistemine hoşgeldin! Sunucuda yaptığın işlemler buraya yansımıştır. Öğrenmek için verilen butonlara basınız.

    \`1:\` Tüm kayıt bilgilerinizi öğrenin.
    \`2:\` Sicil geçmişinize bakın.
    \`3:\` Üstünüzde bulunan rolleri öğrenin.
    \`4:\` Sunucuya katılma tarihinize bakın.
        `, {
             buttons: [one, two, three, four] })
    }
/*
client.on('clickButton', async button => {
    if(button.id == "bes") {
        let sestekiKullanıcıSayısı = message.guild.members.cache.filter(s => s.voice.channel).size;
        await button.reply.send(`\`•\` Sesli sohbetlerde **${sestekiKullanıcıSayısı}** kullanıcı bulunuyor.`, true)
      }
  })
*/
}

exports.conf = {enabled: true, guildOnly: true, aliases: ["buton"], permLevel: 4 }
exports.help = {name: 'Buton'}