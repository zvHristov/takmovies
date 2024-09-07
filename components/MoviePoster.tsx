import { MoviesIF } from '@/common/type/user';
import React from 'react';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
interface MoviePosterProps {
    movieData: MoviesIF; // Define the type of your movie data object here
    hasLink?: boolean;
  }
  
const MoviePoster: React.FC<MoviePosterProps> = ({ movieData, hasLink }) => {
    return (
      <>
      {
         movieData && (
          <ThemedView style={{
            ...styles.poster,
            ...styles.bottomSheetShadow,
            backgroundColor: 'rgba(0, 0, 0, 0.84)',
             }}>
            <ThemedText type="link"
             style={styles.releaseDate}>
                {+movieData?.popularity?.toFixed(0)}
                <Icon size={12} style={[{ marginBottom: -3 }]} name="star-outline" />
                {+movieData?.vote_average?.toFixed(1)}
                <Icon size={12} style={[{ marginBottom: -3 }]} name="blur-radial" />
                {+movieData?.vote_count?.toFixed(0)}
                <Icon size={12} style={[{ marginBottom: -3 }]} name="vote-outline" />
                {movieData?.video && (
                      <Icon size={12} style={[{ marginBottom: -3 }]} name="video-outline" />
                )}
              
            </ThemedText>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movieData?.poster_path}` }}
              style={styles.poster}
            />
            <ThemedText
             type="defaultSemiBold"
             
             style={styles.title}>{movieData.title}
             <>{movieData.original_language}</>
             </ThemedText>
            <ThemedText
                type="subtitle"
             style={styles.releaseDate}>{movieData.release_date}</ThemedText>
             <ThemedText
             type="default"
            
             >
                {movieData?.overview}
             </ThemedText>
             {hasLink && <Pressable onPress={() =>   router.push(`/movie`)}>
                  <ThemedText
                    type="link"
                    style={styles.title}>
                    View Movie
                  </ThemedText>
                  </Pressable>}
          </ThemedView>
        )
      }
      </>
    );
  };
  import globalStyles from '@/assets/styles/styles';
  import posterStyles from '@/assets/styles/posterStyles';

  const styles = { ...globalStyles, ...posterStyles };
  export default MoviePoster;