import React, { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowTimer(!showTimer)}>On / Off 토글</button>
      {showTimer && <Timer />}
    </>
  );
}

export default TimerContainer;