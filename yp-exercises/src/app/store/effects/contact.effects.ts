import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as ContactActions from 'src/app/store/actions/contact.actions';
import { ContactDataService } from 'src/app/Providers/contacts-data.service';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactEffects {
  fetchContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.fetchContacts),
      mergeMap((props) =>
        this.contactDataService.getContacts(props.page).pipe(
          map((contacts) =>
            ContactActions.fetchContactsSuccess({ payload: contacts })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contactDataService: ContactDataService
  ) {}
}
