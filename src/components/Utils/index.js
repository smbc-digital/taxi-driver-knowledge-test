import 'isomorphic-fetch'
import Timeout from 'await-timeout'
import sanitizeHtml from 'sanitize-html'

async function submitForm(context) {
    const convertedContext = {}
    const timeout = new Timeout()
    
    Object.keys(context).map(key => {
        if (context[key] !== undefined && context[key].value !== undefined) {
            if(typeof context[key].value === 'object'){
                convertedContext[key] = context[key].value
            } else {
                convertedContext[key] = sanitizeHtml(context[key].value, {
                    allowedTags: [],
                    allowedAttributes: {}
                  })
            }
        }
    })

    var doneConvertedContext = JSON.stringify(convertedContext)
    try {
        const result = await Promise.race([
            await fetch('/book-taxi-driver-knowledge-test/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: doneConvertedContext
            }),
            timeout.set(10000, 'Timeout!')
        ])

        const responseObject = await result.text()
        const jsonResponse = JSON.parse(responseObject)
        const paymentUrl = jsonResponse.url
        const caseId = jsonResponse.caseID

        return {
            status: result.status,
            url: paymentUrl,
            caseId: caseId
        }
    }
    catch (error) {
        return {
            status: 400
        }
    }
}

export default submitForm