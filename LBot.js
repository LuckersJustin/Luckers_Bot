const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTE4MTgyNTQ2MDMxNTA5NTI1.XRuxKQ.9Wfe2Y0ETMkZfUM_ry1EbpG9NVw';

const PREFIX = '+';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token); 
client.login(process.env.BOT_TOKEN);
