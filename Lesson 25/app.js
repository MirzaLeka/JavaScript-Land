
var observable = Rx.Observable.interval(1000);

observable.subscribe((data) => console.log(data));
