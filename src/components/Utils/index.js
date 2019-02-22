import 'isomorphic-fetch'
import Timeout from 'await-timeout'
import sanitizeHtml from 'sanitize-html'
import moment from 'moment'

export async function getAvailableAppointments(context) {
    const fromDate = context.isResit.value == 'false' ? moment() : moment(context.previousTestDate.value).add(4, 'weeks')
	const request = {
		from: fromDate,
		to: moment(fromDate).add(18, 'weeks'),
		isResit: context.isResit.value == 'true'
	}

	try {
		const result = await fetch('/book-taxi-driver-knowledge-test/available-appointments', {
			method: 'POST',
			headers: {
				Accept: 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(request)
		})

        const responseObject = await result.json()

		return {
			status: result.status,
			appointments: responseObject
		}
	} catch (error) {
		return {
			status: 500
		}
	}
}

export async function submitForm(context) {
	const convertedContext = {}
	const timeout = new Timeout()

	Object.keys(context).map(key => {
		if (context[key] !== undefined && context[key].value !== undefined) {
			if (typeof context[key].value === 'object') {
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
					Accept: 'application/json; charset=utf-8',
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
	} catch (error) {
		return {
			status: 400
		}
	}
}
