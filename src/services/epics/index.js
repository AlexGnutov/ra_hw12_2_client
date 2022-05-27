import {ofType} from "redux-observable";
import {FETCH_SERVICES_REQUEST} from "../actions/actions";
import {catchError, map, of, switchMap} from "rxjs";
import {
    fetchServicesFailure,
    fetchServicesSuccess,
} from "../actions/action-creators";
import {ajax} from "rxjs/internal/ajax/ajax";

export const fetchServicesDataEpic = action$ => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_API_URL}/api/services`).pipe(
            map(o => fetchServicesSuccess(o)),
            catchError(e => of(fetchServicesFailure(e.message))),
        )
    ),
);



