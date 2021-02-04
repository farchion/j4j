const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " KobsCode | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let kobs = await data.get(msg.author.id)
        
        if (kobs === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("https://discord.gg/pCqvsYXfht") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", kobs => {
  sleep(1000);
  if (
    kobs.id === "589413911304863746" ||  // j4j sunucusunun idsi
    kobs.id === "589413911304863746"  // j4j sunucusunun idsi
  ) {
    
  } else {
    kobs.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("805926751510855681") // j4j sunucusunun kanal id'si


       a.send("j4j dm")


      }, 15000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("805926751510855681") // j4j sunucusunun kanal id'si


       a.send("j4j dm")


      }, 30000);
})

client.login("ODAwNzk2MDU1MjMwMjE4MjYw.YAXWCQ.Ocm3M_5YwlNuvv4Y2ZZZ9LeZxPQ") // user tokeniniz
