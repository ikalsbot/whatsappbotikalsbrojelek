let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/randomimg/meme'), 'AWOGAWOGAWOG', wm, 'NEXT', '.meme', m)
}

handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^meme$/i
handler.limit = 1

module.exports = handler