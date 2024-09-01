import React from "react";

/**
 * @ReactElement
 * JSX (transpiled before it reaches to browser) - PARCEL and BABEL will take care of transpiling process.
 * 
 * Conversion done in this phase: 
 *  JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
 * 
 * Currently What we have write is @ReactElement
 */
const JsxReactElement = (
        <div>
            <div id="child-1">
                <h1 id='heading-1-child' className="blue-color">This is React Element</h1>
            </div>
        </div>
    )


const Title = () => (<h1 className="blue-color">Namaste React JS</h1>)

const JsxExpression = "🚀 This is direct JSX Expression 🚀"


/**
 * @ReactComponent
 * 
 * Currently What we have write is @ReactComponent
 */
const App = () => (
    <div>
        <Title />
        <Title></Title>
        {Title()}
        {JsxExpression}
        {JsxReactElement}
        <div id="child-1">
            <h2 id='heading-1-child' className="red-color">This is a React Functional Component</h2>
        </div>
    </div>
)

export default App