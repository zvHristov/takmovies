
import { User } from '@firebase/auth';
import { getCurrPopularMovies } from '@/common/model/movies';
import { MoviesIF } from '@/common/type/user';
import { login } from '@/common/model/auth';
import {getCurrentUser} from '@/common/http/getCurrentUser';
import { getCurrUser } from '@/common/model/auth';
//getCurrUser

export const setAppUser = async (
  FirebaseUser: User | null,
   GCUser: { isAuthenticated: boolean, user: any | null }, 
   dispatch: Function): Promise<any> => {
    let fvr_movies = undefined;
    // let token = await Notifications.getExpoPushTokenAsync({
    //   projectId: '91ad690f-df13-4d71-b926-8477c40746ab',
    // });
    await getCurrentUser(dispatch, getCurrUser);
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7eafe4282a4022455741b3f147b89d4a&language=en-US&page=1');
      fvr_movies = await response.json();
    } catch {
      console.log('error');
    }
    if (fvr_movies) {
      dispatch(getCurrPopularMovies(fvr_movies));
    }

  // console.log(FirebaseUser, 'FirebaseUser')
  // console.log(GCUser, 'GCUser')
    const data = { ...FirebaseUser, ...GCUser };
    // console.log(data, 'data guest user');

  }