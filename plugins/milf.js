let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/randomimg/milf'), '🤤🔥', wm, 'NEXT', '.milf', m)
}

handler.help = ['milf']
handler.tags = ['asupan']
handler.command = /^milf$/i
handler.limit = 1
handler.premium = true
module.exports = handler
handler.private = true