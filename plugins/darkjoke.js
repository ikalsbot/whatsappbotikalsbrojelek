let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/randomimg/darkjokes'), 'AWOGAWOGAWOG', wm, 'NEXT', '.darkjokes', m)
}

handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^darkjoke(s|r)$/i
handler.limit = 1

module.exports = handler