let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), 'NIH PRODUK THAILAN', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = 3
handler.premium = true
handler. private = true
module.exports = handler