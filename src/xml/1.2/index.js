
const v2 = (params, uri, methodName) => {

    try {

        let url = ''

        console.log(`v2, ${params}`)

        if (Object.values(params).length > 0) {

            url = Object.entries(params)
                .reduce((item, [key, value]) => {
                    return item += item === '' ? `${key}=${value}` : `&${key}=${value}`
                }, '')

        }

        console.log(`retorno, ${uri}/${methodName}?${url}`)

        return {
            method: 'get',
            url: `${uri}/${methodName}?${url}`
        }

    } catch (error) {
        throw error
    }
        

}

module.exports = v2