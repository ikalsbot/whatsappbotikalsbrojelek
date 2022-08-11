module.exports = {
    async all(m) {
        if (!m.isGroup) return 
        let chats = global.db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        	const data = global.owner.filter(([id, isCreator]) => id && isCreator)
            await m.reply(`Waktu Expired *${this.user.name}* sudah habis , saatnya keluar dari group  👋\n\nTertarik Sewa Bot? Silahkan Gabung ke group ini\n\nhttps://chat.whatsapp.com/KkcMGh8LSRUDO5BDdxEeBZ`)
            await this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
            await this.delay(10000) 
            await this.groupLeave(m.chat)
        }
    }
}

