module.exports = {
name:"resume",
aliases:["devam","başlat"],  
code:`
$author[Şarkı devam ettirildi!;$authorAvatar]
$description[**Devam eden şarkı:** [$songInfo[title]]($songInfo[url])]
$color[BLACK]
$resumeSong
$suppressErrors[Şarkı çalınmıyor!]
$onlyIf[$voiceID!=;Bir ses kanalına girmelisin!]
`
} 
