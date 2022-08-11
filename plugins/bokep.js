let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Selamat menikmati\nSubscribe :https://youtube.com/channel/UCMaGxVuxB7TqfFmwLFjV2Tw', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 10
module.exports = handler
handler.private = true
