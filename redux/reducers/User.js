import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Eric',
  lastName: 'Wilson',
  userId: 1,
  profileImage:
    'https://isaca-gwdc.org/wp-content/uploads/2016/12/male-profile-image-placeholder.png',
};

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, resetToInitialState} = User.actions;

export default User.reducer;
