import 'isomorphic-fetch'
import moment from 'moment'

export const formatAvailableAppointments = appointments => {
	return appointments.map(appointment => {
		return {
			date: appointment.date,
			displayDate: moment(appointment.date, 'DD/MM/YYYY').format('dddd D MMMM YYYY'),
			times: appointment.times.map(time => {
				const value = moment(`${appointment.date} ${time.startTime}`, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss')
				return {
					startTime: time.startTime,
					id: value,
					value,
					label: moment(time.startTime, 'HH:mm:ss').format('H:mma'),
					name: 'testDate'
				}
			})
		}
	})
}

export const getAvailableAppointments = async (isResit, from, to) => {
	const request = {
		from,
		to,
		isResit: isResit
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
			appointments: formatAvailableAppointments(responseObject)
		}
	} catch (error) {
		return {
			status: 500
		}
	}
}

export const reserveAppointment = async (isResit, testDate) => {
	try {
		const result = await fetch('/book-taxi-driver-knowledge-test/pencil-an-appointment', {
			method: 'POST',
			headers: {
				Accept: 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				testDate, isResit
			})
		})

		const responseObject = await result.json()

		return {
			status: result.status,
			bookingId: responseObject
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
