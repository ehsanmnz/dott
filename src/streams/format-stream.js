const BaseStream = require('./base-stream')

class FormatStream extends BaseStream {
    _transform(output, encoding, done) {
        let formatted = `\n${output.map(el => el.join(' ')).join('\n')}`
        this.push(formatted)
        done()
    }
}

module.exports = FormatStream
