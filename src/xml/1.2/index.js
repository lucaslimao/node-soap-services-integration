
const v2 = (params, uri, methodName) => {

    try {

        const url = Object.entries(params)
            .reduce((item, [key, value]) => {
                return item += item === '' ? `?${key}=${value}` : `&${key}=${value}`
            }, '')

            return {
                method: 'get',
                url: `${uri}/${methodName}${url}`
            }

    } catch (error) {
        throw error
    }
        

}

module.exports = v2