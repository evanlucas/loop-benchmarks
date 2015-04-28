var Bench = require('benchmark')
  , suite = new Bench.Suite
  , bench = require('beautify-benchmark')

var data = []
for (var i=0; i<1000; i++) {
  data.push('a')
}

suite.add('for loop', function() {
  for (var i=0; i<data.length; i++) {
    var a = data[i]
  }
})

suite.add('for loop - cache length', function() {
  var len = data.length
  for (var i=0; i<len; i++) {
    var a = data[i]
  }
})

suite.add('forEach', function() {
  data.forEach(function(item) {})
})

suite.on('cycle', function(event) {
  bench.add(event.target)
})

suite.on('complete', function() {
  bench.log()
})

suite.on('start', function() {
  console.log('starting...')
}).run({ async: false })
