import { WebPlugin } from "@capacitor/core";
export class FirebaseCrashlyticsWeb extends WebPlugin {
  constructor() {
    super({
      name: "FirebaseCrashlytic",
      platforms: ["web"],
    });
  }
  setUserId(_options) {
    return new Promise((resolve, _reject) => resolve);
  }
  addLogMessage(_options) {
    return new Promise((resolve, _reject) => resolve);
  }
  setEnabled(_options) {
    return new Promise((resolve, _reject) => resolve);
  }
  crash() {
    throw new Error("Method not implemented.");
  }
  setContext(options) {
    console.log(options);
    return new Promise((resolve, _reject) => resolve);
  }
  isEnabled() {
    throw new Error("Method not implemented.");
  }
  didCrashDuringPreviousExecution() {
    throw new Error("Method not implemented.");
  }
  sendUnsentReports() {
    throw new Error("Method not implemented.");
  }
  deleteUnsentReports() {
    throw new Error("Method not implemented.");
  }
  recordException(_options) {
    throw new Error("Method not implemented.");
  }
}
//# sourceMappingURL=web.js.map
