const BaseStream = require('./base-stream')

class BitmapStream extends BaseStream {
    constructor() {
        super()
        this.numBitmaps = null
        this.bitmapSize = null
        this.currentBitmap = null
    }

    _transform(line, encoding, done) {
        if (this.numBitmaps === null) {
            this.numBitmaps = +line
        } else if (this.bitmapSize === null) {
            this.numBitmaps = --this.numBitmaps
            if (this.numBitmaps === 0) {
                BaseStream.isFinished = true
            }
            this.bitmapSize = parseInt(line.split(' ')[0])
            this.currentBitmap = []
        } else {
            let numbers = line.split(' ').map(n => parseInt(n))
            this.currentBitmap.push(numbers)
            this.bitmapSize--

            if (this.bitmapSize === 0) {
                this.push(this.currentBitmap)
                this.bitmapSize = null
            }
        }
        done()
    }
}

module.exports = BitmapStream
