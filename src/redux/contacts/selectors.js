export const selectAllContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;

import { createSelector } from "reselect";

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : "";
      return contactName.includes(normalizedFilter);
    });
  }
);
