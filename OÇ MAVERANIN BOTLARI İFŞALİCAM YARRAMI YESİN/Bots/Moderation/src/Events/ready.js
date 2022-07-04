const Discord = require('discord.js');
module.exports = client => {
  client.user.setStatus("idle");
  client.user.setActivity("Mavera", { type: "PLAYING"})}