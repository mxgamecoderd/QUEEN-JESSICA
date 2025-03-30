const { smd, sendAnimeReaction } = require("../lib");

smd(
    {
      pattern: "poke",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑷𝒐𝒌𝒆 𝒕𝒐 𝒂𝒏𝒏𝒐𝒚 𝒕𝒉𝒆𝒎... 𝒐𝒓 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕 𝒂 𝒇𝒊𝒈𝒉𝒕! ☠️🔥",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒔𝒕𝒂𝒃𝒃𝒆𝒅 𝒂 𝒇𝒊𝒏𝒈𝒆𝒓 𝒊𝒏𝒕𝒐",
        "𝒑𝒓𝒐𝒗𝒐𝒌𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒖𝒏𝒕𝒊𝒍 𝒕𝒉𝒆𝒚 𝒔𝒏𝒂𝒑𝒑𝒆𝒅! 💀🔥"
      );
    }
  );  
  
// 𝑯𝑼𝑮 🤗💀
smd(
    {
      pattern: "hug",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑮𝒊𝒗𝒆 𝒂 𝒉𝒖𝒈... 𝒐𝒓 𝒂 𝒅𝒆𝒂𝒕𝒉 𝒄𝒍𝒊𝒏𝒈! 🤗💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, cmdName, "𝒔𝒖𝒇𝒇𝒐𝒄𝒂𝒕𝒆𝒅 𝒕𝒉𝒆𝒎 𝒘𝒊𝒕𝒉 𝒂 𝒉𝒖𝒈!", "𝒉𝒖𝒈𝒈𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒕𝒊𝒍𝒍 𝒕𝒉𝒆𝒚 𝒔𝒕𝒐𝒑𝒑𝒆𝒅 𝒃𝒓𝒆𝒂𝒕𝒉𝒊𝒏𝒈. 💀");
    }
  );
  
  // 𝑯𝑶𝑳𝑫 🖐️🔥
  smd(
    {
      pattern: "hold",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑯𝒐𝒍𝒅 𝒔𝒐𝒎𝒆𝒐𝒏𝒆'𝒔 𝒉𝒂𝒏𝒅... 𝒇𝒐𝒓𝒄𝒊𝒃𝒍𝒚. 🖐️🔥",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, "handhold", "𝒈𝒓𝒂𝒃𝒃𝒆𝒅 𝒕𝒉𝒆 𝒉𝒂𝒏𝒅 𝒐𝒇", "𝒈𝒓𝒊𝒑𝒑𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆'𝒔 𝒉𝒂𝒏𝒅 𝒘𝒊𝒕𝒉 𝒊𝒓𝒐𝒏 𝒄𝒍𝒂𝒘𝒔! 🔥");
    }
  );
  
  // 𝑯𝑰𝑭𝑰 🙌💀
  smd(
    {
      pattern: "hifi",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒍𝒂𝒑 𝒂 𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆... 𝒐𝒓 𝒃𝒓𝒆𝒂𝒌 𝒔𝒐𝒎𝒆𝒐𝒏𝒆'𝒔 𝒉𝒂𝒏𝒅! 🙌💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, "highfive", "𝒄𝒓𝒂𝒔𝒉𝒆𝒅 𝒂 𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆 𝒘𝒊𝒕𝒉", "𝒃𝒓𝒐𝒌𝒆 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆'𝒔 𝒑𝒂𝒍𝒎 𝒘𝒊𝒕𝒉 𝒂 𝒃𝒍𝒐𝒐𝒅𝒚 𝒔𝒍𝒂𝒑! 💀🔥");
    }
  );
  
  // 𝑩𝑰𝑻𝑬 😈🩸
  smd(
    {
      pattern: "bite",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑩𝒊𝒕𝒆 𝒍𝒊𝒌𝒆 𝒂 𝒅𝒆𝒎𝒐𝒏! 😈🩸",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, cmdName, "𝒔𝒊𝒏𝒌𝒔 𝒕𝒉𝒆𝒊𝒓 𝒇𝒂𝒏𝒈𝒔 𝒊𝒏𝒕𝒐", "𝒄𝒉𝒆𝒘𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒍𝒊𝒌𝒆 𝒎𝒆𝒂𝒕! 🩸🔥");
    }
  );
  
  // 𝑩𝑳𝑼𝑺𝑯 😳🔥
  smd(
    {
      pattern: "blush",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑪𝒂𝒖𝒔𝒆 𝒂 𝒓𝒆𝒅 𝒔𝒕𝒐𝒓𝒎! 😳🔥",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, cmdName, "𝒕𝒖𝒓𝒏𝒆𝒅 𝒓𝒆𝒅 𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒐𝒇", "𝒎𝒂𝒅𝒆 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒃𝒍𝒖𝒔𝒉 𝒖𝒏𝒄𝒐𝒏𝒕𝒓𝒐𝒍𝒍𝒂𝒃𝒍𝒚! 😳💀");
    }
  );
  
  // 𝑷𝑼𝑵𝑪𝑯 👊🔥
  smd(
    {
      pattern: "punch",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒎𝒂𝒔𝒉 𝒕𝒉𝒆 𝒉𝒆𝒂𝒗𝒆𝒏𝒔! 👊🔥",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(bot, "kick", "𝒔𝒎𝒂𝒔𝒉𝒆𝒅 𝒕𝒉𝒆 𝒇𝒂𝒄𝒆 𝒐𝒇", "𝒕𝒖𝒓𝒏𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒊𝒏𝒕𝒐 𝒂 𝒑𝒊𝒍𝒆 𝒐𝒇 𝒃𝒓𝒐𝒌𝒆𝒏 𝒃𝒐𝒏𝒆𝒔! 💀🔥");
    }
  );
