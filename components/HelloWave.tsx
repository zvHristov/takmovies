import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { PropsWithChildren, ReactElement } from 'react';
import { ThemedView } from './ThemedView';

type Props = PropsWithChildren<{
  helloElement?: ReactElement;
}>;
export function HelloWave({
  children,
  helloElement
}: Props)  {
  const rotationAnimation = useSharedValue(0);
  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedView style={{}}>{helloElement}</ThemedView>
      <ThemedView style={{}}>{children}</ThemedView>
    </Animated.View>
  );
}