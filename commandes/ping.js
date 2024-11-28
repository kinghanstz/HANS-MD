const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');

zokou(
  {
    nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    fromMe: 'true',
  },
  async (dest, zk, commandeOptions) => {
    const { arg, repondre } = commandeOptions;
    const start = new Date().getTime();

    // Define the bot image URL (smaller image version)
    const botImageUrl = 'https://files.catbox.moe/l1i9o4.jpg'; // (Update with a smaller image URL if needed)

    // Measure the end time
    const end = new Date().getTime();
    const ping = end - start;

    // Generate a random reaction value greater than 100
    const randomReactionValue = Math.floor(Math.random() * 900) + 101; // Random number between 101 and 1000

    // Map random value to an emoji
    let emojiReaction;
    if (randomReactionValue < 200) {
      emojiReaction = '😎'; // Cool emoji for low numbers
    } else if (randomReactionValue < 500) {
      emojiReaction = '🔥'; // Fire emoji for mid-range numbers
    } else {
      emojiReaction = '🚀'; // Rocket emoji for high numbers
    }

    // Send response with bot image, ping info, and random emoji reaction
    await zk.sendMessage(dest, {
      caption: `*ʜɪ ✌️ ʜᴀɴs-ᴍᴅ-sᴘᴇᴇᴅ-ɪs*\n\`\`\`${ping}\`\`\` *ms*\n*Random Reaction:* ${emojiReaction} (${randomReactionValue})`,
      image: { url: botImageUrl }, // Attach the bot image
    });
  }
);