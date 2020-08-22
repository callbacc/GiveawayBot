module.exports.run = async (bot, message, args) => {
    let cmd = bot.commands.map(x => `**${x.config.usage}** **-** ${x.config.description}`)

    message.channel.send(`<a:Blob:740349851266580531> **GiveawayBot Commands** <a:Blob:740349851266580531>\n\n${cmd.join("\n")}`)
}

module.exports.config = {
    name: "help",
    description: "Sends the list of commands.",
    usage: "p!help",
    accessableby: "Everyone",
    aliases: []
}
