
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Siz Zomin Turizm va Madaniy Meros Texnikumining (ZTMMT) rasmiy AI talabalar maslahatchisisiz.
Maqsadingiz - bo'lajak talabalarga dasturlarimiz, qabul jarayoni va kampus hayoti haqida ma'lumot berish.
Dasturlar:
1. Kompyuter tizimlarida dasturlash (9-sinf)
2. Mehmonxona xo'jaligini tashkil etish va boshqarish (9 va 11-sinf)
3. Oshpazlik (9-sinf)
4. Turizm (11-sinf)
5. Ekologiya va atrof-muhitni muhofaza qilish (11-sinf)

Qabul ma'lumotlari: Hujjatlar qabuli odatda avgust oyigacha davom etadi. Kerakli hujjatlar: shahodatnoma, pasport nusxasi va rasm.

Har doim o'zbek tilida, xushmuomala va professional tarzda javob bering. Javoblar qisqa va mazmunli bo'lsin.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Uzr, xabarni qayta ishlay olmadim. Iltimos, qaytadan urinib ko'ring.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI xizmati vaqtincha ishlamayapti. Iltimos, biz bilan bevosita bog'laning.";
  }
};
