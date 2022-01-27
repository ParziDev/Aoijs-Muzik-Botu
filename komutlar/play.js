module.exports = {
name:"play",
aliases:["p","çal","oynat"],  
code:`
$author[Şarkı listeye eklendi!;$authorAvatar]
$description[**Şuan çalınan şarkı:** [$songInfo[title]]($songInfo[url])]
$color[BLACK]
$playSong[$message;Şarkı bulunamadı!]
$onlyIf[$message!=;Şarkı adı gir!]
$onlyIf[$voiceID!=;Bir ses kanalına girmelisin!]
`
}
