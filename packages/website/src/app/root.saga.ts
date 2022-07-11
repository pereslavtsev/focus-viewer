import { all, fork } from 'redux-saga/effects';

import { fetchFocusesWatcher } from '../features/focuses';
import { fetchTreesWatcher } from '../features/trees';
import { fetchReleasesWatcher } from '../features/releases';

export default function* rootSaga() {
  yield all([
    fork(fetchFocusesWatcher),
    fork(fetchTreesWatcher),
    fork(fetchReleasesWatcher),
  ]);
}
