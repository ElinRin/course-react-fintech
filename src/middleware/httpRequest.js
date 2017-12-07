export default store => next => action => {
    if (action.type === 'API_REQUEST') {
        const URL = action.request.API + action.request.query;
        return fetch(URL, {
            method: action.request.method
        }).then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(
                    'Response failed: ' + response.status + ' (' + response.statusText + ')'
                ));
            }
            return response.json();
        }).then(data =>
                store.dispatch({
                type: action.call.success,
                payload: data
                })
        ).catch(err =>
                store.dispatch({
                type: action.call.fail
                })
        );
    }
    return next(action);
    };