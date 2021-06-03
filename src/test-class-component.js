import React, { Component, Fragment } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import "./App.css";

export class TestClassComponent extends Component {
  constructor() {
    super();
    this.speed = 30;
    this.state = {
      progression: 0,
      isLoaded: false,
      degrees: 0,
      message: "-",
      showUnity: true,
      clickedPositionX: 0,
      clickedPositionY: 0,
    };
    this.unityContext = new UnityContext({
      codeUrl: "/build/Builds.wasm",
      frameworkUrl: "/build/Builds.framework.js",
      dataUrl: "/build/Builds.data",
      loaderUrl: "/build/Builds.loader.js",
    });
    this.unityContext.on("RotationDidUpdate", (degrees) => {
      this.setState({ degrees: Math.round(degrees) });
    });
    this.unityContext.on("Sayx", (message) => {
      this.setState({ message });
    });
    this.unityContext.on("ClickedPosition", (x, y) => {
      this.setState({ clickedPositionX: x, clickedPositionY: y });
    });
    this.unityContext.on("progress", (progression) => {
      this.setState({ progression });
    });
    this.unityContext.on("loaded", () => {
      this.setState({ isLoaded: true });
    });
    this.unityContext.on("error", (message) => {
      console.log("AN ERROR OCCURED", message);
    });
    this.unityContext.on("debug", (message) => {
      console.log("GOT A LOG", message);
    });
  }
  render() {
    return (
      <Fragment>
        <p>Loading: {this.state.progression * 100}%...</p>
        <div className="gameWrapper">
          {this.state.showUnity === true ? (
            <div className="game">
              <Unity
                style={{
                  width: "70vw",
                  height: "100vh",
                  border: "2px solid black",
                  background: "grey",
                  visibility: this.state.isLoaded ? "visible" : "hidden",
                }}
                unityContext={this.unityContext}
                devicePixelRatio={2}
              />
            </div>
          ) : (
            <div />
          )}
        </div>
      </Fragment>
    );
  }
}
