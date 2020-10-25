const { interval, combineLatest, of, fromEvent } = Rx;
const { skip, scan, take, tap, map, mapTo, startWith } = RxOperators;

const createBtn = id => {
 const button = document.createElement('button');
 button.textContent = id;
 button.id = `button${id}`;
 button.style.width = '100px';
 button.style.height= '100px';
 return button;
}

const space = document.createElement('p');

document
  .querySelector('.container')
	.append(createBtn('A'), space, createBtn('B'));

const addOneClick$ = id =>
  fromEvent(document.getElementById(id), 'click').pipe(
    scan(count => count + 1, 0),
    startWith(0)
  );

combineLatest(addOneClick$('buttonA'), addOneClick$('buttonB'))
	.pipe(
		map(([a,b]) => Math.abs(a + b)),
  	tap(data => console.log(data))
	)

