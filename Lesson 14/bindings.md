
## Data binding

### One-way data binding
Data flows from class to template.

**String interpolation:** ```{{property}}```

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


**Property binding:**  ```[HTML attribute]="property"``` 

component.ts file
```
export class SomeComponent{
 testId = 'testId';
}
```
component.html file
```
<input type="text" [id]="myId" />
```

Alternative -> *String Interpolation*
```
<input type="text" id="{{myId}}" />
```
But *String Interpolation* can only be used for properties that are string. Some of them are also booleans, so **Property Binding** is a better solution, as seen below:

component.ts file
```
export class SomeComponent{
 isDisabled = true;
}
```
component.html file
```
<input type="text" [disabled]="isDisabled" />
// alternative syntax for property binding
<input type="text" bind-disabled="isDisabled" /> // same thing
```


**Class binding:**

component.ts file
```
export class SomeComponent{
 successClass = "text-sucess"
}
```
component.css file
```
.text-success{
  color: green;
}
```
component.html file
```
<h2 [class]="successClass">Text</h2>
// note if we have HTML class and angular class binding, the latter will overwrite the HTML class
<h2 class="someClass" [class]="successClass">Text</h2>
```


*Conditional binding => apply a single class*

component.ts file
```
export class SomeComponent{
 hasError = true;
}
```
component.css file
```
.text-danger{
  color: green;
}
```
component.html file
```
<h2 [class.text-danger]="dangerClass">Text</h2>
```
We want to conditionally apply and *toggle* .text-danger class if hasError property is true or not.


*Conditional binding => apply multiple classes with **ngClass** directive*

component.ts file
```
export class SomeComponent{
 successClass = "text-success"
 hasError: true;
 isSpecial = true;
 messageClasses = {
   "text-success": !this.hasError,
   "text-danger:" this.hassError,
   "text-special:" this.isSpecial
 }
}
```
component.css file
```
.text-success{
  color: green;
}
.text-danger{
  color: green;
}
.text-special{
  font-weight: bold;
}
```
component.html file
```
<h2 [ngClass]="messageClasses">Text</h2>
```
We apply classes we specified in the *messageClasses* object.


**Style Binding**

component.ts file
```
export class SomeComponent{
 OrangeColor = "orange";
}
```
component.html file
```
<h2 [style.color]="orange">Text</h2>
// alternative, we can use property we named OrangeColor
<h2 [style.color]="OrangeColor">Text</h2>
```
In this instance color keyword is not a class, but a css style property.

*Conditional style*

component.ts file
```
export class SomeComponent{
 AngularIsAwesome = true;
}
```
component.html file
```
<h2 [style.color]="AngularIsAwesome ? red: blue">Text</h2>
```
If AngularIsAwesome property results to true, color will be red, otherwise it will be blue.


*Multiple styles with **ngStyle** directive*

component.ts file
```
export class SomeClass {
  titleStyles = {
    "color": "blue";
    "fontStyle:" "italic" // note that this is Camel Case because it's inside JS
  }
}
```
component.html file
```
<h2 [ngStyle]="titleStyles">Text</h2>
```
We apply classes we specified in the *titleStyles* object.


**Event binding**
User events and keyboard events

*Simple onclick*

component.ts file
```
export class SomeClass {
  funky() {
    console.log('Hello World');
  }
}
```
component.html file
```
<button (click)="funky()">Click ME</button>
```

*Update DOM*

component.ts file
```
export class SomeClass {
  greeting = ''; // we we will change the greeting property
  funky() {
    this.greeting = 'Hello!';
  }
}
```
component.html file
```
<button (click)="funky()">Click ME</button>
{{greeting}} // will print 'Hello' after we click on button
```

*Use events*

component.ts file
```
export class SomeClass {
  funky(event) {
    console.log(event);
  }
}
```
component.html file
```
<button (click)="funky($event)">Click ME</button>
```

*Tempate statement*

component.ts file
```
export class SomeClass {
  greeting = '';
}
```
component.html file
```
<button (click)="greeting = 'Hello!">Click ME</button> // updates greeting property on click
 {{greeting}} // code is executed right in the html element
```


**Template Reference Variables:** ```#variableName```

component.ts file
```
export class SomeClass {
  log(value) {
    console.log('This is a value of input tag', value);
  }
}
```
component.html file
```
<input type="text" #myInput /> // #myInput is now a reference to this input tag
<button (click)="log(myInput.value)">Click ME</button> // myInput.value refers to value of our input tag
// We can also log(myInput) or any other property.
```
Reference variable can be used to refer to an HTML element and all of it's DOM properties.

--------------------------------------------------

### Two-way data binding
Data flows from class to template (HTML component) and from template to the class.
View (HTML) and Model (TypeScript) should always be in sync.

**ngModel:** ```([ngModel])="property" {{property}}```

component.ts file
```
export class SomeClass {
  public greeting = '';
}
```
component.html file
```
<input type="text" [(ngModel)]="greeting" />
{{greeting}} // whatever we type into input will appear as a value of greeting
```
In order for this to work, we **need** to import a *FormsModule* to app.module.ts file and add it to the imports array.

app.module.ts file
```
import { FormsModule } from '@angular/forms';

imports: [FormsModule]
```