//---------------------------------------------------------------------------
smd(
    {
      pattern: "pat",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒑𝒂𝒕 𝒓𝒆𝒂𝒄𝒕𝒊𝒐𝒏... 𝒐𝒓 𝒈𝒆𝒕 𝒑𝒂𝒕𝒕𝒆𝒅 𝒕𝒊𝒍𝒍 𝒚𝒐𝒖 𝒃𝒓𝒆𝒂𝒌! ☠️🔥",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒔𝒎𝒂𝒔𝒉𝒆𝒅 𝒂 𝒑𝒂𝒕 𝒐𝒏",
        "𝒑𝒂𝒕𝒕𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒕𝒊𝒍𝒍 𝒕𝒉𝒆𝒚 𝒃𝒍𝒆𝒘 𝒖𝒑! 💀🔥"
      );
    }
  );  
//---------------------------------------------------------------------------
// 𝑲𝑰𝑺𝑺 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 😘💀
smd(
    {
      pattern: "kiss",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒌𝒊𝒔𝒔 𝒕𝒉𝒂𝒕 𝒘𝒊𝒍𝒍 𝒆𝒊𝒕𝒉𝒆𝒓 𝒎𝒆𝒍𝒕 𝒔𝒐𝒎𝒆𝒐𝒏𝒆'𝒔 𝒉𝒆𝒂𝒓𝒕 𝒐𝒓 𝒔𝒆𝒏𝒅 𝒕𝒉𝒆𝒎 𝒕𝒐 𝒂 𝒃𝒆𝒕𝒕𝒆𝒓 𝒑𝒍𝒂𝒄𝒆! 😘💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒈𝒂𝒗𝒆 𝒂 𝒍𝒆𝒕𝒉𝒂𝒍 𝒌𝒊𝒔𝒔 𝒕𝒐",
        "𝒃𝒍𝒆𝒔𝒔𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒘𝒊𝒕𝒉 𝒂 𝒅𝒆𝒂𝒕𝒉𝒍𝒚 𝒌𝒊𝒔𝒔! 💀💋"
      );
      await bot.send(`💋 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 💋`);
    }
  );
  
  // 𝑲𝑰𝑳𝑳 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 🔪😈
  smd(
    {
      pattern: "kill",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑴𝒂𝒌𝒆 𝒕𝒉𝒊𝒏𝒈𝒔 𝒈𝒐 𝒅𝒂𝒓𝒌. 😈💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒅𝒆𝒔𝒕𝒓𝒐𝒚𝒆𝒅",
        "𝒘𝒊𝒑𝒆𝒅 𝒐𝒖𝒕 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒄𝒉𝒂𝒕! 💀🔥"
      );
      await bot.send(`🔪 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 🔪`);
    }
  );
  
  // 𝑯𝑨𝑷𝑷𝒀 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 😊🔥
  smd(
    {
      pattern: "happy",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒑𝒓𝒆𝒂𝒅 𝒔𝒐𝒎𝒆 𝒄𝒖𝒓𝒔𝒆𝒅 𝒋𝒐𝒚. 😊💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        "dance",
        "𝑭𝑬𝑬𝑳𝑺 𝒕𝒐𝒐 𝒉𝒂𝒑𝒑𝒚 𝒘𝒊𝒕𝒉",
        "𝑭𝑶𝑹𝑪𝑬𝑫 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒕𝒐 𝒃𝒆 𝒉𝒂𝒑𝒑𝒚, 𝒘𝒉𝒆𝒕𝒉𝒆𝒓 𝒕𝒉𝒆𝒚 𝒍𝒊𝒌𝒆 𝒊𝒕 𝒐𝒓 𝒏𝒐𝒕! 🔥😊"
      );
      await bot.send(`😊 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 😊`);
    }
  );  
