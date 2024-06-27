import { configureStore} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";/// i change the name of counter here  due to it is one  and default
export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
});