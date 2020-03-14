const generateDate = require('./utils/generateDate.js')
const chalk = require('chalk')

module.exports = class Log {
    constructor(text, type, scope, placeholder) {
        this.text = text;
        this.type = type;
        this.scope = scope;
    }

    log(output, showDate) {
        const color = this.type.color || "WHITE";
        const scope = this.scope;
        const text = this.text;
        output(this.generateLog(color, scope, text, showDate));
    }

    generateLog(color, scope, text, showDate) {
        var date = "";
        if (showDate) {
            date = `@[${generateDate(null)}] `
        }
        return `#${chalk.gray(scope)} - ${date}${this.type.title}: ${chalk[color.toLowerCase()](text)}`
    }
}