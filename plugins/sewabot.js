const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix: _p }) => {
const anjg = `⳹⍣
𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐒𝐞𝐰𝐚 𝐁𝐎𝐓⍣
⳼
  
╔═══════════════╗
║ 〘༺ List Premium༻〙
╠❥1 Bulan = 10.000
╠❥2 Bulan = 15.000
╠❥Permanen = 30.000
╚═══════════════╝
Jika Berminat Chatt Owner Dibawah
Dan gunakan QR Qris Di atas untuk , Transaksi 
*JANGAN LUPA UNTUK SCREENSHOT*
☞𝑜𝑤𝑛𝑒𝑟 ❀wa.me/6283892408195✵

*Owner IkalsS*
`
const upt = SEWA BOT`
let url = `https://telegra.ph/file/16f316d419a320956fb76.jpg`
let res = await fetch(url)
let buffer = await res.buffer()
let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anjg.trim(),
                            hydratedFooterText:upt,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Web IkalsBot',
                                    url: 'bit.ly/ikalsbot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: '/owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: '/menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^sewa$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}