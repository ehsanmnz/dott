const sinon = require('sinon')
const rewire = require('rewire')
const CheckFinishStream = rewire('../../src/streams/check-finish-stream')

describe('streams/CheckFinishStream', () => {
    let BaseStream
    let checkFinishStream
    let pushStub

    beforeEach(() => {
        pushStub = sinon.stub()
        BaseStream = CheckFinishStream.__get__('BaseStream')
        BaseStream.prototype.push = pushStub
        checkFinishStream = new CheckFinishStream()
    })
    afterEach(() => {
        sinon.restore()
    })
    context('_transform', () => {
        it('should call push and done if BaseStream.isFinished is false', () => {
            BaseStream.isFinished = false
            let doneStub = sinon.stub()
            let chunk = 'fake_chunk'
            checkFinishStream._transform(chunk, null, doneStub)
            expect(pushStub).to.have.been.calledWith(`${chunk}\n`)
            expect(doneStub).to.have.been.called
        })

        it('should call push and exit if BaseStream.isFinished is true', () => {
            BaseStream.isFinished = true
            let exitProcessStub = sinon.stub()
            process.exit = exitProcessStub
            let doneStub = sinon.stub()
            let chunk = 'fake_chunk'
            checkFinishStream._transform(chunk, null, doneStub)
            expect(pushStub).to.have.been.calledWith(`${chunk}\n`)
            expect(exitProcessStub).to.have.been.calledWith(0)
        })
    })
})
