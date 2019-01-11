
// Запрос на все события
export const getEvents = () => fetch('/api/events', {
								})
								.then(res => res.json())
								.catch(err => console.log(err))
// Запрос на одно событие
export const getEvent = (id) => {
	const eventId = JSON.stringify({id:id})
	fetch('/api/event', {
		body: eventId,
		token: 1,
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(err => console.log(err))
} 

							