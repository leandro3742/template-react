import { all } from 'redux-saga/effects';

export default function* rootSaga(){
    // con all te permite agregar en el array todos los watchers de todos los actions que tengas
    yield all([
    ])
}