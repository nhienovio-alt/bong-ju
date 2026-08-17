const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} đã online!`);
  
  joinVoiceChannel({
    channelId: '1538121272700051456',
    guildId: '1537062273569394689',
    adapterCreator: client.guilds.cache.get('1537062273569394689').voiceAdapterCreator,
    selfDeaf: true,
  });
});

client.login('MTUzODczODE4MDIxODQyNTM5OA.Gom0PL.pxqpG0lI1y6JTwPod5pLnxmryK2kLfF4jw9mMU');
// Thêm đoạn này để catch lỗi login
client.login(process.env.DISCORD_TOKEN).catch(error => {
  console.error("Lỗi đăng nhập Discord Bot:", error);
});

// Thêm catch lỗi toàn cục để tránh sập app đột ngột
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});
