import React, { useState } from "react";
import QRCode from "react-qr-code";
const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <h1>QrCodeGenerator</h1>
      <div style={{ padding: "20px" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Your Value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
    </div>
  );
};

export default QrCodeGenerator;
