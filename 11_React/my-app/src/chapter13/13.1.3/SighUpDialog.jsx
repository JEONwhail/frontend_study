// 버튼을 누르면 백그라운드 색상 블루로 변경
// 변수로 컬러를 선언
// 얼랏이 뜨기전에 색상 변하게

import Dialog from "./Dialog";
import React, { useState } from "react";

function SignUpDialog() {
  const [inputValue, setInputValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Dialog
        title="🎤🎵🎤프로듀스 아이도루🎤🎵🎤"
        message=" 당신은 어떤 🎤🎵아이돌🎵🎤을 좋아하나요? "
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setBackgroundColor("blue");
            setTimeout(() => { 
              alert(`평생 💖${inputValue}💖 부인 님!`);
              setInputValue('');
            }, 1000);
          }}
        >
          데이식스 입덕 츄천
        </button>
      </Dialog>
    </div>
  );
}

export default SignUpDialog;