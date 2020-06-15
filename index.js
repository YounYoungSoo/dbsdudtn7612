const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzIxOTg1MzU4NTkzNzg1OTA2.XuclIg.RFPVfTopim_sEhY1HUKhJkOvthA';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '!월') {
    message.reply('중국어   과학(김태임)   사회   영어   역사   기술   체육');
  }
});

client.on('message', (message) => {
    if(message.content === '!화') {
      message.reply('가정   수학   국어(박숙)   과학(김태임)   체육   중국어   영어');
    }
});

client.on('message', (message) => {
  if(message.content === '!수') {
    message.reply('수학   영어   과학(손형래)   음악   국어(박숙)   사회');
  }
});

client.on('message', (message) => {
    if(message.content === '!목') {
      message.reply('가정   과학(손형래)   수학   역사   미술   체육');
    }
});

client.on('message', (message) => {
    if(message.content === '!금') {
      message.reply('수학   국어(이은영)   영어   국어(박숙)   스포츠   창체   창체');
    }
});

client.on('message', (message) => {
    if(message.content === '제일중 주식 정보') {
      message.reply('야이 미친새끼야! 나 주식봇 아니야');
    }
});

client.on('message', (message) => {
    if(message.content === '!공지') {
      message.reply('----공지---- 제일중 시간표 봇이 6월 15일 오후 9:00부터 6월 16일 오후 4:00까지 오프라인으로 전환될 예정입니다. 오프라인으로 전환된 봇은 디스코드 서버에서 이용할 수 없으며 추후 업데이트로 신속하고 편리하게 발전되어 오겠습니다. 감사합니다.');
    }
});
client.login(token);