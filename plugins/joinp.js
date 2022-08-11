let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, groupMetadata }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'mau invit bot?\nketik yang benar contoh: \n\n#join https://chat.whatsapp.com/HTM7iGKgl7h4ZJx3lDE9um'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil join grup ${res} selama permanent ${expired ? ` selama ${expired} hari` : ''}`)
    // conn.reply(`Bot telah di undang di group: ${groupMetadata.subject}\nCode ID: ${res}`, `6283892408195@s.whatsapp.net`)
    setTimeout(() => {
        conn.reply(res, `HAII SAYA ADALAH IkalsBot, Saya diundang oleh @${m.sender.split`@`[0]} \nSaya Di undang ke sini dengan masa permanent\nKetik *#Menu* Jntuk melihat semua command\n\nJangan Lupa juga untuk bergabung\nGroup WhatsApp\nhttps://chat.whatsapp.com/HTM7iGKgl7h4ZJx3lDE9um`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }, 1500)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 24 * 60 * 60 * 1000
}
handler.help = ['joinp <chat.whatsapp.com>']
handler.tags = ['main']

handler.command = /^joinp$/i
handler.premium = true
handler.private = false
module.exports = handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}