let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("loid", "loid anime", "loid six pack", "loid spy", "loid ganteng").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['loid']
handler.tags = ['internet']
handler.command = /^(loid)$/i
handler.limit = true

module.exports = handler