const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

    let { user } = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

    const usuarios = new db.table('usuarios')
    let money = usuarios.get(`${message.guild.id}_${user.id}.money`)
    if (money == null || money == undefined) money = 0;

  const embed = new Discord.MessageEmbed()
    .setColor("#0bed00")
    .setAuthor("Saldo do(a): " + user.username, user.avatarURL({dynamic: true}))
    .setThumbnail(user.avatarURL({dynamic: true}))
    .setDescription("R$ "+money+" Coins")
    .setTimestamp();

  message.channel.send(embed);

}