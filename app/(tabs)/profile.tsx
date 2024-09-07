
import { Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FormProfile from '@/components/FormProfile';

export default function TabTwoScreen() {
  return (

    <ParallaxScrollView
    headerBackgroundColor={{ light: '#F7FB00', dark: '#311FD8' }}
    headerImage={
      <ThemedText style={{
          ...styles.bottomSheetShadow,
          position: 'absolute',
          top: 90,
          height: '100%',
          alignSelf: 'center',
          alignContent: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: 'transparent',
      }}
      >
        <Image
        source={require('@/assets/images/Ellipse.png')}
        style={{
         
          alignSelf: 'center',
          width: 140,
          height: 140,
        }}
      />
      </ThemedText>
      
    }
    headerElement={
      <> 
        <ThemedText type="defaultSemiBold" style={{color: '#fff'}}>
        Profile 
        </ThemedText>
        <ThemedText type="defaultSemiBold" style={{color: '#fff'}}>
          Header Profile
        </ThemedText>
        
      </>
    }
    >
    <ThemedView style={styles.titleContainer}>
      <ThemedView
        style={{
          ...styles.bottomSheetShadow,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          paddingVertical: 18,
        }}
      >
      <ThemedText type="title">
        Form
      </ThemedText>
        <FormProfile />
      </ThemedView>
    </ThemedView>
  </ParallaxScrollView>
   
   
  );
}
// Styles
import movies from '@/assets/styles/movies';
import globalStyles from '@/assets/styles/styles';
import GradientBackground from '@/components/GradientBackground';

const styles = { ...globalStyles, ...movies };