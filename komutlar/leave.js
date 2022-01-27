module.exports {
name:"leave",
aliases:["ayrıl","çık"],
code:`
$author[Ses kanalından çıktım!;$authorAvatar]
$description[Ses kanalından çıktım! Tekrar müzik dinlemek için \`$getServerVar[prefix]play\`]
$color[BLACK]
$leaveVC
$suppressErrors[Ses kanalında değilim!]
$onlyIf[$voiceID!=;Bir ses kanalına gir!]
`
} 
