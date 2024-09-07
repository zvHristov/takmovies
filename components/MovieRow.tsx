import { MoviesIF } from "@/common/type/user";
import { useSpot } from "@/hooks/useSpot";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { setSelectedMovieSpot } from "@/common/model/movies";
const MovieRow = ({ movie }: { movie: MoviesIF }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
     setSelectedSpot,
   } = useSpot();
   const handlePress = (movie: any) => {

    dispatch(setSelectedMovieSpot(movie));
    setSelectedSpot(movie);
   
   };
return (
  <View style={{flex: 1 }}>
    <ThemedView 
    style={{
      width: '100%',
      margin: 8,
      ...styles.bottomSheetShadow,

    }}
    >
    
    <ThemedView
    style={{
      flexDirection: 'row',
      overflow: 'hidden',
      width: '100%',

    }}
    >
   
    <ThemedText type="default" style={{
      ...styles.bottomSheetShadow,
      flex: 0,

    }}>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
      style={{
        width: 60,
        height: 80,
      }}
    />
   
    </ThemedText>
    
    <ThemedText  type="default"  style={{
      flexDirection: 'row',
    }}> {movie.title}{movie.release_date}
    {/* <Text>{movie.overview}</Text> */}
    </ThemedText>

    </ThemedView>
    <ThemedView style={{
      width: 60,
    }}>
    <TouchableOpacity  style={styles.buttonMovie} onPress={() => handlePress(movie)}>
      <Text 
        style={{color: '#000'}}
      >{'play'}</Text>
    </TouchableOpacity>
    </ThemedView>
    </ThemedView>
  </View>
    );
  };

import globalStyles from '@/assets/styles/styles';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/common/store/store";
import { ThemedView } from "./ThemedView";
const styles = { ...globalStyles, };
export default MovieRow;