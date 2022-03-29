//
//
//
const TOKEN = 'bot token';
const CHANNELID = 'channel ID';
//
// 
// npm i discord.js child_process line-reader randomcolor readline
//
//
//
const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});
var fs = require('fs');
const exec = require('child_process').exec;
const lineReader = require('line-reader');
var randomColor = require('randomcolor');
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    start();
    function start()
    {
    const isRunning = (query, cb) => 
    {
        let platform = process.platform;
        let cmd = '';
        switch (platform) {
            case 'win32' : cmd = `tasklist`; break;
            case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
            case 'linux' : cmd = `ps -A`; break;
            default: break;
        }
        exec(cmd, (err, stdout, stderr) => {
            cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
        });
    }
    client.on('ready', () => {
        const Guilds = client.guilds.cache.map(guild => guild.id);
        client.user.setActivity('github.com/leomjson', 
        {
            type: "STREAMING",
            url: "https://www.twitch.tv/leomjson"
        });

//
//  
const channel = client.channels.cache.get(CHANNELID);
//
//

        const embedsd = new MessageEmbed()
        .setTitle('Checking Status...');
        channel.send({ embeds: [embedsd] }).then((msg)=> {
    
      setInterval(function() {
        var color = randomColor();
    isRunning('Growtopia.exe', (status) => {
        if (status == true) {
            if (!fs.existsSync('online_count.txt'))
            {
            const f1 = fs.readdirSync('save/players/').length
            const f2 = fs.readdirSync('save/worlds/').length
        const statuszz = new MessageEmbed()
        .setColor(color)
        .addFields
        (
        { name: 'Server Status:     ⠀', value: '**UP**', inline: false },
        { name: 'Online Count: ', value: '**Problem Loading**',  inline: false },
        { name: 'Player Files:     ⠀', value: '**' + f1 + '**', inline: false },
        { name: 'World Files:     ⠀', value: '**' + f2 + '**', inline: false },
        )
        .setTimestamp();
            msg.edit({embeds: [statuszz]});
            }
            else {
               lineReader.eachLine('online_count.txt', function(line) {
                const f1 = fs.readdirSync('players/').length
                const f2 = fs.readdirSync('worlds/').length
               const statuszz = new MessageEmbed()
               .setColor(color)
               .addFields
               (
                { name: 'Server Status:     ⠀', value: '**UP**', inline: false },
                { name: 'Online Count: ', value: '**' + line + '**',  inline: false },
                { name: 'Player Files:     ⠀', value: '**' + f1 + '**', inline: false },
                { name: 'World Files:     ⠀', value: '**' + f2 + '**', inline: false },
                )
                .setTimestamp();
                    msg.edit({embeds: [statuszz]});
    });
            }
        }
        else {
            const f1 = fs.readdirSync('players/').length
            const f2 = fs.readdirSync('worlds/').length
        const statusz = new MessageEmbed()
        .setColor(color)
        .addFields
        (
        { name: 'Server Status:     ⠀', value: '**DOWN**', inline: false },
        { name: 'Online Count: ', value: '**0**',  inline: false },
        { name: 'Player Files:     ⠀', value: '**' + f1 + '**', inline: false },
        { name: 'World Files:     ⠀', value: '**' + f2 + '**', inline: false },
        )
        .setTimestamp();
            msg.edit({embeds: [statusz]});
        }
    })
      }, 6000)
    });
    })
    client.login(TOKEN)
    }
