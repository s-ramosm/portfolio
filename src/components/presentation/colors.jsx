import React from "react";
import "./presentation.css"

function updateCSSVariables(variables) {
    const root = document.documentElement;

    root.style.setProperty("--primary-color", variables.primary)
    root.style.setProperty("--secondary-color", variables.secondary)
    root.style.setProperty("--background-color", variables.background)
    root.style.setProperty("--text-color", variables.text)
}


const ColorSelector = (props) => {
    const {primary, secondary, background, text} = props.data;
    return (
        <div className="ColorSelector" onClick={() => updateCSSVariables(props.data)} >
          <div style={{backgroundColor : primary ,  color: primary }}>.</div>
          <div style={{backgroundColor : secondary , color: secondary}}>.</div>
          <div style={{backgroundColor : background, color: background}}>.</div>
          <div style={{backgroundColor : text, color: text}}>.</div>
        </ div>
    )
}

export default ColorSelector