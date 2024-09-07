// model/auth.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInfo, AuthState, MoviesIF, MoviesDataIF } from '@/common/type/user';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userInfo>) => {
      // console.log(state.user, 'state.auth User');
      state.isAuthenticated = true;
      state.user =  action.payload.userInfo;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    getCurrUser: (state, action: PayloadAction<userInfo>) => {
      console.log(state.user, 'state.auth getCurrUser');
      //TODO: check if user is authenticated
        state.isAuthenticated = true;
        state.user = action.payload.userInfo;

    },
  
    // 
  },
});

export const { login, logout, getCurrUser } = authSlice.actions;
export default authSlice.reducer;
