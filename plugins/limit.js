let fs = require('fs')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let thumbnail = fs.readFileSync('./media/bank.jpg')
    let user = global.db.data.users[who]
    let anu = `
🏦 Bank *${user.name}*
⭐ Role : *${user.role}*\n\n
*${user.exp}* Exp ✨
*${user.limit}* Limit 📊
*${user.money}* Money 💵
*${user.joinlimit}* Free Join 🤖`
    conn.sendButtonImg(m.chat, ('./media/bank.jpg'), anu, wm, 'hadiah', '.hadiah', m)
}
handler.help = ['bank', 'dompet', 'money', 'dompet @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|dompet|moeny|bank|limit|jlimit)$/i

module.exports = handler