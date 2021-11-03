const { of } = Rx;
const { map, tap } = RxOperators;

const ctrl = 123;

let exists = false;

const apiRes = [
  { id: 1, user: 'amir' },
  { id: 2, user: 'miki' },
  { id: 123, user: 'abe' }, 
  { id: 3, user: 'mirzly' }
];

of(apiRes)
	.pipe(
		map(array => array.some(d => d.id === ctrl))
	)  
  .subscribe(data => exists = data)

// if ctrl is also an observable

const { of } = Rx;
const { map, tap, mergeMap } = RxOperators;

const ctrl$ = of(123);

let exists = false;

const apiRes = [
  { id: 1, user: 'amir' },
  { id: 2, user: 'miki' },
  { id: 123, user: 'abe' }, 
  { id: 3, user: 'mirzly' }
];

function elementExists(id) {
  return of(apiRes).pipe(
  	map(arr => arr.some(a => a.id === id))
  )
} 

ctrl$
	.pipe(
  	mergeMap(val => elementExists(val)) // using one observable to return another
	)  
  .subscribe(data => exists = data)
  
  // https://out.stegrider.vercel.app/
