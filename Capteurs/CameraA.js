export default class CameraA {
  constructor(location) {
    this.location = location;
    this.callback = null;
  }

  onDetect(callback) {
    this.callback = callback;
  }

  alert() {
    if (this.callback) {
      this.callback(`Mouvement détecté par CameraA dans ${this.location}`);
    }
  }
}
