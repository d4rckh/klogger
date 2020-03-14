module.exports = {
    types: [
        {
            name: ["warn", "warning",],
            color: "YELLOW",
            title: "WRN"
        },
        {
            name: ["err", "error",],
            color: "RED",
            title: "ERR"
        },
        {
            name: ["info", "information"],
            color: "BLUE",
            title: "IFO"
        },
        {
            name: ["default"],
            color: null,
            title: "LOG"
        }
    ],
    showLogs: false,
    scope: "my scope",
    output: (log) => console.log(log),
    secrets: [],
    showDate: true
}