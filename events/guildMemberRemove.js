module.exports = member => {
  let guild = member.guild;
  member.send('Keşke gitmeseydin :sob::sob::sob:');
  guild.defaultChannel.send(`${member.user.username} aramızdan ayrıldı :sob::sob::sob:.`);
};
