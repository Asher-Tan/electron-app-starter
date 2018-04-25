export function fuck() {
  return "what the fuck!!"
}

const delay = function (t) {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve(t);
    }, t);
  });
}
export function asyncFuck(t) {
  return delay(t)
}
