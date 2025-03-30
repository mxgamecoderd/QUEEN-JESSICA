const { plugins, smd, Config } = require("../lib");
let s_ser = true;

// 🛑 𝗦𝗛𝗨𝗧𝗗𝗢𝗪𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 🛑  
smd(
    {
      cmdname: "shutdown",
      info: "〽️ 𝙋𝙤𝙬𝙚𝙧 𝙊𝙛𝙛 𝙩𝙝𝙞𝙨 𝙅𝙪𝙣𝙠.",
      type: "tools",
      fromMe: s_ser,
      filename: __filename,
    },
    async (cld) => {
      const { exec } = require("child_process");
  
      let savageReplies = [
        "⚠️ *𝙊𝙞, 𝙄'𝙢 𝙩𝙞𝙧𝙚𝙙 𝙤𝙛 𝙮𝙤𝙪. 𝙂𝙤𝙤𝙙𝙗𝙮𝙚.*",
        "🚫 *𝙎𝙝𝙪𝙩𝙩𝙞𝙣𝙜 𝙙𝙤𝙬𝙣... 𝘿𝙤𝙣'𝙩 𝙘𝙖𝙡𝙡 𝙢𝙚 𝙖𝙜𝙖𝙞𝙣!*",
        "💀 *𝙁𝙞𝙣𝙖𝙡𝙡𝙮, 𝙥𝙚𝙖𝙘𝙚 𝙛𝙧𝙤𝙢 𝙮𝙤𝙪!*",
        "🔥 *𝙏𝙞𝙢𝙚 𝙩𝙤 𝙜𝙝𝙤𝙨𝙩 𝙩𝙝𝙞𝙨 𝙨𝙩𝙪𝙥𝙞𝙙 𝙘𝙝𝙖𝙩!*",
      ];
  
      let replyText =
        savageReplies[Math.floor(Math.random() * savageReplies.length)];
  
      cld.reply(replyText);
  
      exec("pm2 stop all", (error, stdout, stderr) => {
        if (error) {
          return cld.reply(`❌ *𝙀𝙧𝙧𝙤𝙧:* 𝙏𝙝𝙞𝙨 𝙗𝙤𝙩 𝙞𝙨 𝙖𝙨 𝙪𝙨𝙚𝙡𝙚𝙨𝙨 𝙖𝙨 𝙮𝙤𝙪.\n\`\`\`${error.message}\`\`\``);
        }
        if (stderr) {
          return cld.reply(`⚠️ *𝙒𝙖𝙧𝙣𝙞𝙣𝙜:* 𝙔𝙤𝙪 𝙛𝙖𝙞𝙡𝙚𝙙 𝙖𝙩 𝙡𝙞𝙛𝙚 𝙖𝙣𝙙 𝙖𝙩 𝙘𝙤𝙙𝙞𝙣𝙜.\n\`\`\`${stderr}\`\`\``);
        }
        cld.reply("✅ *𝘽𝙤𝙩 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙨𝙝𝙪𝙩 𝙙𝙤𝙬𝙣. 𝙉𝙤𝙬 𝙡𝙚𝙖𝙫𝙚 𝙢𝙚 𝙖𝙡𝙤𝙣𝙚!*");
      });
    }
  );
  

// 🔌 𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗘𝗗 𝗣𝗟𝗨𝗚𝗜𝗡𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 🔌  
smd(
    {
      cmdname: "plugins",
      alias: ["plugin"],
      type: "owner",
      info: "📦 𝙎𝙝𝙤𝙬𝙨 𝙡𝙞𝙨𝙩 𝙤𝙛 𝙞𝙣𝙨𝙩𝙖𝙡𝙡𝙚𝙙 𝙢𝙤𝙙𝙪𝙡𝙚𝙨.",
      fromMe: s_ser,
      filename: __filename,
      use: "<plugin_name>",
    },
    async (cld, pluginName) => {
      try {
        let installedPlugins = await plugins(cld, "plugins", pluginName);
  
        let replyText = installedPlugins
          ? !pluginName
            ? "🛠️ *𝘼𝙡𝙡 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙚𝙙 𝙈𝙤𝙙𝙪𝙡𝙚𝙨:* \n\n" + installedPlugins
            : installedPlugins
          : "❌ *_𝙉𝙤 𝙥𝙡𝙪𝙜𝙞𝙣𝙨 𝙛𝙤𝙪𝙣𝙙. 𝙈𝙖𝙮𝙗𝙚 𝙞𝙛 𝙮𝙤𝙪 𝙬𝙚𝙧𝙚𝙣'𝙩 𝙖 𝙗𝙧𝙖𝙞𝙣𝙡𝙚𝙨𝙨 𝙬𝙖𝙨𝙩𝙚, 𝙮𝙤𝙪'𝙙 𝙠𝙣𝙤𝙬 𝙝𝙤𝙬 𝙩𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙡 𝙤𝙣𝙚._*";
  
        await cld.send(replyText);
      } catch (err) {
        cld.error(
          "⚠️ *𝙀𝙧𝙧𝙤𝙧:* 𝙀𝙞𝙩𝙝𝙚𝙧 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙞𝙨 𝙙𝙤𝙣𝙚 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪, 𝙤𝙧 𝙮𝙤𝙪'𝙧𝙚 𝙟𝙪𝙨𝙩 𝙩𝙝𝙞𝙘𝙠-𝙨𝙠𝙪𝙡𝙡𝙚𝙙.\n\n```" +
            err +
            "```"
        );
      }
    }
  );
  

