module.exports = {
name:"pause",
aliases:["durdur","stop"], 
code:`
$author[Şarkı durduruldu!;$authorAvatar]
$description[**Durdurulan şarkı:** [$songInfo[title]]($songInfo[url])]
$color[BLACK]
$pauseSong
$suppressErrors[Şarkı çalınmıyor!]
$onlyIf[$voiceID!=;Bir ses kanalına girmelisin!]
`
}
