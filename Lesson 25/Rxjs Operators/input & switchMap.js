const { fromEvent, of, interval, concat, timer } = Rx;
const { filter, skip, scan, delay, takeLast,distinctUntilChanged, pluck,
       debounceTime, map, tap, switchMap, take, endWith, startWith, finalize} = RxOperators;


const input = document.createElement('input');
document
  .querySelector('.container')
  .appendChild(input);

// form input value
const observable$ = fromEvent(input, 'input')
	.pipe(
	  pluck('target','value'),
   	  debounceTime(300),
      distinctUntilChanged(),
	  switchMap(searchWord => searchByWord(searchWord)),
      pluck('word'),
      tap(data => console.log('search word: ', data))
	)

// fake API request
function searchByWord(searchWord) {
	const words = [{ id: 1, word: 'blue' }, {id: 2, word: 'red'}];
    return of(...words)
    .pipe(
      filter(item => item.word === searchWord), // if word is not in array filter will stop execution on the pipe
      delay(300)
  	);
}

observable$;
