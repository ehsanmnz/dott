const sinon = require('sinon')
const rewire = require('rewire')
const BitmapStream = rewire('../../src/streams/bitmap-stream')

describe('streams/BitmapStream', () => {
    let bitmapStream
    let BaseStream
    beforeEach(() => {
        BaseStream = BitmapStream.__get__('BaseStream')
        bitmapStream = new BitmapStream()
    })
    afterEach(() => {
        sinon.restore()
    })
    context('_transform', () => {
        it('should set numBitmaps with the first line input', () => {
            let doneStub = sinon.stub()
            let line = 1
            bitmapStream._transform(line, null, doneStub)
            expect(bitmapStream.numBitmaps).to.be.equal(1)
            expect(doneStub).to.have.been.called
        })
        it('should set BaseStream.isFinished to True if numBitmaps equal to 0', () => {
            let doneStub = sinon.stub()
            let line = '1 1'
            bitmapStream.numBitmaps = 1
            bitmapStream.bitmapSize = null
            bitmapStream.currentBitmap = []
            bitmapStream._transform(line, null, doneStub)
            expect(BaseStream.isFinished).to.be.equal(true)
            expect(doneStub).to.have.been.called
        })

        it('should set bitmapSize if numBitmaps already set', () => {
            let doneStub = sinon.stub()
            let line = '3 4'
            bitmapStream.numBitmaps = 1
            bitmapStream._transform(line, null, doneStub)
            expect(bitmapStream.bitmapSize).to.be.equal(3)
            expect(bitmapStream.currentBitmap).to.be.deep.equal([])
            expect(doneStub).to.have.been.called
        })

        it('should set currentBitmap if numBitmaps & bitmapSize already set', () => {
            let doneStub = sinon.stub()
            let line = '1 1 1'
            bitmapStream.numBitmaps = 1
            bitmapStream.bitmapSize = 3
            bitmapStream.currentBitmap = []
            bitmapStream._transform(line, null, doneStub)
            expect(bitmapStream.currentBitmap).to.be.deep.equal([[1, 1, 1]])
            expect(doneStub).to.have.been.called
        })

        it('should set currentBitmap completely with all lines if numBitmaps & bitmapSize already set', () => {
            let doneStub = sinon.stub()
            bitmapStream.numBitmaps = 1
            bitmapStream.bitmapSize = 3
            bitmapStream.currentBitmap = []
            for (let i in [...Array(3)]) {
                let line = '1 1 1'
                bitmapStream._transform(line, null, doneStub)
            }
            expect(bitmapStream.currentBitmap).to.be.deep.equal([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
            expect(doneStub).to.have.been.called
        })
    })
})
