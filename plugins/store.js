const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix: _p }) => {
const anjg = `==========================
WELCOME TO IKALS STORE VPS
==========================
RAM | CORES | PRICE WL | PRICE RUPIAH
==========================
4 GB  | 1 Cores | 150 Wls | Rp.13.000
8 GB  | 2 Cores | 220 wls | Rp.20.000
16GB | 4 Cores | 400 wls | Rp.30.000
==========================
Vps info :
Expired : 30 Hari
Garansi : 3 Hari 
Note : panel sus No reff
==========================
https://chat.whatsapp.com/FG7QlVHTk4b9sMxA5ceSEt
==========================
Minat?, pm
https://wa.me/6283892408195
Or
https://wa.me/6285728528013
`
const upt = `Ikals Store`
let url = `https://telegra.ph/file/3cad482ebc77c3d522b32.jpg`
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
handler.help = ['store']
handler.command = /^store$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}