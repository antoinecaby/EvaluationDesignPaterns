export default class Room {
  constructor(name) {
    this.name = name;
    this.sensors = [];
    this.notifications = [];
  }

  addSensor(sensorAdapter) {
    this.sensors.push(sensorAdapter);

    sensorAdapter.subscribe((alert) => {
      this.notifyAll(alert);
    });
  }

  addNotification(notification) {
    this.notifications.push(notification);
  }

  notifyAll(alert) {
    console.log(`\n[Pièce ${this.name}] Alerte reçue`);

    this.notifications.forEach((notification) => {
      notification.send(alert);
    });
  }
}
