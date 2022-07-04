const Discord = require('discord.js');
var prefix = "."
module.exports = client => {
  client.user.setStatus("idle");
  client.user.setActivity("Mavera", { type: "PLAYING"})}
