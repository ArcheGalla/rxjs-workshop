const Rx = require("rxjs/Rx");

//TODO: create an observable of 'foo', 'bar' and 'baz' with `Observable.of`

// added Rx.Scheduler.asap to illustrate the scheduler it waits to fire
// const source$ = Rx.Observable.of("foo", "bar", "baz", Rx.Scheduler.asap);

const source$ = Rx.Observable.of("foo", "bar", "baz");

console.log("start");

source$.subscribe(x => console.log(x), err => console.error(err), () => console.info("done"));

console.log("stop");

/**
  NOTE: expected output
  start
  foo
  bar
  baz
  done
  stop
*/

// Notice the output is _synchronous_!!
// synchronous by default
