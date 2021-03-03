const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'erkek',
    aliases: ['erkek', 'e', 'man', 'boy'],
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setThumbnail(message.author.avatarURL)
        let embed1 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setThumbnail(message.author.avatarURL)
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#640032').setTimestamp().setThumbnail(message.author.avatarURL)
        let embed3 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setThumbnail(message.author.avatarURL)

        if (!client.config.mods.some(id => message.member.roles.cache.has(id))) {
            return message.channel.send(embed.setDescription("Komutu kullanan kullanıcıda yetki bulunmamakta!"))
        }
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı bulunamadı veya etiketlenmedi!"))
      
        let name = args[1]
        if (!name) return message.channel.send(embed.setDescription("Kullanıcı İçin Bi isim Yazılmak Zorunda!"))

        //let age = args[2]
       // if (!age) return message.channel.send(embed.setDescription("Kullanıcı İçin Bir Yaş Yazılmak Zorunda!"))

        if (![""].some(ss => member.user.username.toLowerCase().includes(ss)) && member.user.discriminator !== "" && !message.guild.members.cache.get(member.id).roles.cache.has('' && '')) {
            return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription("Kullanıcının kayıt olabilmesi için boost basmalı veya tag almalı!").setTimestamp().setThumbnail(message.author.avatarURL)
        )}
      
      
     message.guild.members.cache.get(member.id).setNickname(`${name}`)
      db.push(`isimler_${member.id}`, ` \`${name}\` (<@&812806435041837076>)`);
      db.set(`kayıt_${member.id}`, true)
      db.add(`erkek_${message.author.id}`, 1)
      await message.guild.members.cache.get(member.id).roles.remove(client.config.unregisteres)
      await message.guild.members.cache.get(member.id).roles.add(client.config.maleRoles)
      await message.guild.members.cache.get(member.id).roles.add(client.config.maleRoles2)
      //await message.guild.members.cache.get(member.id).roles.add(client.config.maleRoles3)
      message.react(`<a:tik:814846880084656158>`)
  //message.channel.send(new Discord.MessageEmbed().setDescription(`${member} üyesine <@&814413785674678280> <@&814413785674678279> Rolü Verildi. \n\nÜyenin Eski İsimlerini \`.İsimler @Üye\` Yazarak Görebilirsin.`))
                            
    }
}
