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
  
  // https://out.stegrider.vercel.app/
