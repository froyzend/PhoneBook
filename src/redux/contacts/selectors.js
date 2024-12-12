// Селектор для получения всех контактов
export const selectAllContacts = (state) => state.contacts.items;

// Селектор для получения фильтра по имени
export const selectNameFilter = (state) => state.filters.name;

// Селектор для получения статуса загрузки контактов
export const selectContactsLoading = (state) => state.contacts.loading;

// Селектор для получения ошибки
export const selectContactsError = (state) => state.contacts.error;
