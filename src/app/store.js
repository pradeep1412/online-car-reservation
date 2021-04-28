import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import detailsReducer from '../features/counter/detailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    details:detailsReducer,
  },
});
