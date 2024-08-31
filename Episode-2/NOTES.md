# EPISODE - 2 (NOTES)

### Q.1) What is Bundler & Why we need it?
**Answer -**&nbsp; A JavaScript bundler is a tool that helps manage and organize JavaScript code and its dependencies, combining multiple files into a single, efficient bundle that can be easily loaded by the browser.  It does several operation to optimize your code like file minification, file compression, tree shaking, optimize assets and fast loading.
Some of the popular bundlers are - Webpack, Vite, parcel etc.
If you are using this command to generate react boilerplate - `npx create-react-app myApp`. I wanted to tell you that internally it uses webpack as its bundlers to generate production ready build files with minified and optimized code.


### Q.2) What is NPM?
**Answer -**&nbsp; NPM is a tool that helps in managing packages of node applications. It is a platform where several packages in form of repository hosted and distributed as package that you can install through npm  command.


### Q.3) What is package.json and package-lock.json?
**Answer -**&nbsp; package.json file contains all meta data information about your project including package dependencies. NPM will look this package.json file to install dependencies for running you application. 
package-lock.json file is a file contains locked version of all dependencies. It inter locks the dependencies so that you will not face any "Dependency not matched or Dependency conflicts" errors.


### Q.4) Caret (^version) vs Tilde (~version) in package.json file?
**Answer -**&nbsp; <br />
**Tilde (~):** Use it for libraries where stability is crucial. Example: express framework. Only allows patch updates. Useful for getting the latest bug fixes and security patches while maintaining stability. Use it for libraries where stability is crucial. Example: express framework. “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0. <br />
**Caret (^):** Use it for libraries where you want to benefit from new features and bug fixes. Example: Jest, Prettier. Allow both minor and patch updates. Useful for staying up-to-date with new features and improvements, however, we have a risk of potentially breaking changes. Use it for libraries where you want to benefit from new features and bug fixes. Example: Jest, Prettier. “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.


### Q.5) What is node_modules and Transitive dependency?
**Answer -**&nbsp; node_modules is a folder that contains all your project dependencies into it and support your application to run on any platform. It is generated automatically when you install your app dependency using command `npm install`. When you install any dependency it creates node_modules folder inside that you will find that dependency folder. But instead of that you will see there are more dependencies folder that you didn't install. That is because whatever package you install through command it also have some dependency and those dependency also some kind of dependency. That all dependency gets fetched from NPM repository and stored into your node_modules folders. And that is actually known as transitive functional dependency.


### Q.6) What is npm & npx?
**Answer -**&nbsp; `npm` is responsible for managing the package like its dependencies and functionality all that. While `npx` is responsible for executing package Either it is installed or not on your local system, You execute that package manually by running npx command to achieve some kind of functionality.


### Q.7) What PARCEL does?
**Answer -**&nbsp; Parcel does these things :
1. Creates Dev Build
2. Creates Production Build
3. Creates Local Server
4. Provides HMR (Hot Module Replacement) => Auto refresh when we save files in react.
5. HMR is done by parcel by using File Watching Algorithms that is written in C++.
6. Parcel also does caching. It caches files and other things as well, Because of that it will take a less time to render updated UI.
7. Image Optimization
8. Minification
9. Compression
10. Consistent Hashing
11. Code Splitting
12. Differential Bundling 
13. Diagnostic
14. Error Handling
15. Optimization
16. Support for [BrowsersLists](https://browserslist.dev/)
17. Able to host your application on HTTPS as well.
18. Tree Shaking (Remove Dead Code i.e. Unused Code)<br/>

Read more about [Parcel](https://parceljs.org/)


### Q.7) What is Differential Bundling?
**Answer -**&nbsp; Parcel or any bundler library or tool will also done differential bundling. Differential bundling means It generates builds according to different browsers and their versions by just creating or using polyfills. That means in one line - "Differential build are the core things that allow the application to show the consistent behavior on different browsers either it is older one or newer one."


