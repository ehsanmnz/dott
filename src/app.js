const split = require('split')
const BitmapStream = require('./streams/bitmap-stream')
const DistanceStream = require('./streams/distance-streams')
const FormatStream = require('./streams/format-stream')
const CheckFinishStream = require('./streams/check-finish-stream')

const start = () => {
    process.stdin
        .pipe(split())
        .pipe(new BitmapStream())
        .pipe(new DistanceStream())
        .pipe(new FormatStream())
        .pipe(new CheckFinishStream())
        .pipe(process.stdout)
}

module.exports = { start }
