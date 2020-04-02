const xmlGenerator = (methodName, body) => {

    const xml =
        `
            <?xml version="1.0" encoding="utf-8"?>
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                    <soap:Body>    
                        <${methodName} xmlns="http://tempuri.org/">                        
                            ${body}
                        </${methodName}>
                    </soap:Body>
                </soap:Envelope>
        `

    return xml

}

const v1 = (params, uri, methodName) => {

    try {

        let xml = ''

        console.log(`v1, ${params}`)

        if (Object.values(params).length > 0) {

            const body = Object.entries(params)
                .reduce((item, [key, value]) => {
                    return item += `<${key}>${value}</${key}>`
                }, '')

            xml = xmlGenerator(methodName, body)

        }

        return {
            method: 'post',
            url: `${uri}`,
                // data: xml,
                // headers: {
                //     'Content-Type': 'text/xml; charset=utf-8',
                //     'Content-Length': xml.length
                // }
        }

    } catch (error) {
        throw error
    }
        

}

module.exports = v1