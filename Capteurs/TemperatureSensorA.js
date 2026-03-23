class TemperatureSensorA {
  constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
    this.callback = null;
  }

  onDetect(callback) {
    this.callback = callback;
  }

  alert(temperature) {
    if (this.callback && temperature >= this.threshold) {
      this.callback(
        `Température anormale (${temperature}°C) détecté dans ${this.location}`,
      );
    }
  }
}

module.exports = TemperatureSensorA;
