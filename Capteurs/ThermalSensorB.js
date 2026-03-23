class ThermalSensorB {
  constructor(position) {
    this.position = position;
    this.process = null;
  }

  triggerHeatSignature(process) {
    this.process = process;
  }

  alert() {
    if (this.process) {
      this.process({
        sensor: `ThermalSensorB-${this.position}`,
        detection: "thermal",
        date: new Date().toISOString(),
      });
    }
  }
}

module.exports = ThermalSensorB;
