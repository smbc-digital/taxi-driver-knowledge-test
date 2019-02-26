import 'isomorphic-fetch'
import moment from 'moment'

export const getAvailableAppointments = async context => {
	const fromDate = context.isResit.value == 'false' ? moment() : moment(context.previousTestDate.value).add(4, 'weeks')
	const x = fromDate < moment() ? moment() : fromDate
	const request = {
		from: x,
		to: moment(x).add(18, 'weeks'),
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

export const getPaymentUrl = async (bookingId, testDate) => {
	try {
		const result = await fetch('/book-taxi-driver-knowledge-test/generate-payment-url', {
				method: 'POST',
				headers: {
					Accept: 'application/json; charset=utf-8',
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify({
					bookingId, testDate
				})
			})

		const url = await result.text()

		return {
			status: result.status,
			url
		}
	} catch (error) {
		return {
			status: 500
		}
	}
}
