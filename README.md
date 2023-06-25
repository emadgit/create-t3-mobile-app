# Create T3 Mobile App
A boilerplate based on [T3 Stack](https://create.t3.gg/) with support to make mobile apps for iOS and Android. 

## What's next? How do I make an app with this?

This is basically bootstrapped with `create-t3-app` so for all T3 part you can follow the official [Documentation](https://create.t3.gg/). In addition, this repo added support to generate hybrid iOS and Android apps using [Capacitorjs](https://capacitorjs.com/).

<div style="display:flex; flex-direction:row; padding: 5px;">
  <div style="display: flex; width: fit-content;"><img src="https://github.com/emadgit/create-t3-mobile-app/blob/main/public/android.png" style="width: fit-content;" /></div>
    <div style="display: flex; width: fit-content;"><img src="https://github.com/emadgit/create-t3-mobile-app/blob/main/public/ios.png" style="width: fit-content;" /></div>
</div>

So you do your usual T3 development to make your awesome app, once you'r happy with it, maybe you wanna publish your app also for mobile users. Here are the steps you need to do: 

You need to run `sudo gem install cocoapods` in order to be able to use Capacitor on iOS. Once cocoapods installed, then follow these steps:

- `pnpm build:mobile` -> This will generate an `out` folder.
- For Android, you need to run `pnpm make:android` -> This will create an `android` folder which is a nice and clean android project you can use in Android studio.
- For iOS, you need to run `pnpm make:ios` -> This will create an `ios` folder which is a nice and clean ios project you can use in Xcode.
- You can now open the apps locally, for android run `pnpm open:android` and for iOS run `pnpm open:ios`. These commands will open Android Studio and Xcode, so you should already installed those in your machine. Once app is open, you can run it there. 

# Sync apps

if you need to sync your changes from your T3 app to your mobile projects, follow these steps: 

- For android run `pnpm sync:android`
- For ios run `pnpm sync:ios`

Now your latest changes is ready to run in Android Studio or Xcode!

