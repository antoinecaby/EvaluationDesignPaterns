const EmailNotification = require("./EmailNotification");
const LogNotification = require("./LogNotification");
const DiscordNotification = require("./DiscordNotification");

class NotificationFactory {
  static create(type, config = {}) {
    if (type === "email") {
      return new EmailNotification(config.email);
    } else if (type === "log") {
      return new LogNotification(config.fileName);
    } else if (type === "discord") {
      return new DiscordNotification(config.serverName);
    }
  }
}
