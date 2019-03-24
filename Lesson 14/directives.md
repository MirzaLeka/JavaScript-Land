
## Directives
Directive is a custom HTML attribute that angular provides.

### Data Binding directives:
* ngStyle
* ngClass
* ngModel


### Data structure directives:
* ngFor
* ngIf
* ngSwitch


**ngSwitch**
ngSwitch is one of two conditional directives.

component.ts. file
```
export class SomeClass{
  colorProperty: "blue";
}
```
component.html file
```
<div [ngSwitch]="colorProperty"> // we'll render just one of the following divs, based on this condition
  <div *ngSwitchCase="'red'">You picked red color</div> // note that we have both double and single quotes
  <div *ngSwitchCase="'blue'">You picked blue color</div>
  <div *ngSwitchCase="'green'">You picked green color</div>
  <div *ngSwitchDefault>Pick again</div>
</div>
```


### Other directives:
* ngForm
* ngSubmit
* ngcontent
* ngtemplate
