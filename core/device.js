class Device {
  constructor({ name = '', id = '', room = null } = {}) {
    this.name = name
    this.id = id
    this.room = room
  }
}

module.exports = Device
