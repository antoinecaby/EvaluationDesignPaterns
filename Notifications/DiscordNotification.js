export default class DiscordNotification {
  constructor(serverName) {
    this.serverName = serverName;
  }

  send(alert) {
    console.log(`[DISCORD] -> ${alert.location} | ${alert.message}`);
  }
}
