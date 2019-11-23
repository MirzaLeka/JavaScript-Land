
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const span = document.querySelector('span');

// merge map combines actions from two different sources into one

const obs1 = Rx.Observable.fromEvent(input1, 'input'); // element, event
const obs2 = Rx.Observable.fromEvent(input2, 'input'); // event types: input, blur, click, change...

// first observable emits a value, but nothing happens
// then 2nd does and we two of them get combined

obs1.mergeMap(
    event1 => {
        return obs2.map(
            event2 => {
                return event1.target.value + ' ' + event2.target.value
            }
        )
    }
)
.subscribe(combinedValue => span.textContent = combinedValue )

// we enter first value
// then second
// output: first + second