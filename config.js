const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "enter your session id here";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349114936842";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE || "https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg,https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg,https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg"; // do not touch it
global.userImages =
  process.env.USER_IMAGES || "https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg,https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg,https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg,https://i.ibb.co/bMLp1nn0/Whats-App-Image-2025-03-18-at-21-22-45-dcf02c9b.jpg"; // do not touch it
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.4.0",
  caption: process.env.CAPTION || "`Queen Jessica`",
  author: process.env.PACK_AUTHER || "D@¥id",
  packname: process.env.PACK_NAME || "D@¥id",
  botname: process.env.BOT_NAME || "Queen Jessica",
  ownername: process.env.OWNER_NAME || "D@¥id",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Queen Jessica").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "olamilekandamilaraa@gmail.com";
global.location = "ANbuja, Nigeria";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/msgamecoder/vortex-rebirth";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VabAgzO5Ejy5rD9exU2F";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VabAgzO5Ejy5rD9exU2F";
global.devs = "2349114936842";
global.msg_style = process.env.STYLE || "1";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
(global.disablegroup = process.env.DISABLE_GROUPS || "true"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://vrt-7zsv.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
