let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/Tersakiti404-cyber/FajarBOTV7.7

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @arpunchs
➥ YouTube:
youtube.com/DrawlNag

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ DANA: +62 813-3378-2061
╠➥ Tsel: +62 813-3378-2061
╠➥ OVO: +62 813-3378-2061
║>Request? Wa.me/62813-3378-2061
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

