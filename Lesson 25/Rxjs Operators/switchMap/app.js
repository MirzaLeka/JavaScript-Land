
// switchMap allows us to switch from one stream (observable) to another
// by unsubscribing from one observable and subscribing to another 

const btn = document.querySelector('button');
const obs1 = Rx.Observable.fromEvent(btn, 'click');
const obs2 = Rx.Observable.interval(1000); // like setInterval in JS

// we switch from one observable to another by canceling the previous one

// we switch from triggering button event to printing a value every second, then
// trigger button again and repeat the print value counter process

obs1.switchMap( event => obs2 )
    .subscribe( value => console.log(value) );

// we click a button and counter starts 0, 1, 2, 3...
// we click a button again and counter restarts 0, 1, 2, 3...
// and so on...
