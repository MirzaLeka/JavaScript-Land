const { fromEvent, of, interval, concat, timer } = require('rxjs');
const {
  filter, skip, scan, delay, takeLast, debounceTime, map, tap, mergeMap, take, endWith, startWith, finalize
} = require('rxjs/operators')

const stream1$ = of(1,2,3);
const stream2$ = of(4,5,6);
concat(stream1$, stream2$).pipe(
	startWith(0),
  endWith(100)
).subscribe(console.log);