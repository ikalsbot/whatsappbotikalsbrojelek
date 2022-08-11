const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix: _p }) => {
const anjg = `
*-------「 DONATE 」 -------*
👆gunakan Qris Untuk pembayaran Ovo,Gopay,Dana DLL👆
Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
mungkin akan kami berikan 100 rupiah akan menjadi 1jt dan teris dilipatkan
Thanks!`
const upt = `BOT Active During ${uptime}`
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
                                    displayText: 'WEB IKALSBOT',
                                    url: '/gopay'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'GOPAY',
                                    id: '/gopay'
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
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}