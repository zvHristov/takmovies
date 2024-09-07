/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#181A20';

export const Colors = {
  light: {
    text: '#181A20',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#616161',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#616161',
    background: 'transparent',
    tint: tintColorDark,
    icon: '#9E9E9E',
    tabIconDefault: '#9E9E9E',
    tabIconSelected: tintColorDark,
  },
};
