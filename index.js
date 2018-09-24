/** @format */

import { Navigation } from 'react-native-navigation';

import { SplashScreen } from './src/pages';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => SplashScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.playground.WelcomeScreen',
            },
        },
    });
});
