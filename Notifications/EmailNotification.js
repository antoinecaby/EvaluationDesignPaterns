export default class EmailNotification {
  constructor(email) {
    this.email = email;
  }

  send(alert) {
    console.log(
      `[EMAIL] -> ${this.email} | ${alert.date} | ${alert.location} | ${alert.message}`,
    );
  }
}
