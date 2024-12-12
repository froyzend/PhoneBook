// Селектор для получения всех контактов
export const selectAllContacts = (state) => state.contacts.items;

// Селектор для получения фильтра по имени
export const selectNameFilter = (state) => state.filters.name;

// Селектор для получения отфильтрованных контактов
export const selectFilteredContacts = (state) => {
  const filter = state.filters.name.toLowerCase(); // нормализация фильтра
  return state.contacts.items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.phone.includes(filter) // фильтрация по имени или телефону
  );
};

// Селектор для получения статуса загрузки контактов
export const selectContactsLoading = (state) => state.contacts.loading;

// Селектор для получения ошибки
export const selectContactsError = (state) => state.contacts.error;
