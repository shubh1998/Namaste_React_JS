
// Created React Element
// This "h1Object" tag contains a property name "type" which indicates "tagName" and "props" in which a "one" 
// object gets created with additional properties that are - attributes, and children.
const h1Object = React.createElement(
    "h1",  // tag name or element name
    {
        id: 'heading-1-child',
        className: 'blue-color'
    }, // element attributes
    "Hello React JS World!" // element children or content
);

const h2Object = React.createElement(
    "h2", 
    {
        id: 'heading-2-child',
        className: 'red-color'
    },
    "We are learning from Namaste React."
);

const divParentObject = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement('div', { id: 'child-1' }, [h1Object, h2Object]),
        React.createElement('div', { id: 'child-2' }, [h1Object, h2Object]),
    ]
)


// Created a root element
const root = ReactDOM.createRoot(document.getElementById("root"))


// Render function job is basically to take this "h1Object" React Element Object and create h1 tag that browser
// understands and put that tag inside root element and render it on web page.
root.render(divParentObject); 