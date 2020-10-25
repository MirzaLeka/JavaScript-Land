const interval$1 = interval(1000);
const interval$2 = interval(2000);

combineLatest(interval$1, interval$2)
	.pipe(
		map(([a,b]) => Math.abs(a + b))
	)
