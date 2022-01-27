module.exports = {
name:"loop",
aliases:["tekrarla","sar"],
code:`
$author[Şarkı tekrarlama $replaceText[$replaceText[$get[loop];true;başlatıldı!;-1];false;durduruldu!;-1];$authorAvatar]
$description[**Tekrarlanan şarkı:** [$songInfo[title]]($songInfo[url])]
$color[BLACK]
$replaceText[$replaceText[$get[loop];true; ;-1];false; ;-1]
$let[loop;$loopSong]
$suppressErrors[Şarkı çalınmıyor!]
$onlyIf[$voiceID!=;Bir ses kanalına gir!]
`
} 
