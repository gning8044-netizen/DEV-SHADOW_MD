const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━━〔 *${settings.botName || '𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖-𝐌𝐃'}* 〕━━━━╮
┃ 🛠️ Version: *${settings.version || '1.0.0'}*
┃ 👤 Owner: *${settings.botOwner || 'Papii'}*
┃ 
╰━━━━━━━━━━━━━━━━━━━━━━━╯

*COMMAND LIST:*

*┏━━〔 💠 𝐌𝐀𝐈𝐍 〕*
┃ ❍ .ᴀʟɪᴠᴇ
┃ ❍ .ᴘɪɴɢ
┃ ❍ .ᴀʙᴏᴜᴛ
┃ ❍ .ᴏᴡɴᴇʀ
┃ ❍ .ᴜᴘᴛɪᴍᴇ
┃ ❍ .ᴄʜᴀɴɴᴇʟ
┗━━━━━━━━━━━━┛

*┏━━〔 👥 𝐆𝐑𝐎𝐔𝐏 〕*
┃ ❍ .ᴀᴅᴅ
┃ ❍ .ᴋɪᴄᴋ
┃ ❍ .ᴘʀᴏᴍᴏᴛᴇ
┃ ❍ .ᴅᴇᴍᴏᴛᴇ
┃ ❍ .ᴀᴅᴍɪɴs
┃ ❍ .ᴛᴀɢᴀʟʟ
┃ ❍ .ʜɪᴅᴇᴛᴀɢ
┃ ❍ .ᴏᴘᴇɴ
┃ ❍ .ᴄʟᴏsᴇ
┃ ❍ .ɢɪɴғᴏ
┃ ❍ .ᴡᴇʟᴄᴏᴍᴇ
┃ ❍ .ɢᴏᴏᴅʙʏᴇ
┃ ❍ .ᴡᴀʀɴ
┃ ❍ .ᴍᴜᴛᴇ
┃ ❍ .ᴜɴᴍᴜᴛᴇ
┃ ❍ .ᴀɴᴛɪʙᴏᴛ
┃ ❍ .ᴀɴᴛɪsᴘᴀᴍ
┗━━━━━━━━━━━━┛

*┏━━〔 🤖 𝐀𝐈 𝐓𝐎𝐎𝐋𝐒 〕*
┃ ❍ .ᴀɪ
┃ ❍ .ɢᴘᴛ
┃ ❍ .ɢᴇᴍɪɴɪ
┃ ❍ .ᴄʟᴀᴜᴅᴇ
┃ ❍ .ᴅᴇᴇᴘsᴇᴇᴋ
┃ ❍ .ᴄᴏᴅᴇᴀɪ
┗━━━━━━━━━━━━┛

*┏━━〔 📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 〕*
┃ ❍ .ᴘʟᴀʏ
┃ ❍ .ᴠɪᴅᴇᴏ
┃ ❍ .ᴀᴜᴛᴏsᴏɴɢ
┃ ❍ .ғʙ
┃ ❍ .ɪɴsᴛᴀ
┃ ❍ .ᴛɪᴋᴛᴏᴋ
┃ ❍ .sᴘᴏᴛɪғʏ
┃ ❍ .ʏᴛsᴇᴀʀᴄʜ
┗━━━━━━━━━━━━┛

*┏━━〔 🛠️ 𝐔𝐓𝐈𝐋𝐈𝐓𝐘 〕*
┃ ❍ .ᴡᴇᴀᴛʜᴇʀ
┃ ❍ .ᴛʀᴀɴsʟᴀᴛᴇ
┃ ❍ .ᴄᴀʟᴄ
┃ ❍ .ǫʀ
┃ ❍ .ɢᴏᴏɢʟᴇ
┃ ❍ .ɢᴇᴛᴅᴘ
┃ ❍ .sᴀᴠᴇ
┗━━━━━━━━━━━━┛

*┏━━〔 ⚙️ 𝐎𝐖𝐍𝐄𝐑 〕*
┃ ❍ .ᴀɴᴛɪᴄᴀʟʟ
┃ ❍ .ᴀɴᴛɪᴇᴅɪᴛ
┃ ❍ .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
┃ ❍ .ᴀɴᴛɪʟɪɴᴋ
┃ ❍ .ᴀɴᴛɪɢʀᴏᴜᴘ
┃ ❍ .sᴇᴛᴛɪɴɢs
┃ ❍ .ᴍᴏᴅᴇ
┃ ❍ .ʙᴏᴛɴᴀᴍᴇ
┃ ❍ .ʙᴏᴛɪᴍᴀɢᴇ
┃ ❍ .sᴇᴛᴘʀᴇғɪx
┃ ❍ .ᴀʟʟᴠᴀʀ
┃ ❍ .ʙʀᴏᴀᴅᴄᴀsᴛ
┃ ❍ .ʀᴇsᴛᴀʀᴛ
┃ ❍ .ᴊɪᴅ
┗━━━━━━━━━━━━┛

> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ *DEV SHADOW TECH* ✨

*Join our channel for updates:*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '',
                newsletterName: 'DEV SHADOW MD',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
