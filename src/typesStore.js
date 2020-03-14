module.exports = class typesStore extends Map {
    constructor(typesSettings) {
        super()
        typesSettings.forEach(typeSetting => {
            typeSetting.name.forEach(typeName => {
                this.set(typeName, typeSetting)
            })
        })
    }
}