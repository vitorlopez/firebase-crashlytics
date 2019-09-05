package io.stewan.capacitor.crashlytics;

import android.Manifest;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.crashlytics.android.Crashlytics;


import io.fabric.sdk.android.Fabric;

import static com.crashlytics.android.Crashlytics.*;


@NativePlugin(
        permissions = {
                Manifest.permission.ACCESS_NETWORK_STATE,
                Manifest.permission.INTERNET,
                Manifest.permission.WAKE_LOCK
        }
)
public class CrashlyticsPlugin extends Plugin {

    public void load() {
        Fabric.with(getContext(), new Crashlytics());
    }

    @PluginMethod()
    public void crash(PluginCall call) {
        // throw new RuntimeException("This is a crash");
        getInstance().crash();
    }

    @PluginMethod()
    public void logUser(PluginCall call) {
        String id = call.getString("id");
        String name = call.getString("name");
        String email = call.getString("email");

        if (id == null) {
            call.reject("missing id property");
        }

        if (name == null) {
            call.reject("missing name property");
        }

        if (email == null) {
            call.reject("missing email property");
        }

        setUserIdentifier(id);
        setUserEmail(email);
        setUserName(name);

        call.success();

    }
}
