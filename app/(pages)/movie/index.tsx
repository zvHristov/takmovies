import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import StackBackButton from '@/components/navigation/StackBackButton';
import { Stack } from 'expo-router';
import MoviePoster from '@/components/MoviePoster';
import { useSelector } from 'react-redux';
import { RootState } from '@/common/store/store';
const MovieIndex = () => {
  const selectedStateSpot = useSelector((state: RootState) => state.movies.selectedSpot);
  
  return (
    <View>
      <Stack.Screen options={{
            title: `${selectedStateSpot.title}`,
            headerLeft: () => <StackBackButton />,
          }} />
      <MoviePoster movieData={selectedStateSpot} hasLink={false}/>
    </View>
  );
};

export default MovieIndex;
