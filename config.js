const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk84VVNMRjArTlVHczlxWnNnV3lHVHdWK0ZrL3hnL0ZWNUhYcXJJeHJGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1lmdGdTVFBwR3ZEMWIzZGtmZFIrZVFQY3BKeFhIY1lSOGxSRENjT2poQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTTc1SEJaZ3Y2cjAxM2xTYk9HaThBaS9LYlVpaHhLdVNCb013OHByL0VZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYWnhIbUcxMkwySS9pYXErcnpTbWxoSlJobks5VXJMaHRTektPVkZRUHdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKZHA0d2tCc1dNZjlWVXBDMFlNYm5QMTlDVXdRNkJKd0NSRHhjUmZaMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFZdS8ySHZzWEhZMmpNcER4UEM0ZmtUSnZzNGxQcnNvZkwvdzV5cHl1anc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtVK09uRXJZQkRqSGRHUVFudHhFUU41YmNLYXR1KzFPVkU5MU9SU04zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczFjb2Y2d2s5R09adTVZU0xlZWJJcHYrcE1HbzVsR24va3BiTkVDQ3hGZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1OThDa3ErYTdmd2dOYm02WEtzUlZiSGFHbE1iRW54QkYrV0tXREl3c211Vi9GNVFlZEpYS1ZGalBHay9iVTVqbWo4SUpKQ1h2RndnMVpYME5jVkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6Ik9DN2R5eGY3RFliczJlWlFPemhXdm1kbkZyakRoZ2tsbmRzUGxSb09ZSXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJYWU1TWURKOCIsIm1lIjp7ImlkIjoiMjI1MDUwMDU4MTMwOTo1MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZe/8J2XsvCdl6/wnZey8J2XufCdl7nwnZeyIPCdl7rwnZeu8J2YgPCdl77wnZiC8J2XsiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUNzaE5VSEVJbjIwTDRHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUmNwYnZiYkVKdFh0KzBFRkwzSUMvR0RzbFRqWW5ZZUhVK0ZEVk1pc2N6WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT25EM1pyQWhoaHlrU2xncWFBV1VvSVcyS2tZSXdiSDBNRlE5Sk5vMnAzYzZ0eG5DRllwdm8vbmhYc0pRdTBRVzBDSWZoSTZQK3ZVanhENnVMMFZXQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1HTFRIYnVyTndwa1BXZVBTSnN0NXpLUDY2cDNITmtIbHljby9qRG1LajhBdTExQzBSS01YUUZRenJvZVRKY0xPTzdCMzUwZHQzSWoyR1BVRkdzNUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDUwMDU4MTMwOTo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVWEtXNzIyeENiVjdmdEJCUzl5QXZ4ZzdKVTQySjJIaDFQaFExVElySE0yIn19XSwicGxhdGZvcm0iOiJzbWJhIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SUBZERO🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SUBZERO-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SUBZERO-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263719647303",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mr Frank",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ғʀᴀɴᴍ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "",
// add img for alive msg
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
DEV: process.env.DEV || "263719647303",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
