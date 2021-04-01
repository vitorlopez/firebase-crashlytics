import { WebPlugin } from "@capacitor/core";
import {
  FirebaseCrashlyticsPlugin,
  ContextOptions,
  iOSException,
  AndroidException,
} from "./definitions";
export declare class FirebaseCrashlyticsWeb
  extends WebPlugin
  implements FirebaseCrashlyticsPlugin {
  constructor();
  setUserId(_options: { userId: string }): Promise<void>;
  addLogMessage(_options: { message: string }): Promise<void>;
  setEnabled(_options: { enabled: boolean }): Promise<void>;
  crash(): Promise<void>;
  setContext(options: ContextOptions): Promise<void>;
  isEnabled(): Promise<{
    enabled: boolean;
  }>;
  didCrashDuringPreviousExecution(): Promise<{
    crashed: boolean;
  }>;
  sendUnsentReports(): Promise<void>;
  deleteUnsentReports(): Promise<void>;
  recordException(_options: iOSException | AndroidException): Promise<void>;
}