//---------------------------------------------------------------------------
// 𝑫𝑨𝑵𝑪𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 🕺💀
smd(
    {
      pattern: "dance",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑭𝒐𝒓𝒄𝒆 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒕𝒐 𝒅𝒂𝒏𝒄𝒆 𝒍𝒊𝒌𝒆 𝒂 𝒇𝒐𝒐𝒍. 🕺💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝑴𝑨𝑫𝑬 𝒕𝒉𝒊𝒔 𝒇𝒐𝒐𝒍 𝒅𝒂𝒏𝒄𝒆 𝒇𝒐𝒓 𝒉𝒊𝒔 𝒍𝒊𝒇𝒆! 💀",
        "𝑭𝒐𝒓𝒄𝒆𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒉𝒆𝒓𝒆 𝒕𝒐 𝒃𝒓𝒆𝒂𝒌𝒅𝒂𝒏𝒄𝒆! 🔥"
      );
      await bot.send(`🎵 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 🎵`);
    }
  );
  
  // 𝒀𝑬𝑬𝑻 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 🚀
  smd(
    {
      pattern: "yeet",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒇𝒍𝒚𝒊𝒏𝒈 𝒂𝒄𝒓𝒐𝒔𝒔 𝒕𝒉𝒆 𝒈𝒂𝒍𝒂𝒙𝒚! 🚀💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒀𝑬𝑬𝑻𝑬𝑫 𝒕𝒉𝒊𝒔 𝒍𝒐𝒔𝒆𝒓 𝒐𝒖𝒕 𝒐𝒇 𝒆𝒙𝒊𝒔𝒕𝒆𝒏𝒄𝒆! 🚀",
        "𝑳𝒂𝒖𝒏𝒄𝒉𝒆𝒅 𝒕𝒉𝒊𝒔 𝒄𝒉𝒂𝒕 𝒔𝒕𝒓𝒂𝒊𝒈𝒉𝒕 𝒊𝒏𝒕𝒐 𝑴𝒂𝒓𝒔! 💀"
      );
      await bot.send(`🚀 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 🚀`);
    }
  );
  
  // 𝑾𝑰𝑵𝑲 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 😉
  smd(
    {
      pattern: "wink",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒘𝒊𝒏𝒌 𝒕𝒉𝒂𝒕'𝒍𝒍 𝒎𝒂𝒌𝒆 𝒂𝒏𝒚𝒐𝒏𝒆 𝒏𝒆𝒓𝒗𝒐𝒖𝒔! 😉💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝑾𝑰𝑵𝑲𝑬𝑫 𝒂𝒏𝒅 𝒄𝒂𝒖𝒔𝒆𝒅 𝒂 𝒉𝒆𝒂𝒓𝒕 𝒂𝒕𝒕𝒂𝒄𝒌! 💀",
        "𝑾𝑰𝑵𝑲𝑬𝑫 𝒂𝒕 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆... 𝒏𝒐𝒘 𝒕𝒉𝒆𝒚'𝒓𝒆 𝒂𝒍𝒍 𝒃𝒍𝒖𝒔𝒉𝒊𝒏𝒈! 😳🔥"
      );
      await bot.send(`😉 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 😉`);
    }
  );  
