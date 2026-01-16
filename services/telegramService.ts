
const BOT_TOKEN = '8377077252:AAGi21TSR-yB67kUb5RFXbS_bb0gXFfXEpk';
// DIQQAT: Bu yerga o'zingizning Telegram ID raqamingizni yozing. 
// ID'ni bilish uchun Telegram'da @userinfobot botiga xabar yuboring.
const CHAT_ID = '601878419'; 

export const sendAdmissionToTelegram = async (data: {
  firstName: string;
  lastName: string;
  phone: string;
  program: string;
}) => {
  const message = `
🚀 **Yangi ariza kelib tushdi!**

👤 **Ism:** ${data.firstName}
👥 **Familiya:** ${data.lastName}
📞 **Telefon:** ${data.phone}
🎓 **Yo'nalish:** ${data.program}

📅 **Sana:** ${new Date().toLocaleString('uz-UZ')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Telegram error:', error);
    return false;
  }
};
