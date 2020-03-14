const Log = require('./Log')
const typesStore = require('./typesStore')

module.exports = class Logger {
    constructor(settings) {
        this.settings = settings;
        this.types = new typesStore(this.settings.types);
        this.history = []
    }

    log(text,type="default", saveLog=true) {
        this.settings.secrets.forEach(secret => text = text.replace(secret, "{secret}"))
        const log = new Log(text, this.types.get(type), this.settings.scope, null);
        if (this.settings.showLogs) log.log(this.settings.output, this.settings.showDate)
        if (saveLog) this.history.push(log);
    }

    printLogs() {
        this.history.forEach(log => log.log(this.settings.output, this.settings.showDate))
    }
}