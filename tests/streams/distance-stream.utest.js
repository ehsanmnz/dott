const sinon = require('sinon')
const rewire = require('rewire')
const DistanceStream = rewire('../../src/streams/distance-streams')

describe('streams/DistanceStream', () => {
    let distanceStream
    let calculateStub

    beforeEach(() => {
        class BitmapDistanceStub {}
        calculateStub = sinon.stub()
        BitmapDistanceStub.prototype.calculate = calculateStub
        BitmapDistance = DistanceStream.__set__('BitmapDistance', BitmapDistanceStub)
        distanceStream = new DistanceStream()
    })
    afterEach(() => {
        sinon.restore()
    })
    context('_transform', () => {
        it('should call calculate from BitmapDistance', () => {
            let doneStub = sinon.stub()
            let bitmap = [[1, 1]]
            distanceStream._transform(bitmap, null, doneStub)
            expect(calculateStub).to.have.been.called
            expect(doneStub).to.have.been.called
        })
    })
})
