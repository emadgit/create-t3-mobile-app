# Create T3 Mobile App
A template repo based on [T3 Stack](https://create.t3.gg/) with support to make mobile apps for iOS and Android using [Capacitorjs](https://capacitorjs.com/). 

ℹ️ When I say "mobile apps," I mean the mobile view of your web application. Don't expect all the fancy features you'd find in a native app, though. So, happy coding, and don't forget to prioritize the mobile-first strategy! 🚀

## What's next? How do I make an app with this?

This repo is basically bootstrapped with `create-t3-app` so for all T3 related parts, you can follow the official [Documentation](https://create.t3.gg/) and if you are not familiar with T3, I suggest to watch Theo's great [Tutorial](https://youtu.be/YkOSUVzOAA4).

In addition, this repo added support to generate iOS and Android apps using native runtime [Capacitorjs](https://capacitorjs.com/).

<div style="display:flex; flex-direction:row; padding: 5px;">
    <div style="display: flex; width: fit-content;"><img src="https://github.com/emadgit/create-t3-mobile-app/blob/main/public/ios.png" style="width: fit-content;" /></div>
    <div style="display: flex; width: fit-content;"><img src="https://github.com/emadgit/create-t3-mobile-app/blob/main/public/android.png" style="width: fit-content;" /></div>
</div>

Once you done with your Next.js app, if you also want to build iOS and Android apps from it, you can follow this instructions:

You need to run `sudo gem install cocoapods` in order to be able to use Capacitor on iOS.

For communicate with the server from the mobile apps, Next.js application with tRPC must be deployed, then you need to set your server url domain in `capacitor.config.ts` file. Here is an example for the config file:

```
const config: CapacitorConfig = {
  appId: "com.example.myt3mobileapp",
  appName: "myt3mobileapp",
  webDir: "out",
  server: {
    androidScheme: "https",
    // For communicate with the server Next.js application with tRPC must be deployed, for example if you are using
    // Vercel, url should be set to the domain https://YOURAPP.vercel.app
    url: "https://YOUR_APP.vercel.app",
  },
};
```

Now, you are ready to build the mobile apps, you can follow these steps to do so:

- `pnpm build:mobile` -> This will generate an `out` folder.
- For Android, you need to run `pnpm make:android` -> This will create an `android` folder which is a nice and clean android project you can use in Android studio.
- For iOS, you need to run `pnpm make:ios` -> This will create an `ios` folder which is a nice and clean ios project you can use in Xcode.
- You can now open the apps locally, for android run `pnpm open:android` and for iOS run `pnpm open:ios`. These commands will open Android Studio and Xcode, so you should already installed those in your machine. Once app is open, you can run it there. 

# Sync apps

if you need to sync your changes from your T3 app to your mobile projects, follow these steps: 

- For android run `pnpm sync:android`
- For ios run `pnpm sync:ios`

Now your latest changes is ready to run in Android Studio or Xcode!

# Capacitor configuration

There's a `capacitor.config.ts` file in the root folder where you can set high-level options for Capacitor tooling. Here are some of the common configs you can use: 

- `appId` -> The unique identifier of your packaged app. This is also known as the Bundle ID in iOS and the Application ID in Android. It must be in reverse domain name notation, generally representing a domain name that you or your company owns.
- `appName` -> The human-friendly name of your app. This should be what you'd see in the App Store, but can be changed after within each native platform after it is generated.
- `webDir` -> The directory of your compiled web assets. This directory should contain the final `index.html` of your app.
- `loggingBehavior` -> Can be one the following: `'none' | 'debug' | 'production'`. The build configuration (as defined by the native app) under which Capacitor will send statements to the log system. This applies to log statements in native code as well as statements redirected from JavaScript. Enabling logging will let statements render in the Xcode and Android Studio windows but can leak information on device if enabled * in released builds.
- `androidScheme` -> Configure the local scheme on Android. Default is `http`.

For more information see the [Capacitor Docs](https://capacitorjs.com/docs/config#schema)

# References

The stack originates from [create-t3-app](https://create.t3.gg/).
