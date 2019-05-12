const sinon = require('sinon')
const rewire = require('rewire')
const FormatStream = rewire('../../src/streams/format-stream')

describe('streams/FormatStream', () => {
    let BaseStream
    let formatStream
    let pushStub

    beforeEach(() => {
        pushStub = sinon.stub()
        BaseStream = FormatStream.__get__('BaseStream')
        BaseStream.prototype.push = pushStub
        formatStream = new FormatStream()
    })
    afterEach(() => {
        sinon.restore()
    })
    context('_transform', () => {
        it('should call push with format', () => {
            let doneStub = sinon.stub()
            let output = [[1, 1], [0, 0]]
            formatStream._transform(output, null, doneStub)
            expect(pushStub).to.have.been.calledWith(`\n1 1\n0 0`)
            expect(doneStub).to.have.been.called
        })
    })
})
