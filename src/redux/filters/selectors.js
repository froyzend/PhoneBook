export const selectFilteredContacts = (state) => {
  const filter = state.filters.toLowerCase();
  return state.contacts.items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.phone.includes(filter)
  );
};
