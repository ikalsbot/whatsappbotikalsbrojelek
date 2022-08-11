let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), 'Nih', wm, 'NEXT', '.cecanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3
hndler.premium = true
handler private = true
module.exports = handler