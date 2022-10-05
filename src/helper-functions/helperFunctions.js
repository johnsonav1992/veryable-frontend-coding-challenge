export const phoneNumberFormatter = phoneNumber => {
	const areaCode = phoneNumber.slice(0, 3)
	const exCode = phoneNumber.slice(3, 6)
	const lnNum = phoneNumber.slice(6, 10)

	return `(${areaCode}) ${exCode}-${lnNum}`
}

export const dateFormatter = date => {
	const parsedDate = new Date(date)
	const converted = parsedDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})
	const finalDate = converted.split('')
	finalDate.splice(4, 2)

	let hours = parsedDate.getHours()
	let minutes = parsedDate.getMinutes()
	const amPm = hours >= 12 ? 'PM' : 'AM'

	hours %= 12
	hours = hours || 12
	minutes = minutes < 10 ? `0${minutes}` : minutes

	const timeStr = `${hours}:${minutes} ${amPm}`

	return `${finalDate.join('')} ${timeStr}`
}
