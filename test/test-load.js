assert = require ('assert')

describe ('phaserjs generator'),
  it ('can be imported'),
    app = require ('../generators/app')
    assert app != undefined
