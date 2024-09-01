import App from "./src/App";
import ReactDOM from 'react-dom/client'

// Created a root element
const root = ReactDOM.createRoot(document.getElementById("root"))

// Render function job is basically to take this "h1Object" React Element Object and create h1 tag that browser
// understands and put that tag inside root element and render it on web page.

// /**
//  * Works with @ReactElement  
//  */  
// root.render(App); 

/**
 * Works with @ReactComponent   
 */  
root.render(<App />); 