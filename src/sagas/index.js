import * as entriesSaga from "./entriesSaga"

export function initSagas(sagaMiddleware) {
    Object.values(entriesSaga)
        .filter(Boolean)
        .forEach(saga => sagaMiddleware.run(saga));
}