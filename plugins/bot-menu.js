let media = './Menu2.jpg' 
 let handler = async (m, { conn, command }) => { 
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" } 

//m.react ('✅')

 let menu = `👋 _¿Hola, ${nombre} como estas?_ 

!allmenu
_(Para ver el menú completo)_`

await conn.sendFile(m.chat, media, 'lobo.jpg', menu, fkontak )} 
 handler.tags = ['main']
 handler.command = ['menu']
 //handler.exp = 35 
 export default handler