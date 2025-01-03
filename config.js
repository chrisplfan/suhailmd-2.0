const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // 
SUHAIL_18_40_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibTlweUlCVGhtMzc0eHJxYXJjbWpaZzVVcFQxbjR0VTRiUE5qQWVGV09SND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3I4S1J0TXhSb1cxN19wbE9GNGw4UVwiLFxuICBcInBob25lSWRcIjogXCI1YjMxNjg4NS0yZWM0LTRmYzItODYwMy1iNmUzZWYxYjdmMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjQ0LFxuICAgICAgNDcsXG4gICAgICAyMDUsXG4gICAgICAzMyxcbiAgICAgIDIsXG4gICAgICAyMjAsXG4gICAgICAxNDIsXG4gICAgICAyNDUsXG4gICAgICAxMSxcbiAgICAgIDIxNSxcbiAgICAgIDM3LFxuICAgICAgMjI3LFxuICAgICAgMjI1LFxuICAgICAgMjE3LFxuICAgICAgMjAwLFxuICAgICAgMTkzLFxuICAgICAgMjUzLFxuICAgICAgMTg4LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI1NCxcbiAgICAgIDE4NixcbiAgICAgIDEwOCxcbiAgICAgIDc4LFxuICAgICAgMTkzLFxuICAgICAgNzAsXG4gICAgICAxMCxcbiAgICAgIDg5LFxuICAgICAgNjQsXG4gICAgICAxMzAsXG4gICAgICAxMTEsXG4gICAgICAzMSxcbiAgICAgIDI1MCxcbiAgICAgIDcsXG4gICAgICA0MixcbiAgICAgIDM4LFxuICAgICAgMjIwLFxuICAgICAgMTg1LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFGRFJHMzNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MjYyMTY4MTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNTAxMzk0MDY2MjUwODoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMjVzMjBRbWQ3Z3V3WVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRHMDVKNCtsZzJDeGhHUnRUcGY5S0prcU9hekw0eXNiOTZSbFVDQk9FMEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0hiYVZ0dzRpbUd0b2xpWVEwb01nWU8wN0ZVdFFBbFVoeXNSNlVRek50dGpXOFc3bHE5WittWTRGSnV1VW1xZGxkRGlrSnpERml3NTloMk5WSnljQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibk00U1RBZnBqZ1lTcDFoNHZuVTZxcTNmODFUNUIzRW90NDdRdnlhdlliL1RPMjZ4dWpIc1ZSMDh6eEZtUDJEZEszWUZ5NFVyNXpDS1dDa0pYVllRanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzI2MjE2ODExOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkyOTYyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ0aVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnRpLmpzb24iOiAie1wia2V5RGF0YVwiOlwib1NDbTNCRnI0YTJuN2NOQXNlRkV0K084LzJmaDF0QjJvbXE2WmZpWGJ1QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjk0MzI1NTcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5Mjk2MDY0MDFcIn0iCn0=

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
