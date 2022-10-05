export const phoneNumberFormatter = (phoneNumber) => {
    const areaCode = phoneNumber.slice(0, 3)
    const exCode = phoneNumber.slice(3, 6)
	 	const lnNum = phoneNumber.slice(6, 10)

	return `(${areaCode}) ${exCode}-${lnNum}`
}

export const dateFormatter = (date) => {
    
}