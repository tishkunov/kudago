
// // Время в формате UNIX сейчас + 2 недели
module.exports.unixTimeRightNow =  Math.round((new Date()).getTime() / 1000)
// // Время в формате UNIX прямо сейчас
module.exports.unixTimeTwoWeeks = Math.round((new Date()).getTime() / 1000) + 1209600

