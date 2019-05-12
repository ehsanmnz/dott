const BaseStream = require('./base-stream')
const BitmapDistance = require('../logic/bitmap-distance')

class DistanceStream extends BaseStream {
    _transform(bitmap, encoding, done) {
        let bitmapDistance = new BitmapDistance(bitmap)
        this.push(bitmapDistance.calculate())
        done()
    }
}

module.exports = DistanceStream
