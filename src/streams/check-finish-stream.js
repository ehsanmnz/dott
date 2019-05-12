const BaseStream = require('./base-stream')

class CheckFinishStream extends BaseStream {
    _transform(chunk, encoding, done) {
        if (BaseStream.isFinished) {
            this.push(`${chunk}\n`)
            process.exit(0)
        } else {
            this.push(`${chunk}\n`)
        }
        done()
    }
}

module.exports = CheckFinishStream
