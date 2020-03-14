const l = require('./src/index')
const Logger = new l.Logger({...l.defaultSettings,
    secrets: [
        "thisismybottoken"
    ],
    showDate: false
})

Logger.log('thisismybottoken')
Logger.log('err', 'err')
Logger.log('warn', 'warn')
Logger.log('info', 'info')