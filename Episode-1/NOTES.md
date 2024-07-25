# EPISODE - 1 (NOTES)

### Q.1) What is CDN and its pros and cons?
**Answer -**&nbsp;

### Q.2) What is crossorigin attribute in script tag? WHy we need it?
**Answer -**&nbsp;

### Q.3) Why we need two CDN links to use React?
**Answer -**&nbsp; `react.development.js` is a file that contains core react itself the library and algorithms of teh React. This is core react. while `react-dom.development.js` is a file that contains dom related methods and things that is a bridge of communication between React and DOM. Because Browsers can't understand React directly thats why we need this additional bridge file. 
We can't combine these two together, Because React is usable in many places on web, mobile and desktop. and the React code is common whatever changes is mediator or bridge that's why we can't group these two files together.

### Q.4) What is React Element?
**Answer -**&nbsp; A React Element is nothing just a normal Javascript object. It is not any kind of HTMl TAG or Element. It's an object that is developed by react and now understood by browser itself.


**Note -** *Creating a React Element is a part of REACT JS core library but rendering that React element to web page is the responsibility of REACT DOM. REACT DOM will be responsible to render the React elements on browser side. But before rendering any React element, there is a condition that we need to tell to REACT DOM that is ROOT Element. To render the element on browser REACT DOM needs a root container that contains all react elements inside it as its child's. Then only it will render elements.*


**Note -** *When React Application gets mounted and render the react elements. Whatever you write inside html file root element that is used by react, That's content will be replaced by rendered content. It will not get appended in root, It will be directly replaced.*

