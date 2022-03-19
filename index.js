/*
                                        -- Modified by GuckTubeYT#3123
                                        -- Coded by Clayne#0001
                                        --  Helped by No#7777

                                            ^^^^^^^^^^^^^^^^^^^
Leomjson made it Discord.js V13 Supportive. (give credit above)
Discord Tag | leom#0001

READ! I did not steal any credit, I forked GuckTubeYT to the repo and even said that its not my work-
do not accuse me of copyrighting, I only wanted to make this support V13 of discord.js and share my work!
*/
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

var fs = require('fs');
const exec = require('child_process').exec;
const lineReader = require('line-reader');
var randomColor = require('randomcolor');
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

if (!fs.existsSync("appconfig.json"))
{
    let tokendiscordbot;
    let channeliddiscordbot;
    let playerfoldername;
    let worldfoldername;
    let onlineplayertxt;
    rl.question("Your Token Discord Bot = ", function(token) {
        rl.question("Your Channel Discord = ", function(channel) {
            rl.question("your players folder name = ", function(player) {
                rl.question("your worlds folder name = ", function(world) {
                    rl.question("your online player file name = ", function(onlineplayer) {
                        rl.question("your exe gtps file name = ", function(exe) {
                        
                        rl.close();
                        fs.writeFileSync("appconfig.json", `{
                            "token" : "${token}",
                            "channel" : "${channel}",
                            "player" : "${player}",
                            "world" : "${world}",
                            "onlineplayer" : "${onlineplayer}",
                            "exegtps" : "${exe}"
                        }`)
                        console.log("GTPS Status Discord Bot Has been Setted Up!")
                        console.log("Starting Bot...")
                        start();
                        });
                        
        });
        });
        });
        });
        });
}
else
{
    start();
}
    function start()
    {
    const config = require("./appconfig.json")
    const isRunning = (query, cb) => {
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

        const statusz = new MessageEmbed()
        .setColor('#ff0000')
        .setAuthor({ name: 'GT Private Server' })
        .addField('*Server Status:**', '**DOWN**')
        .addField('Players Online:', 'Please wait.')
        .setTimestamp()
        .setFooter({ text: 'Last Updated' });
        client.channels.cache.get(config.channel).send({ embeds: [statusz] }).then((msg)=> {
    
      setInterval(function(){
          var color = randomColor();
    isRunning(`${config.exegtps}`, (status) => {
        if (status == true) {
            if (!fs.existsSync(config.onlineplayer))
            {
            const f1 = fs.readdirSync(config.player).length
            const f2 = fs.readdirSync(config.world).length

        const statuszz = new MessageEmbed()
        .setColor(color)
        .setAuthor({ name: `${msg.guild.name}` })
        .addField('**Server Status:**', '**UP**')
        .addField('**Players File Count: **', f1)
        .addField('**Worlds File Count: **', f2)
        .setTimestamp()
        .setFooter({ text: 'Last Updated' });
        
            msg.edit(statuszz);
            }
            else
            {
            lineReader.eachLine(config.onlineplayer, function(line) {
            const f1 = fs.readdirSync(config.player).length
            const f2 = fs.readdirSync(config.world).length

            const statuszz = new MessageEmbed()
            .setColor(color)
            .setAuthor({ name: `${msg.guild.name}` })
            .addField('**Server Status:**', '**UP**')
            .addField('**Players Online:**', line)
            .addField('**Players File Count: **', f1)
            .addField('**Worlds File Count: **', f2)
            .setTimestamp()
            .setFooter({ text: 'Last Updated' });
            msg.edit(statuszz);
    });
}
        }
        else
        {
            const f1 = fs.readdirSync(config.player).length
            const f2 = fs.readdirSync(config.world).length
            const statusz = new MessageEmbed()
        .setColor(color)
        .setAuthor({ name: `${msg.guild.name}` })
        .addField('**Server Status:**', '**DOWN**')
        .addField('**Players online:**', '0')
            .addField('**Players File Count: **', f1)
        .addField('**Worlds File Count: **', f2)
        .setTimestamp()
        .setFooter({ text: 'Last Updated' });
         
             msg.edit(statusz);
        }
    })
      }, 8000) // ~Leom don't lower this, else it will lag.
    }); 
    })
    
    client.login(config.token)
    }
