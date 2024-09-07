import React, { useMemo, useCallback , useRef, useState, ReactElement} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
 import Animated, {
  Extrapolate,
  withTiming,
} from 'react-native-reanimated';
import MoviePoster from '@/components/MoviePoster';

const MovieBottomSheetComponent = (
  { spotSheetRef, selectedSpot, handleSheetChanges }: 
  { spotSheetRef: any, selectedSpot: any, handleSheetChanges: Function }
) => {
  // variables
  const snapPoints = useMemo(() => ["70%", "75%", "10%", "80%"], []);
  const [currentPosition, setCurrentPosition] = useState(1);
  //#region callbacks
  const handleAnimate = useCallback((fromIndex, toIndex, selectedSpot) => {
    if (fromIndex > toIndex && fromIndex === currentPosition) {
      handleSheetChanges(-1, {[0]: selectedSpot});
    }
    setCurrentPosition(withTiming(toIndex, { duration: 300 }));
  }, [currentPosition]);
    return (
      <BottomSheet
      ref={spotSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      enableDynamicSizing={false}
      onAnimate={(fromIndex, toIndex) => handleAnimate(fromIndex, toIndex, selectedSpot)}

    >
      <View style={{}}>
        <Text style={{textAlign: 'center'}}>Awesome 🎉</Text>
        <MoviePoster movieData={selectedSpot} hasLink={true}/>
      </View>
    </BottomSheet>
    );
  };
  
  export default MovieBottomSheetComponent;