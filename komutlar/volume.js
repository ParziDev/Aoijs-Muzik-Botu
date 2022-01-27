module.exports = {
  name:"volume",
  aliases:"ses",
  code:`
  $volume[$message[1]]
  $author[Şarkı sesi ayarlandı!;$authorAvatar]
  $description[**Şarkı seviyesi:** $message[1]]
  $color[BLACK]
  $onlyIf[$message[1]<201;200'den büyük bir ses giremezsin!]
  $onlyIf[$message[1]>0;1'den küçük bir ses giremezsin!]
  $onlyIf[$isNumber[$message[1]]==true;Bir sayı gir!]
  $onlyIf[$message[1]!=;Bir sayı gir!]
  $suppressErrors[Şarkı çalınmıyor!]
  $onlyIf[$voiceID!=;Bir ses kanalına girmelisin!]
  `
  }
