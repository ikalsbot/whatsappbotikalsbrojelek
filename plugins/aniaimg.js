let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("anya", "ania anime","anime ania").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['anya']
handler.tags = ['internet']
handler.command = /^(anya|ania|annia|annya)$/i
handler.limit = true

module.exports = handler