//---------------------------------------------------------------------------
// 𝑺𝑳𝑨𝑷 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 😈
smd(
    {
      pattern: "slap",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒅𝒊𝒔𝒓𝒆𝒔𝒑𝒆𝒄𝒕𝒇𝒖𝒍 𝒔𝒍𝒂𝒑 😡",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝑺𝑳𝑨𝑷𝑷𝑬𝑫 𝒕𝒉𝒆 𝒔𝒕𝒖𝒑𝒊𝒅𝒊𝒕𝒚 𝒐𝒖𝒕 𝒐𝒇",
        "𝑺𝑳𝑨𝑷𝑷𝑬𝑫 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒃𝒂𝒄𝒌 𝒕𝒐 𝒓𝒆𝒂𝒍𝒊𝒕𝒚! 💀"
      );
      await bot.send(`🔥 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 🔥`);
    }
  );
  
  // 𝑩𝑶𝑵𝑲 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 💀
  smd(
    {
      pattern: "bonk",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑩𝒐𝒏𝒌 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒊𝒏𝒕𝒐 𝒏𝒆𝒙𝒕 𝒘𝒆𝒆𝒌... 🏏",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝑩𝑶𝑵𝑲𝑬𝑫 𝒔𝒆𝒏𝒔𝒆 𝒊𝒏𝒕𝒐",
        "𝑩𝑶𝑵𝑲𝑬𝑫 𝒕𝒉𝒊𝒔 𝒘𝒉𝒐𝒍𝒆 𝒄𝒉𝒂𝒕 𝒇𝒐𝒓 𝒃𝒆𝒊𝒏𝒈 𝒔𝒕𝒖𝒑𝒊𝒅 🤡"
      );
      await bot.send(`💀 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 💀`);
    }
  );
  
  // 𝑩𝑼𝑳𝑳𝒀 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 😈
  smd(
    {
      pattern: "bully",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑩𝒖𝒍𝒍𝒚 𝒕𝒉𝒆 𝒘𝒆𝒂𝒌... 𝒘𝒊𝒕𝒉 𝒔𝒕𝒚𝒍𝒆! 😏",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝑩𝑼𝑳𝑳𝑰𝑬𝑫 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒘𝒆𝒂𝒌 𝒍𝒊𝒕𝒕𝒍𝒆 𝒕𝒉𝒊𝒏𝒈 𝒕𝒉𝒆𝒚 𝒂𝒓𝒆...",
        "𝑩𝑼𝑳𝑳𝑰𝑬𝑫 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒉𝒆𝒓𝒆 𝒋𝒖𝒔𝒕 𝒇𝒐𝒓 𝒆𝒙𝒊𝒔𝒕𝒊𝒏𝒈! 💀"
      );
      await bot.send(`🔥 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 🔥`);
    }
  );  
//---------------------------------------------------------------------------
smd(
    {
      pattern: "cringe",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒄𝒓𝒊𝒏𝒈𝒆 𝒓𝒆𝒂𝒄𝒕𝒊𝒐𝒏... 💀",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒄𝒓𝒊𝒏𝒈𝒆𝒅 𝒂𝒕 😬",
        "𝒄𝒓𝒊𝒏𝒈𝒆𝒅 𝒂𝒕 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆... 𝑮𝒆𝒕 𝒔𝒐𝒎𝒆 𝒔𝒆𝒍𝒇-𝒓𝒆𝒔𝒑𝒆𝒄𝒕! 🤡"
      );
  
      await bot.send(`💀 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 💀`);
    }
  );  
//---------------------------------------------------------------------------
smd(
    {
      pattern: "cuddle",
      category: "reaction",
      use: "<quote|reply|tag>",
      filename: __filename,
      desc: "𝑺𝒆𝒏𝒅 𝒂 𝒇𝒂𝒕𝒂𝒍 𝒂𝒏𝒊𝒎𝒆 𝒄𝒖𝒅𝒅𝒍𝒆... 😈",
    },
    async (bot, text, { cmdName }) => {
      await sendAnimeReaction(
        bot,
        cmdName,
        "𝒄𝒖𝒅𝒅𝒍𝒆𝒅 𝒘𝒊𝒕𝒉 💀",
        "𝒄𝒖𝒅𝒅𝒍𝒆𝒅 𝒘𝒊𝒕𝒉 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆... 𝑳𝒂𝒔𝒕 𝒎𝒊𝒔𝒕𝒂𝒌𝒆? 💀"
      );
  
      await bot.send(`💀 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 💀`);
    }
  );  