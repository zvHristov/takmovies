import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
    children: React.ReactNode;
    colors: string[];
  }

  const GradientBackground: React.FC<GradientBackgroundProps> = (
    props: GradientBackgroundProps
  ) => {
    const { children, colors } = props;
    // ...
    return (
        <LinearGradient
            colors={colors}
            start={[0, 0]}
            end={[1, 0]}
            style={{ flex: 1 }}
      >
        {children}
      </LinearGradient>
    );
  };

  export default GradientBackground;