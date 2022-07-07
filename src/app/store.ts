import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { default as focusesReducer } from '../features/focuses';
import treesReducer from '../features/trees/trees.slice';
import rootSaga from '../app/root.saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    focuses: focusesReducer,
    trees: treesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    })
      .concat(logger)
      .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;