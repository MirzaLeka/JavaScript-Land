
#### Opn-cli module allows us to open localhost in the browser when we start the server.

**Quick note:** *opn* & *opn-cli* are not the same modules.

* First of all we create a simple server as in file server.js

* Second, we create a route and send a response. For this example, I'll wire up my index.html file using core npm module, path.

* Next thing we do is install opn-cli => ``` npm install --save-dev opn-cli ```
opn-cli will work across different operating systems and allow us to run our localhost as soon as we start the server


Once opn-cli is isntalled it's up to us to set it up. Good way to use it is to attach it to the start script in package.json,
``` "start": "opn http://localhost:3000 && node server.js" ```
but for this project that won't work because there is **no start** script and lessons are not connected.

#### Setting up opn-cli for Javascript30 course

What I'll do is create a script called open, which you will be able to run with ``` npm run open ``` command.
Code will be similar like the one up above. 

* We start by adding new script in package.json file. Let's start with a key => "open" 
When server starts Node will be listening on port and nothing afterwards will execute, so that means that we need to write
opn-cli before we run the server. Now let's build that key, value pair.

``` "open" : "opn http://localhost:3000 && node > path to the server < " ```

We are loading localhost on port 3000, as can be seen in server.js (app.listen), but we are also starting a server.
Server file for this directory and *for this case alone* can be found on the path (from the root folder):
Lesson 30/Opn/opn-cli/server.js and that's exactly what we need.


There is one more thing we neeed to consider and that is the path. If we have an  empty space in our path, like in the folder
"Lesson 30", npm won't be able to read the *space* and server will crash before it starts.
So what we need to do is surround our path with another pair of double quotes and throw in two escape characters,
one for each double quote.

*The final script will look like this:*

``` "open": "opn http://localhost:3000 && node \"Lesson 30/Opn/opn-cli/server.js\"" ```
and this will be executed when we type 
``` npm run open ```
in Javascript30 root folder terminal.

Then our browser will load, start a new tab and display our index.html file we connected in server.js file.
