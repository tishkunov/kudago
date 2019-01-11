
// Запрос на все события
export const getEvents = () => fetch('/api/events', {
								})
								.then(res => res.json())
								.catch(err => console.log(err))