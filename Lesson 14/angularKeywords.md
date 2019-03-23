
### Keywords

**One-way data binding**


*String interpolation*

component.ts file
```
export class SomeComponent{
  title = 'Hello World!'
}
```
component.html file
```
<h1>{{title}}</h1> // output: Hello World!
```

*Property binding*


*Event binding*


**Two-way data binding**

*ngModel*


### ng generate

Generates and/or modifies files based on a schematic. Syntax: ```ng <option> <customTitle>```.

List of options we can generate:
* appShell
* application
* class
* component => ng g c "title"
* directive
* enum
* guard
* interface
* library
* module
* pipe
* service => ng g s "title"
* serviceWorker
* universal
