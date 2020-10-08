const { fromEvent, of, interval, concat, timer } = require('rxjs');
const { pluck,
  filter, skip, scan, delay, takeLast, debounceTime, map, tap, mergeMap, take, endWith, startWith, finalize
} = require('rxjs/operators')

const input = document.createElement('input');
document
  .querySelector('.container')
	.appendChild(input);

const isNumber = /^\d+$/;

const observable = fromEvent(input, 'input')
	.pipe(
		pluck('target','value'),
        filter(value => isNumber.test(value)),
        map(value => parseInt(value)),
        map(value => value * 2),
        debounceTime(300)
	);

observable;
