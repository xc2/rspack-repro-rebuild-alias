// changes on `aliased.js` doesn't emit rebuilding
console.log(require('@/aliased'))

// changes on `normal.js` emits rebuilding
console.log(require('./normal'))

// changes on next line emits rebuilding
console.log('entry')