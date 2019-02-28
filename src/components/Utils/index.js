import 'isomorphic-fetch'
import moment from 'moment'

export const getAvailableAppointments = async context => {
	const earliestNewTestDate = context.isResit.value == 'false' ? moment() : moment(context.previousTestDate.value).add(4, 'weeks')
	const dateToSearchFrom = earliestNewTestDate < moment() ? moment() : earliestNewTestDate
	const request = {
		from: dateToSearchFrom,
		to: moment(dateToSearchFrom).add(18, 'weeks'),
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

export const reserveAppointment = async (isResit, selectedAppointment) => {
	const date = moment(selectedAppointment.date, 'dddd D MMMM YYYY', true).format('DD/MM/YYYY')
	console.log(selectedAppointment)
	console.log(selectedAppointment.times.startTime)
	const time = moment(selectedAppointment.times.endTime, 'H:mma', true).format('HH:mm:ss')
	const appointmentDateTime = moment(date + ' ' + time, 'DD/MM/YYYY HH:mm:ss')
	console.log(date)
	console.log(time)
	console.log(appointmentDateTime)

	try {
		const result = await fetch('/book-taxi-driver-knowledge-test/pencil-an-appointment', {
			method: 'POST',
			headers: {
				Accept: 'application/json; charset=utf-8',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				appointmentDateTime, isResit
			})
		})

		const responseObject = await result.json()

		return {
			status: result.status,
			bookingId: responseObject,
			testDate: appointmentDateTime
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
