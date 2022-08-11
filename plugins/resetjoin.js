let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let join = !args || !args[0] ? 1 : isNumber(args[0]) ? parseInt(args[0]) : 1
	join = Math.max(1, join)
	list.map(([user, data], i) => (Number(data.joinlimit = join)))
	conn.reply(m.chat, `*berhasil direset ${join} / user*`, m)
}
handler.help = ['join'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetjoin)$/i

handler.owner = true

module.exports = handler

function isNumber(x = 0) {
	x = parseInt(x)
	return !isNaN(x) && typeof x == 'number'
}
