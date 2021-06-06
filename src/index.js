import React, { Component } from "react";
import ReactDOM from "react-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import { AspectRatio } from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const unityContext = new UnityContext({
  loaderUrl: "build/Builds.loader.js",
  dataUrl: "build/Builds.data",
  frameworkUrl: "build/Builds.framework.js",
  codeUrl: "build/Builds.wasm",
})

const Game = () => (
  <AspectRatio ratio="3/4" style={{ maxWidth: '800px' }}>
    <Unity unityContext={unityContext} devicePixelRatio={2} />;
  </AspectRatio>
);

function App() {
  return (
    <React.Fragment>
        <Game />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));