const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'kız',
    aliases: ['kız', 'k', 'girl', 'bayan'],
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setThumbnail(message.author.avatarURL)
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#640032').setTimestamp().setThumbnail(message.author.avatarURL)

        if (!client.config.mods.some(id => message.member.roles.cache.has(id))) {
            return message.channel.send(embed.setDescription("Komutu kullanan kullanıcıda yetki bulunmamakta!"))
        }

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı bulunamadı veya etiketlenmedi!"))

       let name = args[1]
       if (!name) return message.channel.send(embed.setDescription("Kullanıcı için bi isim yazılmak zorunda!"))

       // let age = args[2]
       // if (!age) return message.channel.send(embed.setDescription("Kullanıcı için bir yaş yazılmak zorunda!"))

        if (![""].some(ss => member.user.username.toLowerCase().includes(ss)) && member.user.discriminator !== "" && !message.guild.members.cache.get(member.id).roles.cache.has('' && '')) {
            return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription("Kullanıcının kayıt olabilmesi için boost basmalı veya tag almalı!").setTimestamp().setThumbnail(message.author.avatarURL)
        )}
       message.guild.members.cache.get(member.id).setNickname(`${name}`)
       db.push(`isimler_${member.id}`, ` \`${name}\` (<@&814413785733005322>)`);
       db.set(`kayıt_${member.id}`, true)
      db.add(`kız_${message.author.id}`, 1)
      await message.guild.members.cache.get(member.id).roles.remove(client.config.unregisteres)
      await message.guild.members.cache.get(member.id).roles.add(client.config.girlRoles)
      await message.guild.members.cache.get(member.id).roles.add(client.config.girlRoles2)
      //  await message.guild.members.cache.get(member.id).roles.add(client.config.girlRoles3)
     //   message.channel.send(embed2.setDescription(`${member} üyesine <@&814413785733005322> <@&814413785674678281> Rolü Verildi \n\n Üyenin Eski İsimlerini \`.İsimler @Üye\` Yazarak Görebilirsin`)
        message.react(`<a:tik:814846880084656158>`)
     //   )
    }
}
