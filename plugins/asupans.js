let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/random', 'asupan.mp4', 'Nih Asupan \nSubscribe https://youtube.com/channel/UCMaGxVuxB7TqfFmwLFjV2Tw', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
handler.private = true
handler.premium = true
