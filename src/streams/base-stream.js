const Transform = require('stream').Transform

class BaseStream extends Transform {
    constructor() {
        super({ objectMode: true })
        BaseStream.isFinished = false
    }
}

module.exports = BaseStream
