let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'NIH', wm, 'NEXT', '.cecansantuy', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3
handler.premium = true
handler.private = true
module.exports = handler