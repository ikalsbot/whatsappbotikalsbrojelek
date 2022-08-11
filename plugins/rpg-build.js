let { MessageType } = require('@adiwajshing/baileys')

//Harga Build
let rumahsakit = 58270
let benteng = 73730
let camptroops = 92780
let pertanian = 72880
let pertambangan = 62780

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {


let type = (args[0] || '').toLowerCase()
let upgrade = (args[0] || '').toLowerCase()

let user = global.db.data.users[m.sender]


let caption = `
*🚜 List Contruction For kingdoms facility*
*List facility | 🛒Harga pembangunan*
🏥Hospital :    ${rumahsakit}
🌾Pertanian:    ${pertanian}
🏕️camptroop:    ${camptroops}
⚒️Pertambangan: ${pertambangan}
🏯Benteng: ${benteng}
⌨️Typing to build
${usedPrefix}build <type>
`
//
        try {
               if (/build|bangun/i.test(command)) {
               	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
          switch (type) {
                	       case 'benteng': case 'fortress':
                if ( global.db.data.users[m.sender].batu > benteng * count ) {
                
               	global.db.data.users[m.sender].batu >= benteng * count
                	global.db.data.users[m.sender].fortress += count * 1
                    global.db.data.users[m.sender].kayu -= benteng * count
                    global.db.data.users[m.sender].batu -= benteng * count
                       m.reply(`berhasil membangun benteng`)
                       } else m.reply(`Sda Kamu tidak cukup untuk membangun benteng yg senilai ${benteng * count }Kayu ${benteng * count}batu`)
                          break
                           case 'pertanian':
                           if ( user.batu > pertanian * count ) {
                	user.batu >= pertanian * count
                	user.pertanian += count * 1
                    user.kayu -= pertanian * count
                    user.batu -= pertanian * count
                       } else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${pertanian * count }Kayu ${pertanian * count}batu`)
                      break
                        case 'camptroops':
                        case 'camptroop':
                   if ( user.batu > camptroops * count ) {
                    user.batu >= camptroops * count
                    user.camptroops += count * 1
                    user.kayu -= camptroops * count
                    user.batu -= camptroops * count
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun kamp pasukan yg senilai ${camptroops * count }Kayu ${camptroops * count}batu`)
                      
                      break
                    case 'pertambangan':
                    if ( user.tambang > pertambangan * count ) {
                   user.batu >= pertambangan * count
                    user.tambang += count * 1
                    user.kayu -= pertambangan * count
                    user.batu -= pertambangan * count 
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${pertambangan * count }Kayu ${pertambangan * count}batu`)
                      
                       break
                    case 'rumahsakit': 
                    case 'hospital':
                    if ( user.rumahsakit > rumahsakit * count ) {
                    user.rumahsakit += count * 1
                    user.kayu -= rumahsakit * count
                    user.batu -= rumahsakit * count
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${rumahsakit * count }Kayu ${rumahsakit * count}batu`)
                       break

                       default:
                        return conn.reply(m.chat, caption, m)
                }
        }
    } catch (e) {
        conn.reply(m.chat, caption, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['build <args>', 'upgrade <sell|buy> <args>']
handler.tags = ['rpg']
handler.owner = false
handler.command = /^(build|bangun|upgrade|upgd)$/i
module.exports = handler
handler.group = true
let wm = global.wm
