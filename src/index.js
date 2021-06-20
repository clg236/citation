import React, { Component } from "react";
import ReactDOM from "react-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import { createGlobalStyle } from 'styled-components'
import { AspectRatio } from 'react-aspect-ratio';
import styled from 'styled-components';
import 'react-aspect-ratio/aspect-ratio.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const GameContainer = styled.div`
  display: flex;
  justify-content:center; // centers in the flex direction and the default flex-direction is row
  align-items:center; // centers perpendicular to the flex direction
  height: 100vh; // 100% view height
  width: 100vw; // 100% view width
  position: absolute; // so it goes behind the current content
  background-color: black;
`

const unityContext = new UnityContext({
  loaderUrl: "build/Builds.loader.js",
  dataUrl: "build/Builds.data",
  frameworkUrl: "build/Builds.framework.js",
  codeUrl: "build/Builds.wasm",
})

const Game = () => (
  <AspectRatio ratio="9/16" style={{ minWidth: '800px' }}>
    <Unity unityContext={unityContext} devicePixelRatio={2} />;
  </AspectRatio>
);

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GameContainer>
        <Game />
      </GameContainer>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));