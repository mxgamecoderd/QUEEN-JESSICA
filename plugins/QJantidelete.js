const { smd, bot_ } = require("../lib");
let bgmm = false;

//---------------------------------------------------------------------------  
//                ANTI-DELETE COMMAND (TOXIC MODE)  
//---------------------------------------------------------------------------  

smd(
    {
      pattern: "antidelete",
      alias: ["delete"],
      desc: "Turn On/Off auto download deletes",
      fromMe: true,
      category: "user",
      use: "<on/off>",
      filename: __filename,
    },
    async (_0x17cbbb, _0x32fa8b) => {
      try {
        bgmm =
          (await bot_.findOne({
            id: "bot_" + _0x17cbbb.user,
          })) ||
          (await bot_.new({
            id: "bot_" + _0x17cbbb.user,
          }));
        let _0x649c1d = _0x32fa8b.toLowerCase().split(" ")[0].trim();
  
        if (_0x649c1d === "on" || _0x649c1d === "enable" || _0x649c1d === "act") {
          if (bgmm.antidelete === "true") {
            return await _0x17cbbb.reply(`*Are you blind? Anti_Delete is already ON, dumbass! 😒*`);
          }
          await bot_.updateOne(
            {
              id: "bot_" + _0x17cbbb.user,
            },
            {
              antidelete: "true",
            }
          );
          return await _0x17cbbb.reply(`*Tch... Fine. Anti_Delete is ON. Happy now, loser? 😑*`);
        } else if (
          _0x649c1d === "off" ||
          _0x649c1d === "disable" ||
          _0x649c1d === "deact"
        ) {
          if (bgmm.antidelete === "false") {
            return await _0x17cbbb.reply(`*Bro, it's already OFF. You slow or what? 🤡*`);
          }
          await bot_.updateOne(
            {
              id: "bot_" + _0x17cbbb.user,
            },
            {
              antidelete: "false",
            }
          );
          return await _0x17cbbb.reply(`*Fine. Anti_Delete is OFF. Now go cry somewhere else. 💀*`);
        } else {
          return await _0x17cbbb.send(`*🤦 Use ON/OFF, you clueless fool!*`);
        }
      } catch (_0x29fc10) {
        await _0x17cbbb.error(
          `${_0x29fc10}\n\nCommand: antidelete `,
          _0x29fc10,
          `*Bruh, you broke something. Not my problem. 😈*`
        );
      }
    }
  );
  //---------------------------------------------------------------------------
  

let ms = [];
let { stor, isGroup } = require("../lib");

//---------------------------------------------------------------------------  
//              ANTI-DELETE DETECTION (TOXIC MODE)  
//---------------------------------------------------------------------------  

smd(
    {
      on: "delete",
    },
    async (_0x52ff57, _0x12aaf9, { store: _0x33e289 }) => {
      try {
        let _0x2e7880 = await bot_.findOne({
          id: "bot_" + _0x52ff57.user,
        });
  
        if (
          _0x2e7880 &&
          _0x2e7880.antidelete &&
          _0x2e7880.antidelete === "true"
        ) {
          let _0x4a4a8f = _0x52ff57.msg.key.participant
            ? _0x52ff57.msg.key.participant
            : _0x52ff57.msg.key.fromMe
            ? _0x52ff57.user
            : _0x52ff57.msg.key.remoteJid;
  
          let _0x1ea1c0 = await stor();
          if (!_0x1ea1c0.messages[_0x52ff57.from]) {
            _0x1ea1c0.messages[_0x52ff57.from] = {};
          }
  
          ms = [
            ..._0x1ea1c0.messages[_0x52ff57.from],
            ..._0x33e289.messages[_0x52ff57.from].array,
          ];
  
          for (let _0x3597d4 = 0; _0x3597d4 < ms.length; _0x3597d4++) {
            if (ms[_0x3597d4].key.id === _0x52ff57.msg.key.id) {
              let _0x4d822f = await _0x52ff57.bot.fakeMessage(
                "text",
                {
                  id: _0x52ff57.msg.key.id,
                },
                "*[❌ PATHETIC DELETE ATTEMPT DETECTED ❌]*"
              );
  
              let _0x52c1e8 = await _0x52ff57.bot.forwardOrBroadCast(
                /pm/gi.test(DELCHAT) ? _0x52ff57.user : _0x52ff57.from,
                ms[_0x3597d4].message,
                {
                  quoted:
                    ms[_0x3597d4].message && ms[_0x3597d4].message.conversation
                      ? undefined
                      : _0x4d822f,
                }
              );
  
              if (_0x52c1e8) {
                await _0x52ff57.bot.sendMessage(
                  /pm/gi.test(DELCHAT) ? _0x52ff57.user : _0x52ff57.from,
                  {
                    text:
                      `*💀 YOU REALLY THOUGHT YOU COULD DELETE THAT? 💀*  
  🚀 *FAILED ATTEMPT RECORDED!* 🚀  
  
  📌 *TIME:* ` +
                      _0x52ff57.time +
                      `  
  💬 *CHAT:* ` +
                      (await _0x52ff57.bot.getName(_0x52ff57.chat))
                        .split("\n")
                        .join("  ") +
                      `  
  🧌 *DELETED BY:* @` +
                      _0x52ff57.senderNum +
                      `  
  💀 *MESSAGE FROM:* @` +
                      _0x4a4a8f.split("@")[0] +
                      `  
  
  ⚠️ *Nice try, fool. Next time, don’t even bother!* 😈`,
                    mentions: [_0x4a4a8f, _0x52ff57.sender],
                  },
                  {
                    quoted: _0x52c1e8,
                  }
                );
              }
              break;
            }
          }
        }
      } catch (_0x307ba0) {
        console.log(_0x307ba0);
      }
    }
  );
  
  //---------------------------------------------------------------------------
