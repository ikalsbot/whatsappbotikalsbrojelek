let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/santuy', 'asupan.mp4', 'nih asupannya kak jangan lupa \nsubscribe channel https://youtube.com/channel/UCMaGxVuxB7TqfFmwLFjV2Tw', m)
}
handler.help = ['asupansantuy']
handler.tags = ['asupan']

handler.command = /^(asupansantuy)$/i
handler.premium = true
handler.register = true
handler.premium = true
handler.private = true
handler.limit = 5
module.exports = handler
