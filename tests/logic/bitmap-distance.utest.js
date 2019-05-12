const BitmapDistance = require('../../src/logic/bitmap-distance')
const expect = require('chai').expect

describe('logic/BitmapDistance', () => {
    it('[[1]]', () => {
        let input = [[1]]
        let expectedOutput = [[0]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
    it('[[0, 1]]', () => {
        let input = [[0, 1]]
        let expectedOutput = [[1, 0]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
    it('[[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]', () => {
        let input = [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
        let expectedOutput = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
    it('[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]', () => {
        let input = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
        let expectedOutput = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
    it('[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]', () => {
        let input = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        let expectedOutput = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
    it('[[0, 0, 0], [0, 1, 0], [0, 0, 0]]', () => {
        let input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
        let expectedOutput = [[2, 1, 2], [1, 0, 1], [2, 1, 2]]
        let bitmapDistance = new BitmapDistance(input)
        let result = bitmapDistance.calculate()
        expect(result).to.be.deep.equal(expectedOutput)
    })
})
