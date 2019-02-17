Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[7] unifying web application development around a single programming language, rather than different languages for server side and client side scripts.

Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[8]

The Node.js distributed development project, governed by the Node.js Foundation,[9] is facilitated by the Linux Foundation's Collaborative Projects program.[10]

Corporate users of Node.js software include GoDaddy,[11] Groupon,[12] IBM,[13] LinkedIn,[14][15] Microsoft,[16][17] Netflix,[18] PayPal,[19][20] Rakuten, SAP,[21] Voxer,[22] Walmart,[23] and Yahoo!.[24]

Node.js was originally written by Ryan Dahl in 2009,[25] about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web.[26] The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.[27]

Dahl was inspired to create Node.js after seeing a file upload progress bar on Flickr. The browser did not know how much of the file had been uploaded and had to query the Web server. Dahl desired an easier way.[8][28]

Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[29]

Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[30][31][32] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[33]

In January 2010, a package manager was introduced for the Node.js environment called npm.[34] The package manager makes it easier for programmers to publish and share source code of Node.js libraries and is designed to simplify installation, updating, and uninstallation of libraries.[33]

In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[35] The first Node.js build supporting Windows was released in July 2011.

In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[36] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[37]

In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[38][39] Unlike Node.js,[40] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[41]

In February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[42]

In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[43] This brought V8 ES6 features into Node.js, and a long-term support release cycle.[44] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merge.[45]

Overview
Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionality.[30][33][46][47][48] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[33][47][49] Node.js's modules use an API designed to reduce the complexity of writing server applications.[33][47]

Though initially the module system was based on commonjs module pattern, the recent introduction of modules in the ECMAScript specification has shifted the direction of using ECMAScript Modules in Node.js by default instead.[50]

Node.js is officially supported on Linux, macOS, Microsoft Windows, SmartOS, FreeBSD, and IBM AIX.[4] The provided source code may also be built on similar operating systems or be modified by third parties to support others such as NonStop[51] and Unix servers. Alternatively, they can be written with CoffeeScript[52] (a JavaScript alternative), Dart or TypeScript (strongly typed forms of JavaScript), or any other language that can compile to JavaScript.[52][53]

Node.js is primarily used to build network programs such as Web servers.[46] The biggest difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands finish), while Node.js functions are non-blocking (commands execute concurrently or even in parallel,[54][55] and use callbacks to signal completion or failure).[46]

Platform architecture
Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[33] Developers can create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[33] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[33]

Node.js was built on the Google V8 JavaScript engine since it was open-sourced under the BSD license. It is proficient with internet fundamentals such as HTTP, DNS, TCP.[30] Also, JavaScript was a well-known language, making Node.js accessible to the web development community.[30]

Industry support
There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. The Node.js developer community has two main mailing lists and the IRC channel #node.js on freenode. There are multiple developer conferences and events that support the Node.js community including NodeConf, Node Interactive and Node Summit as well as a number of regional events.

The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Feathers.js, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[33][56] Various packages have also been created for interfacing with other languages or runtime environments such as Microsoft .NET.[57]

Modern desktop IDEs provide editing and debugging features specifically for Node.js applications. Such IDEs include Atom, Brackets, JetBrains WebStorm,[58][59] Microsoft Visual Studio (with Node.js Tools for Visual Studio,[60] or TypeScript with Node definitions,[61][62][63][64]) NetBeans,[65] Nodeclipse Enide Studio [66] (Eclipse-based), and Visual Studio Code.[67][68] Certain online web-based IDEs also support Node.js, such as Codeanywhere, Codenvy, Cloud9 IDE, Koding, and the visual flow editor in Node-RED.
