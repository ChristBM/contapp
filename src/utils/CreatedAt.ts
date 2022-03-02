/** @format */

export default function CreatedAt(created_at: string): string {
	let today: Date = new Date()
	let date: Date = new Date(created_at)

	let day: number = date.getDate()
	let month: number = date.getMonth()
	let year: number = date.getFullYear()

	const aDay: number = 86400000
	const aHour: number = 3600000
	const aMinute: number = 60000

	let Time: number = today.getTime() - date.getTime()

	if (Time / aDay < 7 && Time / aDay >= 1) {
		return `hace ${Math.floor(Time / aDay)} ${
			Math.floor(Time / aDay) === 1 ? 'día' : 'días'
		}`
	} else if (Time / aDay < 1) {
		if (Time / aHour < 24 && Time / aHour >= 1) {
			return `hace ${Math.floor(Time / aHour)} ${
				Math.floor(Time / aHour) === 1 ? 'hora' : 'horas'
			}`
		} else if (Time / aHour < 1) {
			return `hace ${Math.floor(Time / aMinute)} ${
				Math.floor(Time / aMinute) === 1 ? 'minuto' : 'minutos'
			}`
		}
	}

	return `${day}/${month + 1}/${year}`
}
