import { MoviesDataIF, MoviesIF } from "@/common/type/user";
import { FlatList, View, } from "react-native";
import MovieRow from "./MovieRow";
import { ThemedView } from "./ThemedView";
import { useCallback } from "react";

import type { ReactElement } from 'react';
interface ListMoviesProps {
    data: MoviesDataIF;
    childrenHeader?: ReactElement;
  }
const ListMovies: React.FC<ListMoviesProps> = ({ data, childrenHeader }) => {

const renderItem = ({ item: movie }: { item: MoviesIF }) => {
  return <MovieRow movie={movie} />;
};
  const keyExtractor = useCallback((item: MoviesIF) => item.id.toString(), []);
    return (
      <ThemedView
        style={{
          flex: 1,
          marginTop: 10,
          ...styles.bottomSheetShadow,
        }}
      >
      <ThemedView
        style={{
          flex: 1,
          marginTop: 10,
          backgroundColor: 'transparent',
        }}
      >
        <FlatList
          style={{ flexGrow: 0 }}
          data={data.results}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </ThemedView>
    </ThemedView>
  );
};
import globalStyles from '@/assets/styles/styles';

const styles = { ...globalStyles };
export default ListMovies;
