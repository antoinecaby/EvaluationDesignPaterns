class CameraAAdapter {
  constructor(cameraA) {
    this.cameraA = cameraA;
  }

  subscribe(callback) {
    this.cameraA.onDetect((message) => {
      callback({
        sensorName: "CameraA",
        location: this.cameraA.location,
        type: "camera",
        message,
        date: new Date().toISOString(),
      });
    });
  }
}

class TemperatureSensorAAdapter {
  constructor(tempSensorA) {
    this.tempSensorA = tempSensorA;
  }

  subscribe(callback) {
    this.tempSensorA.onDetect((message) => {
      callback({
        sensorName: "TemperatureSensorA",
        location: this.tempSensorA.location,
        type: "temperature",
        message,
        date: new Date().toISOString(),
      });
    });
  }
}

class ThermalSensorBAdapter {
  constructor(thermalSensorB, roomName) {
    this.thermalSensorB = thermalSensorB;
    this.roomName = roomName;
  }

  subscribe(callback) {
    this.thermalSensorB.triggerHeatSignature((data) => {
      callback({
        sensorName: data.sensor,
        location: this.roomName,
        type: data.detection,
        message: `Signature thermique détectée dans ${this.roomName}`,
        date: data.date,
      });
    });
  }
}
