// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Icon>['name']>) {
  return <Icon size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
