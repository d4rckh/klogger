const moment = require('moment')

module.exports = (placeholder) => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}