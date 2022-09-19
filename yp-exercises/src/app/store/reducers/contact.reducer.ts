import { Action, createReducer } from '@ngrx/store';
import { Contact } from '../../models/contact'

export interface ContactState {
  contacts: Contact[];
  isLoading: boolean;
}

export const initialContactState: ContactState = {
  contacts: [],
  isLoading: false,
};

const contactReducer = createReducer(
  initialContactState
);

export function reducer(state: ContactState | undefined, action: Action) {
  return contactReducer(state, action);
}
