module.exports = {
name:"skip",
aliases:["s","geç"],  
code:`
$skipSong
$author[Şarkı geçildi!;$authorAvatar]
$description[**Geçilen şarkı:** [$songInfo[title]]($songInfo[url])]
$color[BLACK]
$onlyIf[$voiceID!=;Bir ses kanalına girmelisin!]
`
} 
