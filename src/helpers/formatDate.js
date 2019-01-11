// Хелпер для для форматирования даты
export const formatDate = (date, hour) => {
    const d = new Date(date);

    const month = 'Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь'.split(',')
    const minutes  = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()

    return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()} @ ${d.getHours()}:${minutes}`
        
};