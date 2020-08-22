module.exports.run = async (bot, message, args) => {
    message.channel.send(`<a:Blob:740349851266580531> In **${bot.guilds.cache.size}** servers!`)
}

module.exports.config = {
    name: "servers",
    description: "Checks the amount of servers GiveawayBot is in.",
    usage: "p!servers",
    accessableby: "Everyone",
    aliases: []
}
