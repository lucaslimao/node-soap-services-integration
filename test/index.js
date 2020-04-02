const chai = require('chai')
const expect = require('chai').expect;
const service = require('../src/index')

const params = { }
const method = '',
const uri = ''

describe('soap-integration', () => {

    it('v 1.1', async (done) => {

        const response = await service.get(
            method,
            uri,
            params,
            '1'
        )

        chai.assert.equal(response.status, 200)

        done()

    })

    it('v 1.2', async (done) => {

        const response = await service.get(
            method,
            uri,
            params,
            '2'
        )

        chai.assert.equal(response.status, 200)

        done()

    })

})