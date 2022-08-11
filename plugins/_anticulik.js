let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `
Ketik #join (link) untuk mencoba trial 1 Hari

Beli premium dengan harga
10k / bulan
15k / 2 bulan
30k / Permanent
*Dengan fitur premium kamu bisa invit bot kemana saja*
Dan juga Mendapatkan Bonus 
- Money 1000.000.000
- Limit 5000
- membuka Premium FITUR

Payment Via :Dana,Gopay,Diamond Lock,Qris

https://chat.whatsapp.com/IvludCV7IGE3PnS1dqMjl7

Buka link ini untuk membelo premium
Website:https://bit.ly/Ikalsbot

Atay balas chat ini
#join (link group)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
