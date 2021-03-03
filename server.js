
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();

fs.readdirSync('./commands', { encoding: 'utf8' }).filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./commands/${files}`);
    if (!command.name) return console.log(`Hatalı Kod Dosyası => [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
})


////----------------------- READY KISMI -----------------------\\\\
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'Wess İle Baş Et?' }, status: 'online' })
    client.channels.cache.get('814869045597831208').join() // ses kanalı İD
    console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
  })
////----------------------- CONFİG KISMI -----------------------\\\\
client.config = {
    vipRoles: ['814413785733005323'], //vip
    unregisteres: ['814413785674678277'], // kayıtsız  
    maleRoles: ['814413785674678280'], // erkek
    maleRoles2: ['814413785674678279'], // erkek
    maleRoles3: [''], // erkek rolü eklemediğin zaman msj atmıyor
    girlRoles: ['814413785733005322'], // bayan
    girlRoles2: ['814413785674678281'], // bayan
    girlRoles3: [''], // bayan
    mods: ["814413785733005326"], // yetkili
    chat: ["814413786215219242"],
    channelID: '814413786215219242', // kayıt kanalı
    yönetim: ['814413785775210509']// üst yönetim
}
////----------------------- PREFİX KISMI -----------------------\\\\
client.on('message', message => {
    const prefix = ".";// prefix
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    cmd.run(client, message, args)
})


////----------------------- HOŞGELDİN MESAJI KISMI -----------------------\\\\
client.on('guildMemberAdd', member => {
  var gun = 5;
  if (Date.now() - member.user.createdAt < 1000*60*60*24*gun) {
    member.ban();
  };
});
   


    client.on('guildMemberAdd', (member) => {
    const mapping = {
        " ": "",
        "0": "<a:sfr:814918519900209162>", // sayı iDleri
        "1": "<a:birr:814918466301198396>",
        "2": "<a:iki:814918518595387432>",
        "3": "<a:uc:814918517077180456>",
        "4": "<a:dort:814918511319187537>",
        "5": "<a:bes:814918518402449461>",
        "6": "<a:__:814918512137076836>",
        "7": "<a:yed:814918497708146699>",
        "8": "<a:sekz:814918518633529405>",
        "9": "<a:dokuz:814918512018980945>",
    };
      let user = client.users.cache.get(member.id);
      require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' `Şüpheli`'
  if (kurulus > 1296000000) kontrol = ' `Güvenilir`'
      moment.locale("tr");
   var toplamüye = member.guild.memberCount
    var emotoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
    let memberDay = (Date.now() - member.user.createdTimestamp);
    let createAt = moment.duration(memberDay).format("Y [Yıl] M [Ay] W [Hafta]")
    let createAt2 = moment.duration(memberDay).format("DD [Gün], HH [saat], mm [dakika]")
    if (memberDay > 604800000) {
        client.channels.cache.get(client.config.channelID).send(`\`>\` ${member} **Sunucumuza Hoş Geldin Sunucumuz Seninle Beraber ${emotoplamüye} Kişilik Bir Aile Olduk.**

\`>\` **Hesabın \`${createAt}\` Tarihinde Oluşturulmuş & ${kontrol} Gözüküyor.**

\`>\` <@&814413785733005326> **Rolüne Sahip Yetkililer Seninle İlgilenicek.**
  `)
    } else {
        client.channels.cache.get(client.config.channelID).send(
            new Discord.MessageEmbed()
            .setAuthor(member.user.username, member.user.avatarURL({ dynamic: true }))
            .setDescription(`${member} Kullanıcı Sunucuya Katıldı Hesabı **${createAt2}** Önce Açıldığı İçin Banlandı!`)
            .setTimestamp()
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
        )
    }
})



////----------------------- TAG MESAJ KISMI -----------------------\\\\
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!tag") {
    msg.channel.send("Wess / #0056");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === ".tag") {
    msg.channel.send("Wess / #0056");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.send("Wess / #0056");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "") {
    msg.channel.send(``)
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "") {
    msg.channel.send(``)
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "") {
    msg.channel.send(``)
  }
});




client.on("guildMemberAdd", member => {
  let sunucuid = "814413785674678273";
  let tag = "Wess";
  let rol = "814413785733005324";
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
      .setTimestamp()
     client.channels.cache.get('814413787447689238').send(tagalma)
}
})


//-------------Kendini Sağirlaştirma Komutu ---------------\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\


//-------------Kendini Sağirlaştirma Komutu ---------------\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfMute
) {
newState.setSelfMute(true);
}
});


//-----------------------GİRENE-ROL-VERME----------------------\\     


//-----------------------OTO-İSİM-----------------------\\     

//client.on('guildMemberAdd', member => {
// member.setNickname('İsim | Yaş') //Kullanılacağı zaman açılır
//})
//-----------------------OTO-İSİM-----------------------\\  



//-----------------------OTO-TAG-----------------------\\     

  ///////////////////////////tagrol//////////////////
client.on("userUpdate", async (oldUser, newUser) => {
    
    if (oldUser.username !== newUser.username) {
  const tag = 'Wess'
  const tag1 = 'wess'
  const sunucu = '814413785674678273'
  const kanal = '814413787447689238'
  const rol = '814413785733005324'
  
  try {
  
  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(`${newUser} ${tag} Tagımızı Aldığı İçin **Wess Mailem** Rolünü Verdim <a:dogru:814933271527030804> `);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim! <a:dogru:814933271527030804> `)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(`${newUser} ${tag} Tagımızı Çıkardığı İçin **Wess Mailem** Rolünü Aldım Kanka <a:yanls:814933272215814174> `);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım! <a:yanls:814933272215814174> `)
  }
  if (newUser.username.includes(tag1) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(`${newUser} ${tag} Tagımızı Aldığı İçin **Wess Mailem** Rolünü Verdim <a:dogru:814933271527030804> `);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim! <a:dogru:814933271527030804> `)
        }
  if (!newUser.username.includes(tag1) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(`${newUser} ${tag} Tagımızı Çıkardığı İçin **Wess Mailem** Rolünü Aldım Kanka <a:yanls:814933272215814174> `);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım! <a:yanls:814933272215814174> `)
            }    
  } catch (e) {
  console.log(`Bir hata oluştu! ${e}`)
   }
  }
  });

client.login("");
