//KALIAN BOLEH UBAH NAMA,OWNER,DAN LAINNYA TAPI PLIS JANGAN UBAH AUTHORNYA, BIARKAN TETAP OCTV TECH
//SC INI GRATIS BUAT KALIAN JADI SADAR DIRINYA YAA, JANGAN SEENAKNYA, klo lu bisa bikin sendiri mah silahkan bikin sendiri.
//koe paham lah cok opo sng tak maksud, wong wes gede tuo jembuten iso ngocok barang ngono o mosok rak paham
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys");
const { color, bgcolor } = require('./lib/color');
const { help } = require('./src/help');
const { menu } = require('./src/menu')
const { listsurah } = require('./src/listsurah');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions');
const { fetchJson, fetchText } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { ayla } = require('./lib/ayla');
const { ytDonlodMp3, ytDonlodMp4, ytMp3, ytMp4, ytSearch } = require("./scrape/youtube");
const { linkwa } = require("./scrape/linkwa");
const { Gempa, Cuaca } = require("./scrape/bmkg");
const { textpro, textpro2, ephoto } = require("./scrape/textpro");
const { pinterest } = require("./scrape/pinterest");
const { artiNama, artiMimpi, ramalJodoh, nomorHoki, zodiakMing, zodiakHar } = require("./scrape/primbon");
const { tiktok } = require("./scrape/tiktok");
const { stickerSearch } = require("./scrape/semoji");
const { mediafireDl } = require ('./scrape/mediafire');
const { terjemah } = require ('./scrape/translate');
const fs = require('fs');
const crypto = require('crypto');
const moment = require('moment-timezone');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const imgbb = require('imgbb-uploader');
const Scraper = require('images-scraper');
const { ind } = require('./bahasa');
const brainly = require('brainly-scraper');
const lirik = require('lyrics-parse')
const _ayla = JSON.parse(fs.readFileSync('./src/ayla.json'));
const power = JSON.parse(fs.readFileSync('./src/power.json'));
const setting = JSON.parse(fs.readFileSync('./src/selfsetting.json'));
const bacotrandom = JSON.parse(fs.readFileSync('./database/bacot.json'));
const islami = JSON.parse(fs.readFileSync('./database/quotesislami.json'));
const kehidupan = JSON.parse(fs.readFileSync('./database/quoteskehidupan.json'));
const nasehat = JSON.parse(fs.readFileSync('./database/quotesnasehat.json'));
const motivasi = JSON.parse(fs.readFileSync('./database/quotesmotivasi.json'));
const ban = JSON.parse(fs.readFileSync('./src/ban.json'));
const cewek = JSON.parse(fs.readFileSync('./database/cewek.json'));
const cowok = JSON.parse(fs.readFileSync('./database/cowok.json'));
const husbu = JSON.parse(fs.readFileSync('./database/husbu.json'));
const anime = JSON.parse(fs.readFileSync('./database/anime.json'));
const waifu = JSON.parse(fs.readFileSync('./database/waifu.json'));
const kpop = JSON.parse(fs.readFileSync('./database/kpop.json'));
const kucing = JSON.parse(fs.readFileSync('./database/kucing.json'));
const lolii = JSON.parse(fs.readFileSync('./database/loli.json'));
const changelog = JSON.parse(fs.readFileSync('./database/changelog.json'));
const asupan = JSON.parse(fs.readFileSync('./database/asupan.json'));
prefix = setting.prefix
blocked = ["6285865775319@s.whatsapp.net","6282349516238@s.whatsapp.net","6282210159450@s.whatsapp.net","6289512703226@s.whatsapp.net","6283191156893@s.whatsapp.net","6287844366550@s.whatsapp.net","6285770293378@s.whatsapp.net","62895619678228@s.whatsapp.net","6288231028441@s.whatsapp.net","62859181244066@s.whatsapp.net","6285648032282@s.whatsapp.net","6281334335408@s.whatsapp.net","6285727390824@s.whatsapp.net","6285879689074@s.whatsapp.net","6283143576784@s.whatsapp.net","265880820312@s.whatsapp.net"]
name = setting.name
limitawal = setting.limitawal
memberlimit = setting.memberlimit

const usedCommandRecently = new Set();
const isFiltered = (from) => !!usedCommandRecently.has(from);
const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => usedCommandRecently.delete(from), 5000);
};

            
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function findUrl(message) {
	  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	    return message.match(urlRegex)
}

