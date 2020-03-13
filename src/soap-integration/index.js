
const axios = require('axios')
const v1 = require('../xml/1.1/index')
const v2 = require('../xml/1.2/index')

const versionXml = {
    '1': v1,
    '2': v2
}

const get = async (methodName, uri, params, version) => {

    try {

        const fn = versionXml[version]

        if (fn === undefined) {
            throw new Error('Versão inválida do Xml. ')
        }

        const response = fn(params, uri, methodName)

        const { status, data } = await axios(response)

        console.log(`status: ${status}`)

        return {
            status: status,
            body: data
        }

    } catch(error) {

        console.log(`status: 500`)

        return {
            status: 500,
            body: `Erro ao tentar buscar no end-point, ${uri}`,
            message: JSON.stringify(error.message)
        }

    }

}

const post = (uri, params) => {

}

module.exports.get = get;
module.exports.post = post;