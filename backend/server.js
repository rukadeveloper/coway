const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const crypto = require("crypto");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 환경 변수
const API_KEY = process.env.SOLAPI_API_KEY;
const API_SECRET = process.env.HMAC_SECRET;
const FROM_NUMBER = process.env.SOLAPI_FROM_NUMBER;

// HMAC-SHA256 시그니처 생성
function generateSignature(apiSecret, dateTime, salt) {
  const data = dateTime + salt;
  return crypto.createHmac("sha256", apiSecret).update(data).digest("hex");
}

// Authorization 헤더 생성
function createAuthHeader(apiKey, apiSecret) {
  const dateTime = new Date().toISOString();
  const salt = crypto.randomBytes(16).toString("hex");
  const signature = generateSignature(apiSecret, dateTime, salt);

  return {
    header: `HMAC-SHA256 apiKey=${apiKey}, date=${dateTime}, salt=${salt}, signature=${signature}`,
    dateTime,
    salt,
    signature,
  };
}

// SMS 발송 엔드포인트
app.post("/api/send-sms", async (req, res) => {
  const { to, text } = req.body;
  if (!to || !text)
    return res.status(400).json({ success: false, error: "to/text 필수" });

  const urlPath = "/messages/v4/send-many/detail";
  const body = { messages: [{ from: FROM_NUMBER, to, text, type: "LMS" }] };

  const auth = createAuthHeader(API_KEY, API_SECRET);

  console.log("--- SMS 테스트 ---");
  console.log({
    dateTime: auth.dateTime,
    salt: auth.salt,
    body,
    signature: auth.signature,
  });

  try {
    const response = await axios.post(
      `https://api.solapi.com${urlPath}`,
      body,
      {
        headers: {
          Authorization: auth.header,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ 발송 결과:", response.data);
    res.json({ success: true, data: response.data });
  } catch (err) {
    console.error("❌ 발송 실패:", err.response?.data || err.message);
    res
      .status(500)
      .json({ success: false, error: err.response?.data || err.message });
  }
});

// 서버 상태 확인
app.get("/api/health", (_, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// 서버 실행
app.listen(3000, () =>
  console.log("✅ Server running on http://localhost:3000")
);
