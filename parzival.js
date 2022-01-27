const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]"
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code,
        aliases: command.aliases
    })
}

////////// STATUS \\\\\\\\\\
bot.status({
  text:"ParzivaL Müzik Botu",
  type:"PLAYING",
  status:"dnd",
  time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:"."
})

////////// COMMANDS \\\\\\\\\\
bot.musicStartCommand({
  channel:"$channelID",
  code:`
  $author[Şarkı çalınıyor!;$serverIcon]
  $description[[$songInfo[title]]($songInfo[url]) çalınmaya başlandı!]
  $color[BLACK]
  `
  })

bot.musicEndCommand({
  channel:"$channelID",
  code:`
  $author[Liste bitti!;$serverIcon]
  $description[Listedeki tüm şarkılar bitti ve ses kanalından çıktım!]
  $color[BLACK]
  `
  })

