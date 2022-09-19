import { createAction, props } from '@ngrx/store';
import { Contact } from 'src/app/models/contact';

export const fetchContacts = createAction(
  '[ContactList Page] Fetch Contact List',
  props<{ page: number }>()
);

export const fetchContactsSuccess = createAction(
  '[Contacts API] Fetch Contact List Success',
  props<{ payload: Contact[] }>()
);

export const clearContacts = createAction(
  '[ContactList Page] Clear Contact List'
);

export const updateContactPicture = createAction(
  '[Content Detail Page] Update Profile Picture',
  props<{ contactId: number; picture: string }>()
);
