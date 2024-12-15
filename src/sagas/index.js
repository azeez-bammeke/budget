import * as entriesSaga from "./entriesSaga"
import * as entriesSagaDeletion from "./entriesSagaDeletion"
import * as addEntrySaga from "./entriesSagaAdd";

export function initSagas(sagaMiddleware) {
    Object.values(entriesSaga).forEach(saga => sagaMiddleware.run(saga));
    Object.values(entriesSagaDeletion).forEach(saga => sagaMiddleware.run(saga));
    Object.values(addEntrySaga).forEach(saga => sagaMiddleware.run(saga));
}