async function starts() {
	const client = new WAConnection()
	client.version = [3, 3234, 9]
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./self.json') && client.loadAuthInfo('./self.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./self.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
      if (!mek.hasNewMessage) return
        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			///if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const apiKey = setting.apiKey
            const zekaisApi = setting.zekais
			const lolApi = setting.lolApi
			const zeksApi = setting.zeksApi
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const wektu = moment.tz('Asia/Jakarta').format('HH');
			const jam = moment.tz('Asia/Jakarta').format('HH');
  			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			buddy = budy.toLowerCase();
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const ar = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
	

			mess = {
				wait: '⌛ Wait a minute... ⌛ ',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					nsfw: '❌NSFW tidak diaktifkan❌'	
					}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`]
			const ownerNumber2 = [`${setting.ownerNumber2}@s.whatsapp.net`]// replace this with your number
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isPower = isGroup ? power.includes(from) : false
            const isOwner = ownerNumber.includes(sender)
			const isOwner2 = ownerNumber2.includes(sender)
			const isBanned = ban.includes(sender)
	    	const isAyla = _ayla.includes(sender)
		    const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}})
			}
            const mntions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}, quoted: mek})
			}
       
        
	
	if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname2))
        return reply('Cooldown 5 detik....')}
        
     if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname2), 'in', color(groupName))
        return reply('Cooldown 5 detik....')
        }
        
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const wala = fs.readFileSync('aud/wala.m4a')
			const biasa = fs.readFileSync('aud/biasalah.m4a')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			console.log(pushname2 + ' : ' + pes)
	  
		
			switch(command) {
        /*case 'help':
        case 'menu':
        case '?':
        /*if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        client.sendMessage(from, menu(prefix, pushname2, uangku, role, sender), text)
        break
        case 'cmd':
        if (isPower) return;
        if (isBanned) return;
        if (jam >= 5 && jam <= 9) {
        ucapan1 = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 10 && jam <= 14) {
        ucapan1 = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 15 && jam <= 17) {
        ucapan1 = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 18 && jam <= 20) {
        ucapan1 = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
        } else if (jam >= 21 && jam <= 23) {
        ucapan1 = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
        } else {
        ucapan1 = 'Sudah larut malam, Jangan lupa istirahat!😴'
        } 
		botname = setting.botname
	    acara = setting.acaraa
        tanggal = setting.tanggal
        countDownDate = new Date(`${tanggal},00:00:00`).getTime();
        now = new Date().getTime();
        distance = countDownDate - now;
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if (distance < 0) {
        times = ("Terlewat");
        } else {
        times = (days + " Hari Lagi Menuju " + acara);
        }
		///if (!isRegistered) return reply(ind.noregis());
        client.sendMessage(from, help(prefix, botname, pushname2, uangku, role, sender, ucapan1, times), text);
        break*/
        case 'ocr':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        reply(mess.wait)
        await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
        .then(teks => {
            reply(teks.trim())
            fs.unlinkSync(media)
        })
        .catch(err => {
            reply(err.message)
            fs.unlinkSync(media)
        })
        } else {
        reply('Foto aja mas')
        }
        ///await limitAdd(sender) 
        break
        case 'stiker':
        case 'sticker':
        case 's':
        if (isPower) return	
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        await addFilter(from);
	    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
        .input(media)
        .on('start', function (cmd) {
        	console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        	console.log(`Error : ${err}`)
        	fs.unlinkSync(media)
        	reply(mess.error.stick)
        })
        .on('end', function () {
        	console.log('Finish')
        	client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        	fs.unlinkSync(media)
        	fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        const media = await client.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.webp')
        reply(mess.wait)
        await ffmpeg(`./${media}`)
        .inputFormat(media.split('.')[1])
        .on('start', function (cmd) {
        	console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        	console.log(`Error : ${err}`)
        	fs.unlinkSync(media)
        	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
        	reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
        })
        .on('end', function () {
        	console.log('Finish')
        	client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        	fs.unlinkSync(media)
        	fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else {
        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nJika video durasi max 10 detik.`)
        }
        ///await limitAdd(sender) 
        break
        case 'gtts':
        case 'tts':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
        reply(mess.wait)
        dtt = body.slice(8)
        ranm = getRandom('.mp3')
        dtt.length > 600
        ? reply('Textnya kebanyakan om')
        : gtts.save(ranm, dtt, function() {
        client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        fs.unlinkSync(ranm)
        })
        ///await limitAdd(sender) 
		await addFilter(from);
        break
 		case 'resetlink':
		if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
		client.revokeInvite(from);
        reply('Link group telah direset');
	    break
        case 'fitnah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [628xxxx|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah 6285785778976|hai|hai juga`)
        var gh = body.slice(8)
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${replace}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
        ///await limitAdd(sender)		
        break
        case 'shortlink':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} url`);
        reply(mess.wait);
        anu = await fetchJson(`https://api-xcoders.xyz/api/short/shorturl?url=${args[0]}&apikey=${apiKey}`);
        reply (anu.result);
        ///await limitAdd(sender);
        break
        case 'bacot':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
		await addFilter(from);
        hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))];
        reply(hasil);
        break
        case 'addbacot':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (args.length < 1) return reply(`Ketik ${prefix}${command} text\nUntuk menbahkan text ke database bacot`);
        huu = body.slice(9);
        bacotrandom.push(huu);
        fs.writeFileSync('./database/bacot.json', JSON.stringify(bacotrandom));
        reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`);
        break
        case 'covid':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Covid negara mana?')
        client.updatePresence(from, Presence.composing) 
        data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
        if (data.result) reply(data.result)
        hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
        reply(hasil)
        ///await limitAdd(sender) 
        break
        case 'chord':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('teks nya mana om')
        tels = body.slice(7)
        anu = await fetchJson(`https://sanzapi.herokuapp.com/api/chordlagu?lagu=${body.slice(7)}&apikey=apisanz`)
        reply(anu.result.result)
        ///await limitAdd(sender) 
        break 
        case 'quotesdilan':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu4 = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolApi}`)
        reply(anu4.result)
        ///await limitAdd(sender) 
        break
        case 'bucin':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        gatauda = body.slice(1)
        anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=${lolApi}`, {method: 'get'})
        reply(anu.result)
        ///await limitAdd(sender) 
        break
        case 'quotesimg':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu3 = await getBuffer(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolApi}`)
        reply(mess.wait)
        client.sendMessage(from, anu3, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'pantun':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${lolApi}`, {method: 'get'})
        reply(anu.result)
        ///await limitAdd(sender) 
        break 
        case 'jam':
            reply(wektu);
        break
        case 'terbalik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        str = body.slice(10);
        trb = str.split('').reverse().join('');
        reply (trb);
        ///await limitAdd(sender);
        break
 		case 'halah':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "a");
        s = s.replace(/\u/g, "a");
        s = s.replace(/\e/g, "a");
        s = s.replace(/\o/g, "a");
		s = s.replace(/\I/g, "A");
        s = s.replace(/\U/g, "A");
        s = s.replace(/\E/g, "A");
        s = s.replace(/\O/g, "A");
        reply(s)
        ///await limitAdd(sender);
        break
        case 'hilih':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\a/g, "i");
        s = s.replace(/\u/g, "i");
        s = s.replace(/\e/g, "i");
        s = s.replace(/\o/g, "i");
		s = s.replace(/\A/g, "I");
        s = s.replace(/\U/g, "I");
        s = s.replace(/\E/g, "I");
        s = s.replace(/\O/g, "I");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'huluh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "u");
        s = s.replace(/\a/g, "u");
        s = s.replace(/\e/g, "u");
        s = s.replace(/\o/g, "u");
		s = s.replace(/\A/g, "U");
        s = s.replace(/\I/g, "U");
        s = s.replace(/\E/g, "U");
        s = s.replace(/\O/g, "U");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'heleh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "e");
        s = s.replace(/\u/g, "e");
        s = s.replace(/\a/g, "e");
        s = s.replace(/\o/g, "e");
		s = s.replace(/\I/g, "E");
        s = s.replace(/\U/g, "E");
        s = s.replace(/\A/g, "E");
        s = s.replace(/\O/g, "E");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'holoh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        s = body.slice(7);
        s = s.replace(/\i/g, "o");
        s = s.replace(/\u/g, "o");
        s = s.replace(/\e/g, "o");
        s = s.replace(/\a/g, "o");
		s = s.replace(/\I/g, "O");
        s = s.replace(/\U/g, "O");
        s = s.replace(/\E/g, "O");
        s = s.replace(/\A/g, "O");
        reply(s);
        ///await limitAdd(sender);
        break
        case 'jumlah':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply (`Ketik ${prefix + command} text`);
        jum = body.slice(8);
        hasil = jum.length;
        jml = `Jumlah huruf : ${hasil}`;
        reply (jml);
        ///await limitAdd(sender);
        break
        
        case 'pint':
        case 'pinterest':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} gambar yang akan dicari`)
        pinte = args.join(" ")
        data = await pinterest(pinte)
        reply(mess.wait)
        n = JSON.parse(JSON.stringify(data));
        nimek =  n[Math.floor(Math.random() * n.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: `𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n\*Hasil Pencarian* : *${pinte}*`})
        ///await limitAdd(sender) 
        break
        case 'lirik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Lirik lagu apa kak?');
        teks = body.slice(7);
        anu = await lirik(teks);
        reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu);
        ///await limitAdd(sender)
        break
        case 'rules':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(`Rules bot:
1. Dilarang mengeksploitasi bot
2. Dilarang spam command
3. Dilarang telp/vc bot, karena bot memiliki fitur auto block
4. Dilarang memperjual belikan bot/nomor bot sebab bot ini FREE
5. Semua data yang dikirimkan ke bot akan dihapus setiap jam 12 malam
6. Bot tidak bertanggung jawab atas semua data-data anda
7. Bot tidak bertanggung jawab atas command yang diberikan sebab bot tidak akan melakukan sesuatu tanpa perintah
8. Jika bot mengirimkan hal-hal yang sifatnya merugikan, memicu kerusuhan, dan lain sebagainya semua salah pengguna, kembali ke point 7.
9. Membuat  stiker harus satu persatu. sebab, jika langsung banyak akan menyebabkan sistem berhenti dan pengguna auto di ban
10. Hindari konten pornografi (berupa gambar, video, dan stiker)
11. Dilarang sembarangan menggunakan fitur chatowner
12. Menghujat berarti siap menerima konsekwensi.

Jika tidak suka dengan bot ini keluarkan saja dari group anda atau ketik -botleft, sebab bot tidak akan join tanpa diminta.

Tahulah berterimakasih sebab anda tidak perlu membayar untuk menggunakan bot ini, gunakan secara bijak, jangan berlebihan.


