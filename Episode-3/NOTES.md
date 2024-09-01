# EPISODE - 3 (NOTES)

### Q.1) What is Transpiler & Why we need Babel?
**Answer -**&nbsp; A transpiler is a software tool that converts source code into another source code. 
Babel is a popular JavaScript transpiler that helps developers write modern JavaScript code that can be used in older browsers and environments. Babel converts ES6+ code into a backward compatible version that can be run by older JavaScript engines. Babel can convert JSX syntax into JavaScript that can be understood by everyone. Babel can use third-party polyfills to add features that are missing in the target environment. Babel can help developers use the latest language features while making their code more efficient and readable. 


### Q.2) What is Babel?
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.


### Q.3) What is JSX?
**Answer -**&nbsp; JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like structures within your JavaScript code. JSX is primarily used with the React library to describe the structure of user interfaces. JSX looks like HTML, but it's actually a special syntax that gets transpiled into regular JavaScript function calls. JSX makes it easier to write and visualize the structure of your React components, as it closely resembles the HTML that will eventually be rendered in the browser. JSX code cannot be directly understood by browsers, so it needs to be transformed into standard JavaScript using tools like Babel.
JSX also do sanitization in expressions so that the application get prevention from attacks like Cross Site Script injection (XSS attack).


### Q.3) What is XSS (Cross-site scripting)?
**Answer -**&nbsp; Cross-site scripting (XSS) is a security vulnerability that allows attackers to inject malicious code into a website or web application. The code executes when a user loads the website, and can be used to steal a user's identity, access their data, or take control of their machine. 


### Q.5) What is React Component?
**Answer -**&nbsp; In React, a component is a reusable piece of code that represents a part of a user interface. Think of it like a building block for your web application. Components can be as small as a button or as large as an entire page. <br/>
*Types of React Components:*
1. Function Components: The simpler and more modern way to write components. They are just JavaScript functions that return JSX (a syntax extension that looks like HTML).
2. Class Components: The older way of writing components, still used in some legacy applications. They are JavaScript classes that extend React.Component.<br />


### Q.6) What is Component Component?
**Answer -**&nbsp; Component composition in React is a powerful design concept that involves building complex user interfaces by piecing together smaller, reusable components. In simple words, Component composition meaning grouping together reusable components according to need and return a single jsx react element, That is known as Component composition. For example : <br/>
```
const Demo = () => (
    <div>
        <Title>
        <Article>
        <Footer>
    </div>
)
```