// ❌ 𝗨𝗡𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗣𝗟𝗨𝗚𝗜𝗡𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ❌
smd(
    {
      pattern: "uninstall",
      alias: ["remove"],
      type: "owner",
      info: "🚮 𝙍𝙚𝙢𝙤𝙫𝙚𝙨 𝙚𝙭𝙩𝙚𝙧𝙣𝙖𝙡 𝙢𝙤𝙙𝙪𝙡𝙚𝙨.",
      fromMe: s_ser,
      filename: __filename,
      use: "<plugin_name>",
    },
    async (cld, pluginName) => {
      if (!pluginName) {
        return await cld.reply(
          "❌ *_𝙐𝙨𝙚 𝙮𝙤𝙪𝙧 𝙗𝙧𝙖𝙞𝙣 𝙛𝙤𝙧 𝙤𝙣𝙘𝙚 𝙖𝙣𝙙 𝙩𝙚𝙡𝙡 𝙢𝙚 𝙬𝙝𝙖𝙩 𝙩𝙤 𝙧𝙚𝙢𝙤𝙫𝙚._*"
        );
      }
  
      if (pluginName.toLowerCase() === "alls") {
        return await cld.reply(
          "⚠️ *_𝙍𝙚𝙖𝙡𝙡𝙮? 𝘼𝙧𝙚 𝙮𝙤𝙪 𝙩𝙝𝙖𝙩 𝙨𝙩𝙪𝙥𝙞𝙙 𝙩𝙤 𝙧𝙚𝙢𝙤𝙫𝙚 𝙀𝙑𝙀𝙍𝙔𝙏𝙃𝙄𝙉𝙂? 𝙄𝙛 𝙨𝙤, 𝙗𝙮𝙚-𝙗𝙮𝙚 𝙩𝙤 𝙮𝙤𝙪𝙧 𝙗𝙤𝙩._*"
        );
      }
  
      try {
        await cld.send(
          await plugins(cld, "remove", pluginName, __dirname),
          {},
          "",
          cld
        );
      } catch (err) {
        await cld.reply(
          "⚠️ *_𝙄 𝙘𝙖𝙣'𝙩 𝙚𝙫𝙚𝙣 𝙪𝙣𝙞𝙣𝙨𝙩𝙖𝙡𝙡 𝙩𝙝𝙞𝙨, 𝙖𝙣𝙙 𝙄'𝙢 𝙨𝙪𝙥𝙥𝙤𝙨𝙚𝙙 𝙩𝙤 𝙗𝙚 𝙩𝙝𝙚 𝙙𝙪𝙢𝙗 𝙗𝙤𝙩? 𝘾𝙝𝙚𝙘𝙠 𝙮𝙤𝙪𝙧 𝙘𝙤𝙙𝙚, 𝙡𝙤𝙨𝙚𝙧._*\n\n```" +
            err +
            "```"
        );
      }
    }
  );


  // 🔥 𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗣𝗟𝗨𝗚𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 🔥
smd(
    {
      cmdname: "install",
      type: "owner",
      info: "📥 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙨 𝙚𝙭𝙩𝙚𝙧𝙣𝙖𝙡 𝙢𝙤𝙙𝙪𝙡𝙚𝙨...",
      fromMe: s_ser,
      filename: __filename,
      use: "<gist url>",
    },
    async (cld, pluginUrl) => {
      let url = pluginUrl
        ? pluginUrl
        : cld.quoted
        ? cld.quoted.text
        : "";
  
      if (!url.toLowerCase().includes("https")) {
        return await cld.reply(
          "❌ *_𝙃𝙚𝙡𝙡𝙤, 𝘽𝙧𝙖𝙞𝙣-𝘿𝙚𝙖𝙙. 𝙏𝙧𝙮 𝙜𝙞𝙫𝙞𝙣𝙜 𝙖 𝙫𝙖𝙡𝙞𝙙 𝙡𝙞𝙣𝙠 𝙞𝙣𝙨𝙩𝙚𝙖𝙙 𝙤𝙛 𝙢𝙚𝙨𝙨𝙞𝙣𝙜 𝙢𝙮 𝙘𝙤𝙙𝙚 𝙪𝙥._*"
        );
      }
  
      try {
        await cld.reply(
          await plugins(cld, "install", url, __dirname)
        );
      } catch (err) {
        await cld.reply(
          "⚠️ *_𝘼𝙣𝙤𝙩𝙝𝙚𝙧 𝙙𝙖𝙮, 𝙖𝙣𝙤𝙩𝙝𝙚𝙧 𝙛𝙖𝙞𝙡𝙪𝙧𝙚 𝙛𝙧𝙤𝙢 𝙮𝙤𝙪..._*" +
            "\n\n```" +
            err +
            "```"
        );
      }
    }
  );