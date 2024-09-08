import { Image, View, SafeAreaView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { AppDispatch, RootState } from '@common/store/store';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { setSelectedMovieSpot } from '@/common/model/movies';
import Login from '@/components/Login';
import { setAppUser } from '@/common/store/user';

import { useSpot } from '@/hooks/useSpot';

export default function HomeScreen() {
const dispatch = useDispatch<AppDispatch>();
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
const user = useSelector((state: RootState) => state.auth.user);

const movie = useSelector((state: RootState) => state.movies);
const selectedStateSpot = useSelector((state: RootState) => state.movies.selectedSpot);

const {
  MovieBottomSheetComponent,
  spotSheetRef, selectedSpot,
} = useSpot();

useEffect(() => {
  // console.log(user, 'userInfo--->user');
  // console.log(isAuthenticated, 'isAuthenticated');
  setAppUser(null, {
    isAuthenticated: false, user: user,
  }, dispatch);
  // getCurrentUser(dispatch, getCurrUser);
   try {
    // const res = httpGetMovies();
    // console.log(res, 'httpGetMovies');
      // Dispatch Redux action that uses useAxios
      //  dispatch(getCurrPopularMovies)
   } catch (error) {

   }

  //  

}, []);

const handleSheetChanges = (fromIndex: number, selectedSpot: MoviesIF) => {
  return fromIndex === 0 ? dispatch(setSelectedMovieSpot(selectedSpot)) : null;
};
console.log(user, 'user');
return (
  <View style={styles.container}>
    <ParallaxScrollView
        headerBackgroundColor={{ light: '#F7FB00', dark: '#fff' }}
        headerImage={
          <Image
            source={require('@/assets/images/Light.png')}
            style={[styles.logo, styles.bottomSheetShadow]}
          />
          
        }
        headerElement={
          <ThemedView
          style={{
            backgroundColor: '#fff',
          }}
          > 
            <ThemedView
              style={{
                ...styles.bottomSheetShadow,
                backgroundColor: '#fff',
                paddingVertical: 18,
              }}
            >
            <ThemedText type="defaultSemiBold" style={{color: '#000000'}}>
            {selectedStateSpot?.title}
              {+selectedStateSpot?.popularity?.toFixed(0)}
                <Icon size={12} style={[{ marginBottom: -3,  }]} name="star-outline" />
                {+selectedStateSpot?.vote_average?.toFixed(1)}
                <Icon size={12} style={[{ marginBottom: -3 }]} name="blur-radial" />
                {+selectedStateSpot?.vote_count?.toFixed(0)}
                <Icon size={12} style={[{ marginBottom: -3 }]} name="vote-outline" />
                {selectedStateSpot?.video && (
                <Icon size={12} style={[{ marginBottom: -3 }]} name="video-outline" />
                )}
            </ThemedText>
            </ThemedView>
            <ThemedText type="link"
             style={{marginTop: 10}}>
              <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${selectedStateSpot?.poster_path}` }}
              style={{
                ...styles.bottomSheetShadow,
                width: 460,
                height: 640,
              }}
            />
            </ThemedText>
          </ThemedView>
        }
        >
        <GradientBackground colors={['#F7FB00', '#C9A483', '#311FD8']}>
        <ThemedView style={{
                ...styles.bottomSheetShadow,
                flex: 1, 
                backgroundColor: '#fff',
                opacity: .8,
  
          }}>
            <HelloWave>
            <ThemedText type="title"
              style={{color: '#000',  backgroundColor: '#fff'}}
              >!Netflix</ThemedText>
              <ThemedText type="title"
              style={{color: '#000'}}
              >{user?.email || user}</ThemedText>
            </HelloWave>
        </ThemedView>
        </GradientBackground>

    </ParallaxScrollView>
    <ListMovies data={movie}/>
      {
        !user?.email && (
        <SafeAreaView style={styles.backgroundTransparentView}>
          <View style={styles.decoTransparentView}></View>
          <Login />
        </SafeAreaView>
        )
      }
    <MovieBottomSheetComponent
      handleSheetChanges={(fromIndex: number, selectedSpot: MoviesIF) => handleSheetChanges(fromIndex, selectedSpot)}
      spotSheetRef={spotSheetRef}
      selectedSpot={selectedStateSpot}

    />
  </View>
  );
}
// Styles
import globalStyles from '@/assets/styles/styles';

import ListMovies from '@/components/ListMovies';
import { MoviesIF } from '@/common/type/user';
import GradientBackground from '@/components/GradientBackground';

const styles = { ...globalStyles };
