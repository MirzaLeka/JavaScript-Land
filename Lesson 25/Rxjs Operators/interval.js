const { fromEvent, of, interval, concat, timer } = require('rxjs');
const {
  filter, skip, scan, delay, takeLast, debounceTime, map, tap, mergeMap, take, endWith, startWith, finalize
} = require('rxjs/operators')

const interval$ = interval(1000)
    .pipe(
    skip(1),
    scan((a,b) => a+b),
    tap(val => console.log(val)),
    filter(val => val % 2 !== 0),
      take(5)
  )

interval$;