Be a smart user and good luck!`)
        break
        case 'quoteskehidupan':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return 
        const quo = kehidupan[Math.floor(Math.random() * kehidupan.length)]
        crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
        client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
        ///await limitAdd(sender)
        break
        case 'quotesislami':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        if (isBanned) return 
        const isl = islami[Math.floor(Math.random() * islami.length)]
        islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
        client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
        ///await limitAdd(sender)
        break	
        case 'quotesnasehat':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
        nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
        client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
        ///await limitAdd(sender)
        break
        case 'quotesmotivasi':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
        const vasi = motivasi[Math.floor(Math.random() * motivasi.length)]
        vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
        client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ vasi})
        ///await limitAdd(sender)
        break
        case 'codebahasa':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(`af: Afrikaans\nsq: Albanian\nar: Arabic\nhy: Armenian\nca: Catalan\nzh: Chinese\nzh-cn: Chinese (Mandarin/China)\nzh-tw: Chinese (Mandarin/Taiwan\nzh-yue: Chinese (Cantonese)\nhr: Croatian\ncs: Czech\nda: Danish\nnl: Dutch\nen: English\nen-au: English (Australia)\nen-uk: English (United Kingdom)\nen-us: English (United States)\neo: Esperanto\nfi: Finnish\nfr: French\nde: German\nel: Greek\nht: Haitian Creole\nhi: Hindi\nhu: Hungarian\nis: Icelandic\nid: Indonesian\nit: Italian\nja: Japanese\nko: Korean\nla: Latin\nlv: Latvian\nmk: Macedonian\nno: Norwegian\npl: Polish\npt: Portuguese\npt-br: Portuguese (Brazil)\nro: Romanian\nru: Russian\nsr: Serbian\nsk: Slovak\nes: Spanish\nes-es: Spanish (Spain)\nes-us: Spanish (United States)\nsw: Swahili\nsv: Swedish\nta: Tamil\nth: Thai\ntr: Turkish\nvi: Vietnamese\ncy: Welsh`)
        break
        case 'setprefix':
        if (!isOwner && !isOwner2) return reply(mess.only.ownerB)
        if (args.length < 1) return reply('mangsud?')
        prefix = args[0]
        reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
        break
        case 'truth':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
        const ttrth = trut[Math.floor(Math.random() * trut.length)]
        truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'dare':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
        const der = dare[Math.floor(Math.random() * dare.length)]
        tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
        ///await limitAdd(sender) 
        break
        case 'apakah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Apakah apanya?')
        apakah = body.slice(1)
        const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Sedikit Memungkinkan']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'rate':
        case 'nilai':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Apanya yang dinilai?')
        rate = body.slice(1)
        const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
        const te = ra[Math.floor(Math.random() * ra.length)]
        client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
		await addFilter(from)
        break
		case 'afk':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        alasan = args.join(" ");
        frm = sender.split('@')[0];
	    _afk[frm] = alasan.toLowerCase()
        fs.writeFileSync('./src/afk.json', JSON.stringify(_afk));
        ini_txt = "Anda telah afk\n";
        if (alasan != "") {
        ini_txt += "Dengan alasan : " + alasan
        };
        reply(ini_txt);
        break
        case 'clrall':
        anu = await client.chats.all()
        client.setMaxListeners(25)
        for (let _ of anu) {
        client.clearMessage(_.jid)
        }
        reply('✅Sukses delete all chat✅')
        break
        case 'gantengcek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        ganteng = body.slice(1)
        const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'cantikcek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        cantik = body.slice(1)
        const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const tik = can[Math.floor(Math.random() * can.length)]
        client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'watak':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Watak siapa kak? wataknya kakak ya kaya setan')
        if (args.length < 1) return reply('Watak siapa bangsadd?')
        watak = body.slice(1)
        const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','BaikHati','penyabar','Uwu','top deh, pokoknya','Suka Membantu','males','rajin']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'hobby':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Hobbynya siapa kak? kalau hobbyku sih mencintaimu')
        hobby = body.slice(1)
        const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','coli','ngocok','masturbasi','colm*k','Mencintaimu><']
        const by = hob[Math.floor(Math.random() * hob.length)]
        client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'bisakah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Bisa apa?')
        bisakah = body.slice(1)
        const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU','Maybe']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'kapankah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply('Gatau lu ga tanya')
        kapankah = body.slice(1)
        const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Lu Pikir Sendiri Lah Lu Kira Gw Tuhan Yg Tahu Segalanya']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        case 'dadu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        dadu = body.slice(1)
        const elu =['1','2','3','4','5','6']
        const ule = elu[Math.floor(Math.random() * elu.length)]
        client.sendMessage(from, ule, text, { quoted: mek })
        ///await limitAdd(sender) 
        break
        ///quran
        case 'randomquran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
        quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
        client.sendMessage(from, quran, text, {quoted: mek})
        break
        case 'quran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor surah|ayat\nUntuk mengetahui nomor surah ketik ${prefix}listsurah`)
        if (args[0].startsWith('a')) return reply('Surah harus berformat nomor')
        var qur = body.slice(7)
        var sur = qur.split("|")[0];
        var ay = qur.split("|")[1];
        quran = await fetchJson(`http://api.lolhuman.xyz/api/quran/${sur}/${ay}?apikey=${lolApi}`)
        hasill = `${quran.result.surah}${quran.result.asma}\nAyat:${quran.result.ayat[0].ayat}\n\n${quran.result.ayat[0].arab}\n\nArti:\n${quran.result.ayat[0].indonesia}\n\n\nKeterangan:\n${quran.result.keterangan}`
        client.sendMessage(from, hasill, text, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'qaudio':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} nomor surah ayat\nUntuk mengetahui nomor surah ketik ${prefix}listsurah`);
        if (args[0].startsWith('a')) return reply('Surah harus berformat nomor');
        var pp = args[0];
		var qq = args[1];
		rr = ('000' + pp).slice(-3);
		ss = ('000' + qq).slice(-3);
		jml = rr  + ss
	    link = `https://everyayah.com/data/Alafasy_64kbps/${jml}.mp3`;
	    aud = await getBuffer(link)
        reply(mess.wait)
        client.sendMessage(from, aud, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        ///await limitAdd(sender) 
        break
        case 'listsurah':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        client.sendMessage(from, listsurah() , text, {quoted: mek})
        break
        case 'kisahnabi':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} Nama Nabi`);
        anu = await fetchJson(`https://api-xcoders.xyz/api/muslim/kisahnabi?nabi=${body.slice(11)}&apikey=${apiKey}`);
        hasil = `📝 *Nama* : ${anu.result.name}\n📅 *Kelahiran* : ${anu.result.kelahiran}\n⏳ *Usia Wafat* : ${anu.result.wafat_usia}\n📍 *Singgah* : ${anu.result.singgah}\n📖 *Cerita* :\n\n${anu.result.kisah}`
        reply(hasil);
        ///await limitAdd(sender);
        break
        ///end
        case 'tik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} url tiktok`);
        if (!isUrl(args[0]) && !args[0].includes('vt')) return reply('URL TIDAK VALID');
        tikt = await tiktok(args[0]);
        if (tikt.status == 401) return reply('Error atau URL salah');
        reply(mess.wait);
        nowm = await getBuffer(tikt.result.nowatermark);
        client.sendMessage(from, nowm, video, {mimetype: 'video/mp4', filename: `p`, quoted: mek});
        ///await limitAdd(sender);
        break
        case 'tagall':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
       captt = body.slice(8)
        groupMembers.forEach ((name, i) => { 
        setTimeout (() => { 
		 members_id = []
		tekss = `@${name.jid.split('@')[0]} ${captt}`
		 members_id.push(name.jid);
		mentions(tekss, members_id, true);
        }, i * 1000); 
        });
        break
        case 'tagall3':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        members_id = []
        teks = (args.length > 1) ? body.slice(8).trim() : ''
        teks += '\n\n'
        for (let mem of groupMembers) {
        teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
        members_id.push(mem.jid)
        }
        client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
        break
        case 'clearall':
        if (!isOwner && !isOwner2) return reply('Kamu siapa?')
        anu = await client.chats.all()
        client.setMaxListeners(25)
        for (let _ of anu) {
        client.deleteChat(_.jid)
        }
        reply('✅Sukses delete all chat✅')
        break
        case 'promote':
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (!isGroup) return reply(ind.groupo());
        if (!isGroupAdmins) return reply(ind.admin());
        if (!isBotGroupAdmins) return reply(ind.badmin());
        if (args.length > 1) return reply('satu² ajg');
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return;
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true);
        //client.groupMakeAdmin(from, mentioned);
		men = `${mentioned}`
		reply(men)
        break
        case 'tomp3':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isQuotedVideo) return reply('❌ reply videonya um ❌');
        reply(mess.wait);
	    await addFilter(from);
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.mp4');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌');
        bufferlkj = fs.readFileSync(ran);
        client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek});
        fs.unlinkSync(ran);
        });
        ///await limitAdd(sender); 
        break
        case 'groupinfo':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
          client.updatePresence(from, Presence.composing)
          if (!isGroup) return reply(ind.groupo())
          ppUrl = await client.getProfilePicture(from) // leave empty to get your own
        buffergbl = await getBuffer(ppUrl)
        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
          break
        case 'setpp':
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        media = await client.downloadAndSaveMediaMessage(mek)
        await client.updateProfilePicture (from, media)
        reply('Sukses mengganti icon Grup')
        break
        case 'ayla':
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (isGroup) return reply('Maaf Ayla tidak bisa bicara didalam group.');
        if (args.length < 1) return reply(`Ketik ${prefix + command} on untuk berbicara dengan Ayla\natau Ketik ${prefix + command} off untuk berpamitan.`);
        if (args[0] === 'on') {
        if (isAyla) return reply('Ayla sudah ada disini kak');
        _ayla.push(from);
        fs.writeFileSync('./src/ayla.json', JSON.stringify(_ayla));
        reply('Kamu sudah bisa ngobrol dengan Ayla sekarang');
        } else if (args[0] === 'off') {
        _ayla.splice(from, 1);
        fs.writeFileSync('./src/ayla.json', JSON.stringify(_ayla));
        reply('Ayla pamit, dadah..👋');
        } else {
        reply(`Ketik ${prefix + command} on untuk berbicara dengan Ayla\natau Ketik ${prefix + command} off untuk berpamitan.`);
        };
        break
        case 'delete':
        case 'del':
        case 'd':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
        reply('done✅')
        break
        case 'tagme':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
         if (!isGroup) return reply(ind.groupo())
        var nom = mek.participant
        const tag = {
        text: `@${nom.split("@s.whatsapp.net")[0]} jomblo yaa kok minta tag bot\nYhahaha...`,
        contextInfo: { mentionedJid: [nom] }
        }
        client.sendMessage(from, tag, text, {quoted: mek})
        ///await limitAdd(sender) 
        break
		// add2 nambah member 2
        case 'hidetag':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (args.length < 1) return reply('Textnya mana?')
        var value = body.slice(9)
        var group = await client.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map( async adm => {
        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
        text: value,
        contextInfo: { mentionedJid: mem },
        quoted: mek
        }
        client.sendMessage(from, options, text)
        break
        case 'pengumuman':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (args.length < 1) return reply('Pengumannya apa?')
        var nom = mek.participant
        var value = `[P E N G U M U M A N]\n\n${body.slice(11)}\n\nAnnouncement by @${nom.split("@s.whatsapp.net")[0]}`
        var group = await client.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map( async adm => {
        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var options = {
        text: value,
        contextInfo: { mentionedJid: mem },
        quoted: mek
        }
        client.sendMessage(from, options, text)
        break
        case 'listadmin':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
        no = 0
        for (let admon of groupAdmins) {
        no += 1
        teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
        }
        mentions(teks, groupAdmins, true)
        break
        case 'linkgroup':
        case 'linkgrup':
        case 'linkgc':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        linkgc = await client.groupInviteCode(from)
         reply('https://chat.whatsapp.com/'+linkgc)
        break
        case 'toimg':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isQuotedSticker) return reply('❌ reply stickernya um ❌');
        await addFilter(from);
	    reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom('.png');
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌');
        buffer = fs.readFileSync(ran);
        client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'});
        fs.unlinkSync(ran);
        });
        ///await limitAdd(sender); 
        break
		case 'off':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (isPower) return reply('Udah off um')
        power.push(from)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot Off')
        break
        case 'on':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        power.splice(from, 1)
        fs.writeFileSync('./src/power.json', JSON.stringify(power))
        reply('Bot On')
        break
        case 'grup':
        case 'gc':
        case 'group':
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (!isGroup) return reply(ind.groupo())
        if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
        client.updatePresence(from, Presence.composing) 
        if (args[0] === 'unlock') {
        reply(`Group telah dibuka oleh admin ${pushname2} , sehinggaa semua peserta dapat mengirim pesan.`)
        client.groupSettingChange(from, GroupSettingChange.messageSend, false)
        } else if (args[0] === 'lock') {
        reply(`Group telah ditutup oleh admin ${pushname2} , sehingga hanya admin yang dapat mengirim pesan.`)
        client.groupSettingChange(from, GroupSettingChange.messageSend, true)
        }
        break
        //textmaker
        case 'avengers':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        reply(mess.wait)
        var avg = body.slice(9)
        var tx1 = avg.split("|")[0];
        var tx2 = avg.split("|")[1];
        anu = await textpro2('https://textpro.me/create-3d-avengers-logo-online-974.html', tx1, tx2)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'bpink':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', body.slice(7))
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'glitch':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var glt = body.slice(8)
        var text7 = glt.split("|")[0];
        var text8 = glt.split("|")[1];
        reply(mess.wait)
        anu = await textpro2('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', text7, text8)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'tahta':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${body.slice(6)}&apikey=${zeksApi}`)
        client.sendMessage(from, anu, image, {caption:`Harta Tahta ${body.slice(7)}`, quotedd: mek})
        ///await limitAdd(sender) 
        break
        case 'marvel':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var mar = body.slice(8)
        var text12 = mar.split("|")[0];
        var text13 = mar.split("|")[1];
        anu = await textpro2('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text12, text13)
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'glitch2':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', body.slice(9))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'phlogo':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text|text`)
        var phl = body.slice(8)
        var text16 = phl.split("|")[0];
        var text17 = phl.split("|")[1];
        anu = await textpro2('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', text16, text17)
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'thunder':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-thunder-text-effect-online-881.html', body.slice(9))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'attp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
        client.sendMessage(from, attp2, sticker, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'ttp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
        ttp = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=${lolApi}&text=${body.slice(5)}`)
        client.sendMessage(from, ttp, sticker, {quoted: mek})
        ///await limitAdd(sender) 
        break 
        case 'bneon':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/neon-light-text-effect-online-882.html', body.slice(7))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'matrix':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/matrix-style-text-effect-online-884.html', body.slice(8))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'greenhoror':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', body.slice(12))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'dropwater':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/dropwater-text-effect-872.html', body.slice(11))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'devil':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} text`)
        anu = await textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', body.slice(7))
        reply(mess.wait)
        buff = await getBuffer(anu)
        client.sendMessage(from, buff, image, {quoted: mek})
        ///await limitAdd(sender)
        break
        case 'crosslogo':
        case 'flametext':
        case 'glowtext':
        case 'skytext':
        case 'cslogo':
        case 'lithgtext':
        if (isBanned) return 
        if (isPower) return
        if (!isRegistered) return reply( ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname2))
        if (args.length == 0) return reply(`Ketik ${prefix + command} text`)
        txt = args.join(" ")
        reply(mess.wait)
        anu = await fetchJson(`https://api.zeks.me/api/${command}?text=${txt}&apikey=${zeksApi}`)
		reply('gunakan link ini  jika gambar tidak terkirim:\n\n' + anu.result)
		setTimeout(async() => {
        gambarr = await getBuffer(anu.result);
		setTimeout(() => {
        client.sendMessage(from, gambarr, image, {quoted: mek});
		}, 2000);
		}, 3000);
        ///await limitAdd(sender);
        break
        ///maker with imgbb uploader
        
        case 'cphcomment':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`kirim gambar lalu ketik ${prefix}${command} nama|komentar`)
        gh = body.slice(11)
        usnm = gh.split("|")[0];
        cmn = gh.split("|")[1];
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        var imgbb = require('imgbb-uploader')
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        buffer88 = await getBuffer(`https://api.zeks.me/api/phub?apikey=apivinz&img=${res.display_url}&username=${usnm}&msg=${cmn}`)
        client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
        ///await limitAdd(sender) 
        break
        case 'translate':
         if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} code bahasa|text`);
        var lang = args[0];
        var kata = body.slice(14);
        terj = await terjemah(kata, lang);
        reply(terj);
        break
		case 'changelog':
		if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
		teks = `Here are the changes that have occurred in the ${setting.botname} bot:`;
		no = 0;
		for (let chg of changelog) {
			no += 1;
			teks += `\n\n🚀 ${no.toString()}. ${chg}`;
		};
		reply(teks);
		break;
		case 'change':
		if (!isOwner) return;
		if (args.length < 1) return;
		var dates = moment.tz('Asia/Jakarta').format('dd,DD/MM/YYYY HH:mm:ss');
		chg = dates  + ' :\n' + body.slice(8);
		changelog.push(chg);
		fs.writeFileSync('./database/changelog.json', JSON.stringify(changelog));
		reply('Succes added changelog');
		break;
        case 'kalender':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/calendar?image_url=${res.display_url}`)
        bufferj = await getBuffer(anu.result)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
         case 'badut':
        if (isPower) return
        if (isBanned) return
        if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        reply(mess.wait)
        bufferj = await getBuffer(`https://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${res.display_url}`)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
        case 'nobg':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
        if (res.image.extension === "png") return reply('Maaf gampar berformat png tidak dapat dihapus background');
        reply(mess.wait)
         bufferj = await getBuffer(`https://api-xcoders.xyz/api/maker/rmbg?url=${res.display_url}&apikey=${apiKey}`)
        client.sendMessage(from, bufferj, image, {quoted: mek})
        } else {
        reply(`Kirim foto lalu ketik ${prefix}${command}`)
        }
        ///await limitAdd(sender) 
        break
                
        //tools
        
        case 'artinama':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Namanya siapa?`);
        reply(mess.wait);
        anu = await artiNama(body.slice(10));
        reply(anu.result);
        ///await limitAdd(sender) ;
        break
        case 'artimimpi':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Mimpiya apa?`);
        reply(mess.wait);
        anu = await artiMimpi(body.slice(11));
        reply(anu.result);
        ///await limitAdd(sender);
        break
        case 'jodoh':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} namamu|nama pasanganmu`);
        var s = body.slice(7);
        var t = s.split("|")[0];
        var u = s.split("|")[1];
        anu = await ramalJodoh(t, u);
        hasil = `*Namamu* : ${t}\n*Nama Pasagan* : ${u}\n*Positif* : ${anu.positif}\n*Negatif* : ${anu.negatif}`
        reply(hasil);
        ///await limitAdd(sender);
        break
        case 'nomorhoki':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} nomor telepon`);
        anu = await nomorHoki(args[0]);
        reply(anu.result);
        ///await limitAdd(sender);
        break
        case 'zodiakharian':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} zodiakmu`);
        anu = await zodiakHar(body.slice(14));
        reply(mess.wait);
        tek = `✨ *Zodiak* : ${anu.zodiak}\n\n📅 *Tanggal* : ${anu.date}\n\n🎰 *Nomor hoki* : ${anu.nomer_hoki}\n\n🗒️ *Ramalan* : ${anu.ramalan.umum}\n\n❤️ *Love* : ${anu.ramalan.love}\n\n💵 *Keuangan* : ${anu.ramalan.keuangan}`
        buff = await getBuffer(anu.thumb)
        client.sendMessage(from, buff, image, {quoted: mek, caption: tek});
        ///await limitAdd(sender);
        break
        case 'zodiak':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix+ command} zodiakmu`);
        anu = await zodiakMing(body.slice(8));
        reply(mess.wait);
        tek = `✨ *Zodiak* : ${anu.zodiak}\n\n📅 *Tanggal* : ${anu.date}\n\n🎰 *Nomor hoki* : ${anu.nomer_hoki}\n\n🗒️ *Ramalan* : ${anu.ramalan.umum}\n\n❤️ *Love* : ${anu.ramalan.love}\n\n💵 *Keuangan* : ${anu.ramalan.keuangan}`
        buff = await getBuffer(anu.thumb)
        client.sendMessage(from, buff, image, {quoted: mek, caption: tek});
        ///await limitAdd(sender);
        break
        case 'infogempa':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        anu = await Gempa();
        teks = `• *Waktu*:${anu.waktu}\n• *Magnitude*:${anu.magnitudo}\n• *Kedalaman*:${anu.kedalaman}\n• *Lintang*:${anu.lintang}\n• *Bujur*:${anu.bujur}\n• *Wilayah*:${anu.wilayah}`;
        gbr = await getBuffer(anu.map);
        client.sendMessage(from, gbr, image, {quoted: mek, caption: teks});
        ///await limitAdd(sender);
        break;
        case 'cuaca':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Masukkan nama kota`);
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        anu = await Cuaca(body.slice(7));
        teks = `🔰 *Tempat* : ${anu.Nama}\n📍 *Longitude* : ${anu.Longitude}\n📍 *Latitude* : ${anu.Latitude}\n🌡️ *Suhu* : ${anu.Suhu}\n🌪️ *Angin* : ${anu.Angin}\n❄️ *Kelembaban* : ${anu.Kelembaban}\n🌥️ *Cuaca* : ${anu.Cuaca}\n🗒️ *Keterangan* : ${anu.Keterangan}\n🌬️ *Udara* : ${anu.Udara}`
        reply(teks);
        ///await limitAdd(sender);
        break
        case 'resep':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
		if (args.length < 1) return reply(`Ketik ${prefix + command} nama makanan`);
        anu = await fetchJson(`https://api.zeks.me/api/resep-masak?apikey=${zeksApi}&q=${body.slice(7)}`);
        teks = `• *Judul*:${anu.title}\n• *Link*:${anu.url}\n• *Tingkat*:${anu.tingkat}\n• *Durasi*:${anu.duration}\n• *Banyak*:${anu.banyak}\n\n${anu.bahan}\n\n• *Langkah-langkah:\n${anu.cara}`;
        buff = await getBuffer(anu.thumb)
        client.sendMessage(from, buff, image, {quoted: mek, caption: teks});
        ///await limitAdd(sender);
        break;
        case 'masak':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
		if (args.length < 1) return reply(`Ketik ${prefix + command} nama makanan`);
        var anu = await fetchJson(`https://api.zeks.me/api/masak-apa?apikey=${zeksApi}&q=${body.slice(7)}`);
        anuu = anu.results
		anuu.forEach(async(nn, i) => {
          setTimeout (() => {
            teks = `• *Judul*:${nn.title}\n• *Url*:${nn.url}\n• *Tingkat*:${nn.tingkat}\n• *Durasi*:${nn.duration}\n• *Banyak*:${nn.banyak}`;
            reply(teks);
          }, i * 1000);
        });
        ///await limitAdd(sender);
        break;
        case 'nulis':
        case 'tulis':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} text`)
        reply(mess.wait)
        anu = await getBuffer(`https://api-xcoders.xyz/api/maker/nulis?apikey=${apiKey}&text=${body.slice(6)}`)
        client.sendMessage(from, anu, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'nulis2':
          if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} nama|kelas|text|warna tinta\nUntuk warna tinta adalah:\n1 = coklat\n2 = merah\n3 = biru\n4 = hitam`)
        var nul = body.slice(8)
        var nama = nul.split("|")[0];
        var kelas = nul.split("|")[1];
        var tekk = nul.split("|")[2];
        var tinta = nul.split("|")[2];
        reply(mess.wait)
        buffr = await getBuffer(`https://api.zeks.me/api/magernulis?nama=${nama}&kelas=${kelas}&text=${tekk}&tinta=${tinta}&apikey=${zeksApi}`)
        client.sendMessage(from, buffr, image, {caption: 'Ketahuan guru mampus lu', quoted: mek})
        ///await limitAdd(sender) 
        break
		case 'asupan':
		if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        nimek =  asupan[Math.floor(Math.random() * asupan.length)];
        vid = await mediafireDl(nimek);
        hsl = await getBuffer(vid.link);
		reply(mess.wait);
		client.sendMessage(from, hsl, video, {quoted: mek, mimetype: 'video/mp4'});
		///await limitAdd(sender);
		await addFilter(from);
		break
        case 'simi':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} pesan`)
        sim = await fetchJson(`https://st4rz.herokuapp.com/api/simsimi?kata=${body.slice(6)}`)
        simi = (sim.result)
        client.sendMessage(from, simi, text, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'pictcewek':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  cewek[Math.floor(Math.random() * cewek.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'pictcowok':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  cowok[Math.floor(Math.random() * cowok.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'pictkucing':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  kucing[Math.floor(Math.random() * kucing.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'loli':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  lolii[Math.floor(Math.random() * lolii.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'anime':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  anime[Math.floor(Math.random() * anime.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
		case 'play':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} judul lagu`);
        await addFilter(from);
        reply('Sedang diproses...');
        ply = await ytMp3(body.slice(6));
        rslt = `Lagu ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nLagu akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek})
        lagu = await getBuffer(ply.url);
        client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${ply.title}.mp3`, quoted: mek,});
        ///await limitAdd(sender); 
        break
        case 'playmp4':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix}${command} judul video`);
        await addFilter(from);
        reply('Sedang diproses...');
        ply = await ytMp4(body.slice(9));
        rslt = `Video ditemukan\n\n\nJudul:${ply.title}\n\nChannel:${ply.channel}\n\nPublished:${ply.published}\n\nViews:${ply.views}\n\n\nVideo akan dikirimkan, jangan spam ya sayang!`;
        thmb = await getBuffer(ply.thumb);
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek});
        vidd = await getBuffer(ply.url);
        client.sendMessage(from, vidd, video, {mimetype: 'video/mp4', filename: `${ply.title}.mp4`, quoted: mek});
        ///await limitAdd(sender);
        break
        case 'ytmp3':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} Link Youtube`)
        reply('Sedang diproses...')
        ply = await ytDonlodMp3(args[0])
        rslt = `Lagu ditemukan\n\n\nJudul:${ply.judul}\n\nUkuran:${ply.size}\n\nKualitas:${ply.quality}\n\n\nLagu akan dikirimkan, jangan spam ya sayang!`
        thmb = await getBuffer(ply.thumb)
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek})
        laguu = await getBuffer(ply.link)
        client.sendMessage(from, laguu, document, {mimetype: 'audio/mp4', filename: `${ply.judul}.mp3`, quoted: mek})
        ///await limitAdd(sender)
        break
        case 'ytmp4':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply (imitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} Link Youtube`)
        reply('Sedang diproses...')
        ply = await ytDonlodMp4(args[0])
        rslt = `Video ditemukan\n\n\nJudul:${ply.judul}\n\nUkuran:${ply.size}\n\nKualitas:${ply.quality}\n\n\nVideo akan dikirimkan, jangan spam ya sayang!`
        thmb = await getBuffer(ply.thumb)
        client.sendMessage(from, thmb, image, {caption: rslt, quoted: mek})
        videoos = await getBuffer(ply.link)
        client.sendMessage(from, videoos, video, {mimetype: 'video/mp4', filename: `${ply.judul}.mp4`, quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'img2url':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        reply(mess.wait)
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        var media = await  client.downloadAndSaveMediaMessage(encmedia)
        var imgbb = require('imgbb-uploader')
        imgbb('de404db9d9a94c4d0eb2490b93788824', media)
          .then(data => {
              var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
              ibb = fs.readFileSync(media)
               client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
          })
          .catch(err => {
              throw err
          })
          ///await limitAdd(sender) 
        break  
        case 'wame':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        client.updatePresence(from, Presence.composing) 
        options = {
        text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
        contextInfo: { mentionedJid: [sender] }
        }
        client.sendMessage(from, options, text, { quoted: mek } )
        break
        case 'wiki':
        case 'wikipedia':
        ///if (!isRegistered) return reply(ind.noregis())
        if (isPower) return
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix}${command} query`)
        reply(mess.wait)
        wiki = await fetchJson(`https://api.zeks.me/api/wiki?q=${args.join(" ")}&apikey=${zeksApi}`)
        if (wiki.result.error) return reply('Query tidak ditemukan')
        reply(wiki.result.result)
        ///await limitAdd(sender) 
        break
        case 'kusonime':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`ketik ${prefix}${command} judul anime`)
        anu = await fetchJson(`https://sanzapi.herokuapp.com/api/anime/kusonime?search=${body.slice(10)}&apikey=apisanz`)
        if (anu.message) return reply('Judul anime tidak di temukan')
        reply(mess.wait)
        result = `• *Title*:${anu.result.title}\n• *Title Japan*:${anu.result.title_jp}\n• *Genre*:${anu.result.genre}\n• *Season*:${anu.result.season}\n• *Producer*:${anu.result.producer}\n• *Type*:${anu.result.type}\n• *Status*:${anu.result.status}\n• *Total Episode*:${anu.result.total_episode}\n• *Score*:${anu.result.score}\n• *Duration*:${anu.result.duration}\n• *Relase*:${anu.result.released_on}\n• *Description*:${anu.result.description}\n\n`
        for (let dnl of anu.result.download) {
          result += `resolusi:${dnl.resolution}\n\n`
          for (let res of dnl.download_list){
            result += `link:${res.download_link}\ndownloader:${res.downloader}\n\n`
          }
        }
        thumbs = await getBuffer(anu.result.thumbs)
        client.sendMessage(from, thumbs,  image, {quoted: mek, caption: result})
        ///await limitAdd(sender) 
        break
        case 'playstore':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} aplikasi yang dicari`)
        ps = `${body.slice(11)}`
        anu = await fetchJson(`https://api.zeks.me/api/sgplay?apikey=${zeksApi}&q=${ps}`, {method: 'get'})
        store = '======================\n'
        for (let ply of anu.result){
        store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
        }
        reply(store.trim())
        ///await limitAdd(sender) 
        break
        case 'jadwaltv':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${body.slice(0)} channel tv`)
        channel = args[0]
        tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolApi}`, {method: 'get'})
        tvnow = tvnow.result
        txt = `Jadwal TV ${channel.toUpperCase()}\n`
        for (var x in tvnow) {
        txt += `${x} - ${tvnow[x]}\n`
        }
        reply(txt)
        ///await limitAdd(sender) 
        break
        case 'ganteng':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const nus = groupMembers;
        const msl = groupMembers;
        const siapss = nus[Math.floor(Math.random() * nus.length)];
        const sipss = pushname2[Math.floor(Math.random() * msl.length)];
        teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`;
        membr.push(siapss.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'beban':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const met = groupMembers;
        const msd = groupMembers;
        const siapsa = met[Math.floor(Math.random() * met.length)];
        const sipsd = pushname2[Math.floor(Math.random() * msd.length)];
        teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`;
        membr.push(siapsa.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'cantik':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const meo = groupMembers;
        const msk = groupMembers;
        const siaps = meo[Math.floor(Math.random() * meo.length)];
        const sips = pushname2[Math.floor(Math.random() * msk.length)];
        teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`;
        membr.push(siaps.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'babi':
        case 'bajingan':
        case 'gatel':
        case 'setan':
        case 'asu':
        case 'kimak':
		case 'jancok':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        membr = [];
        const mew = groupMembers;
        const msi = groupMembers;
        const siapo = mew[Math.floor(Math.random() * mew.length)];
        const sipu = pushname2[Math.floor(Math.random() * msi.length)];
        teks = `Yang paling ${command} disini Adalah : @${siapo.jid.split('@')[0]}`;
        membr.push(siapo.jid);
        mentions(teks, membr, true);
        ///await limitAdd(sender);
        break
        case 'brainly':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`https://api.zekais.com/brainly?query=${body.slice(9)}&apikey=${zekaisApi}`)
        anu.result.forEach((dat, i) => {
            setTimeout(() => {
            brain = `'❉───────────❉\n\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${dat.question}\n\n*➸ Jawaban:* ${dat.answer[0].answer}\n❉───────────❉`
            client.sendMessage(from, brain, text)
            }, 1000*i)
        })
        ///await limitAdd(sender) 
        break 
        case 'darkjoke':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${zeksApi}`)
        dark = await getBuffer(anu.result)
        client.sendMessage(from, dark, image, {quoted: mek})
        ///await limitAdd(sender) 
        break
        case 'mutual':
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
        anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
        await reply('Looking for a partner...')
        await reply(`wa.me/${anug}`)
        await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        ///await limitAdd(sender) 
        break
        case 'next':
        if (isBanned) return
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
        anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
        await reply('Looking for a partner...')
        await reply(`wa.me/${anug}`)
        await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        ///await limitAdd(sender) 
        break
        case 'jadian':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        jds = [];
        const jdii = groupMembers;
        const koss = groupMembers;
        const akuu = jdii[Math.floor(Math.random() * jdii.length)];
        const diaa = koss[Math.floor(Math.random() * koss.length)];
        teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} 💘 @${diaa.jid.split('@')[0]} \nJangan lupa PJnya yaa...`;
        jds.push(akuu.jid);
        jds.push(diaa.jid);
        mentions(teks, jds, true);
        ///await limitAdd(sender);
        break
        case 'ngewe':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (!isGroup) return reply(ind.groupo());
		await addFilter(from);
        jds = [];
        const jdiid = groupMembers;
        const kosst = groupMembers;
        const akuut = jdiid[Math.floor(Math.random() * jdiid.length)];
        const diaat = kosst[Math.floor(Math.random() * kosst.length)];
        teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]}  \nKetahuan kan lu`;
        jds.push(akuut.jid);
        jds.push(diaat.jid);
        mentions(teks, jds, true);
        ///await limitAdd(sender);
        break
         case 'ig':
        if (isBanned) return;
        if (isPower) return;
        //if (!isRegistered) return reply(ind.noregis());
        //if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} link instagram`);
        if (!args[0].includes('instagram.com/')) return reply('Ini link apa?');
        anu = await fetchJson(`http://api.zekais.com/igdl2?url=${args[0]}&apikey=${zekaisApi}`);
        if (anu.status == 500) return reply ('URL Salah');
        reply (mess.wait);
        anu.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 3000* i);
        });
        ///await limitAdd(sender)
        break
        case 'igstory':
        if (isBanned) return;
        if (isPower) return;
       // if (!isRegistered) return reply(ind.noregis());
       // if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} username Instagram`);
        if (budy.includes('instagram.com')) return reply('Username aja kak');
        anu = await fetchJson(`http://api.zekais.com/igstory?username=${args[0]}&apikey=${zekaisApi}`);
         if (!anu.status == 200) return reply ('Username Salah');
        reply (mess.wait);
        anu.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 3000* i);
        });
		///await limitAdd(sender);
		break
		case 'telesticker':
		case 'telestiker':
		case 'telestik':
        if (isBanned) return;
		if (isPower) return;
        ///if (!isRegistered) return reply(ind.noregis());
        if (isLimit(sender)) return reply(limitend(pusname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} Link Stiker Telegram`);
		anu = await fetchJson(`https://api.zeks.me/api/telegram-sticker?apikey=${zeksApi}&url=${args[0]}`);
		if (anu.status == false) return reply('Url tidak valid');
		reply(mess.wait);
		anu.result.forEach(async(nn, i) => {
			setTimeout(async() => {
			    var stik = await getBuffer(nn);
           		client.sendMessage(from, stik, image);	
			},i * 2000);
		});
		break
        case 'apkpure':
          if (isPower) return
          if (isBanned) return
          ///if (!isRegistered) return reply(ind.noregis())
          ///if (isLimit(sender)) return reply(limitend(pushname2))
          if (args.length < 1) return reply(`Ketik ${prefix + command} nama aplikasi`)
          anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/apk-pure?q=${body.slice(9)}`)
          apk = '====================\n'
          for(let pure of anu.result) {
            apk += `Link:${pure.url}\nStar:${pure.star}\nScore:${pure.score}\nVersion:${pure.version}\nSize:${pure.filesize}\nLink Download:${pure.download_link}\n===================\n`
          }
          reply(apk.trim())
          ///await limitAdd(sender)
          break
		case 'ml':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} nama hero`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/heroml?hero=${body.slice(4)}`)
        hasil = `*R E S U L T*\n\nNama:${anu.result.hero.name}\nKutipan:${anu.result.hero.quotes}\nRole:${anu.result.hero.role}\nSpeciality:${anu.result.hero.speciality}\nRekomendasi Lane:${anu.result.hero.laning_recommendation}\nTanggal Rilis:${anu.result.hero.release_date}\n*Atribut*\n\nMovement Speed:${anu.result.hero.attributes.movement_speed}\nPhysical Attack:${anu.result.hero.attributes.physical_attack}\nMagic Power:${anu.result.hero.attributes.magic_power}\nAttack Speed:${anu.result.hero.attributes.attack_speed}\nPhysical Defense:${anu.result.hero.attributes.physical_defense}\nMagic Defense:${anu.result.hero.attributes.magic_defense}\nBasic Atk Crit Rate:${anu.result.hero.attributes.basic_atk_crit_rate}\nHP:${anu.result.hero.attributes.hp}\nMana:${anu.result.hero.attributes.mana}\nAbility Crit Rate:${anu.result.hero.attributes.ability_crit_rate}\nHP Regen:${anu.result.hero.attributes.hp_regen}\nMana Regen:${anu.result.hero.attributes.mana_regen}`
        buffer = await getBuffer(anu.result.hero.img)
        client.sendMessage(from, buffer, image, {caption: hasil, quoted: mek})
        ///await limitAdd(sender)
        break
        case 'tafsirquran':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} permasalahan`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tafsir?q=${body.slice(13)}`)
        taf = '======================\n'
        for (let ply of anu.result){
        taf += `• Tafsir:${ply.tafsir}\n• Deskripsi:${ply.deskripsi}\n=====================\n`
          }
        reply(taf.trim())
        ///await limitAdd(sender)
        break
        case 'jadwalsholat':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if (args.length < 1) return reply(`Ketik ${prefix + command} kota`);
        anu = await fetchJson(`https://api-xcoders.xyz/api/muslim/jadwalshalat?query=${body.slice(14)}&apikey=${apiKey}`);
        hasil = `*R E S U L T*\n\n📅 *Tanggal* : ${anu.result.date}\n📍 *Lokasi* : ${anu.result.lokasi}\n⏰ *Timezone* : ${anu.result.timezone}\n🌃 *Imsyak* : ${anu.result.imsak}\n🌆 *Sunrise* : ${anu.result.sunrise}\n☀️ *Dzuhur* : ${anu.result.dzuhur}\n🌇 *Ashar* : ${anu.result.ashar}\n🌅 *Maghrib* : ${anu.result.maghrib}\n🌙 *Isya* : ${anu.result.isya} `
        reply(hasil)
        ///await limitAdd(sender)
        break
		case 'getallid':
		if (!isOwner && !isOwner2) return;
		anu = await client.chats.all();
		teks = '';
		for (let _ of anu){
			teks += '\n' + _.jid;
		};
		teks += '\n\n Length : ' + anu.length;
		reply(teks);
		break
        case 'fancy':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} text`)
        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fancy?text=${body.slice(7)}`) 
        fncy = '*R E S U L T*:\n'
        for (let fan of anu.result) {
          fncy+= `• ${fan}\n`
        }
        reply(fncy)
        ///await limitAdd(sender)
        break
        case 'fb':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} link video fb`)
	   
		
        ///await limitAdd(sender)
        break
        case 'cerpen':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/cerpen`)  
        cerp = `JUDUL:${anu.result.title}\nPENGARANG:${anu.result.pengarang}\nKATEGORI:${anu.result.kategori}\n\nCERPEN:\n${anu.result.cerpen}`
        reply(cerp)
        ///await limitAdd(sender)
        break
        case 'spekhp':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} merk dan type hp`)
        anu = await fetchJson(`https://api.zeks.me/api/gsmArena?apikey=${zeksApi}&q=${body.slice(8)}`)
        reply(mess.wait)
        buffr = await getBuffer(anu.data.thumb)
        spek = `R E S U L T\n\n*Merk*:${anu.data.title}\n\n*Description*:${anu.data.few_desc}\n\n${anu.data.full_desc.string}\n*link*:${anu.data.link}`
        client.sendMessage(from, buffr, image, {caption: spek, quoted: mek})
        ///await limitAdd(sender)
        break
		case 'image':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} gambar yang dicari`)
        reply(mess.wait);
	    var google = new Scraper({
          puppeteer: {
           headless: true,
          },
        });
		(async () => {
        gimagee = await google.scrape(`${body.slice(7)}`, 5);
		gimagee.forEach(async(gb, i) => {
			setTimeout(async() => {
			gbr = await getBuffer(gb.url);
            client.sendMessage(from, gbr, image, {quoted: mek});			
			}, i * 3000);
		});
         })();
		///await limitAdd(sender)
        break
		case 'image1':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        if (args.length < 1) return reply(`Ketik ${prefix + command} gambar yang dicari`)
        reply(mess.wait);
	    var google = new Scraper({
          puppeteer: {
           headless: true,
          },
        });
		(async () => {
        gimagee = await google.scrape(`${body.slice(8)}`, 200);
		teks = ''
		for (let  gbr of gimagee) {
			teks += '"' + gbr.url + '",\n'
		};
		reply(teks);
         })();
		///await limitAdd(sender)
        break
		
        //anime 
        case 'waifu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  waifu[Math.floor(Math.random() * waifu.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'husbu':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  husbu[Math.floor(Math.random() * husbu.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'kpop':
        if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis())
        ///if (isLimit(sender)) return reply(limitend(pushname2))
        reply(mess.wait)
        nimek =  kpop[Math.floor(Math.random() * kpop.length)];
        pok = await getBuffer(nimek)
        client.sendMessage(from, pok, image, { quoted: mek, caption: 'nih'})
        ///await limitAdd(sender) 
        break
        case 'ssweb':
		if (isPower) return
        if (isBanned) return
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
		if (args.length < 1)return reply(`Ketik ${prefix+ command} url`);
        anu = await getBuffer(`https://image.thum.io/get/maxAge/12/width/1200/${args[0]}`);
		reply(mess.wait)
	    client.sendMessage(from, anu, image, {caption: 'Jika muncul logo saja harap ulangi!',quoted: mek});
		///await limitAdd(sender);
		break
		
        case 'p':
        if (isBanned) return
        reply('[ONLINE]')
        break
        case 'bot':
        if (isBanned) return
		if (isPower) return
        reply(`Iya syg, mau apa?\nMending ketik ${prefix}menu`)
        break
        case 'wait':
        if (isPower) return;
        if (isBanned) return;
        ///if (!isRegistered) return reply(ind.noregis());
        ///if (isLimit(sender)) return reply(limitend(pushname2));
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        reply(mess.wait);
		await addFilter(from);
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek;
        media = await client.downloadMediaMessage(encmedia)
        await wait(media).then(res => {
        client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()});
        }).catch(err => {
        reply(err);
        });
        } else {
        reply('Fotonya mana?');
        };
        ///await limitAdd(sender);
        break
				default:
				
        if (budy.includes('tiktok.com/')) {
            if (isPower) return
            if (isBanned) return
            	if (budy.length > 75) return
            	if (budy.includes("-")) return
            anu = await findUrl(budy)
        anu.forEach(async(taut, i) => {
        setTimeout(async() => {
             tikt = await tiktok(taut);
             toktok = await getBuffer(tikt.result.nowatermark);
             client.sendMessage(from, toktok, video, {quoted: mek, mimetype: 'video/mp4'});
         }, 3000 * i)
        })   
        }

        if (budy.includes('instagram.com/')) {
            if (isPower) return
            if (isBanned) return
            	if  (budy.length > 135) return
            	if (budy.includes("-")) return
            anu = await findUrl(budy)
        anu.forEach(async(taut, i) => {
        setTimeout(async() => {
            inst = await fetchJson(`http://api.zekais.com/igdl2?url=${taut}&apikey=${zekaisApi}`);
             inst.result.forEach(async(res, i) => {
            setTimeout(async() => {
            fl = await getBuffer(res.url);
            if (res.type == "image") {
                client.sendMessage(from, fl, image, {quoted: mek});
            } else {
                client.sendMessage(from, fl, video, {quoted: mek});
            };
            }, 3000* i);
        });
         }, 3000 * i)
        })   
        }
		
		    if (!isGroup && isAyla && budy != undefined) {
        console.log(budy)
        aylaa = await ayla(budy)
	    	ayla1 = aylaa.replace(/simi/g, "ayla");
        console.log(ayla1)
        client.sendMessage(from, ayla1, text)
        } else {
        return console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
        }

        
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
