import { useState, useRef, useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "./developerAnimation.json";

export function DevloperAnimation() {
  const [state, setState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { isStopped, isPaused } = state;

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}
