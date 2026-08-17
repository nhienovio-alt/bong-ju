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
const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

// 1. Tạo web server đơn giản để Render kiểm tra (health check)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running!');
});

// Render sẽ tự động cấp cổng qua process.env.PORT, mặc định dùng 3000 nếu chạy local
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

// 2. Mã nguồn khởi chạy Discord Bot của bạn
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Đăng nhập bằng TOKEN lưu trong Environment Variables của Render
client.login(process.env.DISCORD_TOKEN);
