const { smd, sleep } = require('../lib');

smd(
  {
    cmdname: "hack",
    type: "fun",
    info: "𝑯𝒂𝒄𝒌𝒊𝒏𝒈 𝒑𝒓𝒂𝒏𝒌 𝒘𝒊𝒕𝒉 𝒔𝒂𝒗𝒂𝒈𝒆 𝒕𝒐𝒖𝒄𝒉 😈",
    filename: __filename,
  },
  async (citel) => {
    const messages = [
      "💀 *𝑰𝒏𝒋𝒆𝒄𝒕𝒊𝒏𝒈 𝑴𝒂𝒍𝒘𝒂𝒓𝒆...*",
      "🔴 10% - *𝑩𝒓𝒖𝒕𝒆 𝑭𝒐𝒓𝒄𝒊𝒏𝒈 𝑫𝒆𝒗𝒊𝒄𝒆 𝑳𝒐𝒈𝒊𝒏...*",
      "🟠 30% - *𝑺𝒏𝒊𝒇𝒇𝒊𝒏𝒈 𝑫𝒂𝒕𝒂...*",
      "🟡 50% - *𝑫𝒆𝒗𝒊𝒄𝒆 𝑪𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅, 𝒆𝒙𝒕𝒓𝒂𝒄𝒕𝒊𝒏𝒈 𝒇𝒊𝒍𝒆𝒔...*",
      "🟢 70% - *𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝑫𝒂𝒕𝒂 𝒕𝒐 𝑺𝒆𝒄𝒓𝒆𝒕 𝑺𝒆𝒓𝒗𝒆𝒓...*",
      "🔵 90% - *𝑻𝒓𝒂𝒄𝒌𝒊𝒏𝒈 𝑳𝒐𝒄𝒂𝒕𝒊𝒐𝒏...*",
      "🟣 100% - *𝑯𝒂𝒄𝒌 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒆𝒅, 𝑫𝒆𝒍𝒆𝒕𝒊𝒏𝒈 𝑬𝒗𝒊𝒅𝒆𝒏𝒄𝒆...*",
      "💾 *𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝑳𝒐𝒈 𝑭𝒊𝒍𝒆𝒔...*",
      "🔒 *𝑫𝒂𝒕𝒂 𝑺𝒕𝒐𝒍𝒆𝒏, 𝑺𝒚𝒔𝒕𝒆𝒎 𝑶𝒘𝒏𝒆𝒅!*",
      "💀 *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 QUEEN JESSICA!* 💀",
    ];

    let editedMessage;
    for (const message of messages) {
      editedMessage = await citel.send(editedMessage || message);
      await sleep(1000);
      editedMessage = await citel.edit(editedMessage, message);
    }
  }
);