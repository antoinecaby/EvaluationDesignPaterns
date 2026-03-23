export default class LogNotification {
  constructor(fileName = "system.log") {
    this.fileName = fileName;
  }

  send(alert) {
    console.log(
      `[LOG:${this.fileName}] ${alert.date} | ${alert.sensorName} | ${alert.location} | ${alert.message}`,
    );
  }
}
