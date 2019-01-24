
import Unity, { UnityContent } from "react-unity-webgl"; 
import React, { Component } from 'react';

class Rotate extends Component {
    constructor(props) {
        super(props);
    
        // Next up create a new Unity Content object to 
        // initialise and define your WebGL build. The 
        // paths are relative from your index file.
    
        this.unityContent = new UnityContent(
            "rotateWeb/Build/rotateWeb.json",
            "rotateWeb/Build/UnityLoader.js"
        );
        }
    
        render() {
    
        return (
            <div>
                <p className="fuckall">some shit</p>
                <Unity unityContent={this.unityContent} />
            </div>
        )

  }
}

export default Rotate;
