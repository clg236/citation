import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/Builds.loader.js",
  dataUrl: "build/Builds.data",
  frameworkUrl: "build/Builds.framework.js",
  codeUrl: "build/Builds.wasm",
});

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  useEffect(function () {
    unityContext.on("GameOver", function (userName, score) {
      setIsGameOver(true);
      setUserName(userName);
      setScore(score);
    });
  }, []);

  return (
    <div>
      {isGameOver === true && <p>{`Game Over! ${userName} ${score} points`}</p>}
      <Unity unityContext={unityContext} />
    </div>
  );
}

export default App;