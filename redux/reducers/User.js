import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage:
    'https://isaca-gwdc.org/wp-content/uploads/2016/12/male-profile-image-placeholder.png',
};

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {logIn, resetToInitialState} = User.actions;

export default User.reducer;
